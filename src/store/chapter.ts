import { createSignal } from "solid-js";
import { EbiChapter } from "../tauri/chapter";

export const selectedChapterSig = createSignal<EbiChapter | null>(null);
