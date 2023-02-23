#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use ebi::sources::{archive::SourceArchiver, EbiChapter, EbiManga, EbiSource, SourceManager};
use tauri::{Manager, State};

#[tauri::command]
fn sources(source_manager: State<SourceManager>) -> Vec<EbiSource> {
    // The source list depends on how readDir works, which may
    // return sources out of order.
    let mut sources = source_manager.sources();
    sources.sort_by(|a, b| a.title.cmp(&b.title));
    sources
}

#[tauri::command]
fn manga_list(identifier: &str, source_manager: State<SourceManager>) -> Option<Vec<EbiManga>> {
    let manga = source_manager.manga_list(identifier);

    match manga {
        Ok(manga) => Some(manga),
        Err(err) => {
            log::error!("{}", err);
            None
        }
    }
}

#[tauri::command]
fn manga_cover(manga: EbiManga, archive: State<SourceArchiver>) -> String {
    match archive.save_manga_cover(&manga) {
        Ok(manga) => manga.cover,
        Err(err) => {
            log::error!("{}", err);
            manga.cover
        }
    }
}

#[tauri::command]
fn chapter_list(manga: EbiManga, source_manager: State<SourceManager>) -> Option<Vec<EbiChapter>> {
    let chapters = source_manager.chapter_list(&manga);

    match chapters {
        Ok(chapters) => {
            let mut chapters = chapters;
            chapters.reverse();
            Some(chapters)
        }
        Err(err) => {
            log::error!("{}", err);
            None
        }
    }
}

#[tauri::command]
fn chapter_page_list(
    chapter: EbiChapter,
    source_manager: State<SourceManager>,
) -> Option<Vec<String>> {
    let chapters = source_manager.chapter_page_list(&chapter);

    match chapters {
        Ok(chapters) => Some(chapters),
        Err(err) => {
            log::error!("{}", err);
            None
        }
    }
}

fn main() {
    simple_logger::SimpleLogger::new().env().init().unwrap();

    let mut source_manager = SourceManager::default();
    let source_archive = SourceArchiver::from(&source_manager);
    source_manager.load_sources().unwrap();

    let source_dir = source_manager.source_dir();
    log::debug!("{}", source_dir.display());

    tauri::Builder::default()
        .setup(|app| {
            app.manage(source_manager);
            app.manage(source_archive);

            let asset_scope = app.asset_protocol_scope();
            asset_scope.allow_directory(source_dir, true).unwrap();

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            sources,
            manga_list,
            manga_cover,
            chapter_list,
            chapter_page_list
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
