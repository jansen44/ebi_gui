import { invoke } from "@tauri-apps/api/tauri";

export type SourceLocale = "pt_BR" | "en_US";

export interface EbiSource {
  identifier: string;
  title: string;
  description: string;
  locale: SourceLocale;
}

async function sourceList(): Promise<EbiSource[]> {
  return await invoke("sources");
}
