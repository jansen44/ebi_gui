import { invoke } from "@tauri-apps/api/tauri";
import { EbiManga } from "./manga";

export interface EbiChapter {
  chapter: number;
  title: string;
  url: string;
  manga_identifier: string;
  source_identifier: string;
}

export async function chapterList(
  manga: EbiManga
): Promise<EbiChapter[] | null> {
  return await invoke("chapter_list", { manga });
}

export async function chapterPageList(
  chapter: EbiChapter
): Promise<string[] | null> {
  return await invoke("chapter_page_list", { chapter });
}

export async function chapterPage({
  chapter,
  pageUrl,
  page,
}: {
  chapter: EbiChapter;
  pageUrl: string;
  page: number;
}): Promise<string | null> {
  return await invoke("chapter_page", {
    chapter,
    pageUrl,
    page,
  });
}
