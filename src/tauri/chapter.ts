import { invoke } from "@tauri-apps/api/tauri";
import { EbiManga } from "./manga";

export interface EbiChapter {
  chapter: number;
  title: string;
  url: string;
  manga_identifier: string;
  source_identifier: string;
}

async function chapterList(manga: EbiManga): Promise<EbiChapter[] | null> {
  return await invoke("chapter_list", { manga });
}

async function chapterPageList(chapter: EbiChapter): Promise<string[] | null> {
  return await invoke("chapter_page_list", { chapter });
}
