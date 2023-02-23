import { createEffect, createSignal } from "solid-js";
import { EbiChapter, chapterList as chapterListInvoke } from "../tauri/chapter";
import { selectedMangaSig } from "./manga";

export const selectedChapterSig = createSignal<EbiChapter | null>(null);

export const chapterList = () => {
  const [manga] = selectedMangaSig;
  const [chapterList, setChapterList] = createSignal<EbiChapter[] | null>(null);

  createEffect(() => {
    if (!manga()) {
      return;
    }

    chapterListInvoke(manga()!).then((res) => {
      if (res) {
        setChapterList(res);
      }
    });
  });

  return chapterList;
};
