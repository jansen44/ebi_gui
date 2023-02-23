import { createSignal } from "solid-js";
import { EbiManga } from "../tauri/manga";

export const selectedManga = createSignal<EbiManga | null>(null);
