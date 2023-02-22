import { invoke } from "@tauri-apps/api/tauri";

export interface EbiManga {
  identifier: string;
  title: string;
  cover: string;
  url: string;
  genres: string[];
  description: string | null;
  source_identifier: string;
}

async function mangaList(
  source_identifier: string
): Promise<EbiManga[] | null> {
  return await invoke("manga_list", { identifier: source_identifier });
}
