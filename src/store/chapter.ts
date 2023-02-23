import { createSignal } from "solid-js";
import { EbiChapter } from "../tauri/chapter";

export const selectedChapter = createSignal<EbiChapter | null>(null);
