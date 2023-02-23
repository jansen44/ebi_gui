import { createResource, createSignal } from "solid-js";
import { EbiSource, sourceList } from "../tauri/source";

export const selectedSourceSig = createSignal<EbiSource | null>(null);

export const sourceResource = () => createResource(sourceList);
