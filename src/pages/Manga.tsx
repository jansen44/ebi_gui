import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";
import { convertFileSrc } from "@tauri-apps/api/tauri";

import s from "./Manga.module.scss";

import { selectedMangaSig } from "../store/manga";
import { chapterList as chapterListState } from "../store/chapter";
import { ChapterList } from "../components/chapter/ChapterList";

export function Manga() {
  const [manga] = selectedMangaSig;
  const chapterList = chapterListState();

  return (
    <div class={s.manga}>
      <Show when={manga()}>
        <h1 class={s.title}>{manga()!.title}</h1>
        <div class={s.content}>
          <img
            class={s.cover}
            src={convertFileSrc(manga()!.cover)}
            alt={`${manga()!.title} cover`}
          />
          <ChapterList chapterList={chapterList} />
        </div>
      </Show>

      <Show when={!manga()}>
        <Navigate href={"/"} />
      </Show>
    </div>
  );
}
