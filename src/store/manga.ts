import { createEffect, createSignal } from "solid-js";
import { EbiManga, mangaList as mangaListInvoke } from "../tauri/manga";
import { selectedSourceSig } from "./source";

export const selectedMangaSig = createSignal<EbiManga | null>(null);

export const mangaList = () => {
  const [source] = selectedSourceSig;
  const [mangaList, setMangaList] = createSignal<EbiManga[] | null>(null);

  createEffect(() => {
    if (!source()) {
      return;
    }

    mangaListInvoke(source()!.identifier).then((res) => {
      if (res) {
        setMangaList(res);
      }
    });
  });

  return mangaList;
};
