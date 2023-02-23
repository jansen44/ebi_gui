import s from "./Source.module.scss";

import { selectedSourceSig } from "../store/source";
import { mangaList as mangaListState } from "../store/manga";
import { MangaList } from "../components/manga/MangaList";
import { Show } from "solid-js";
import { Navigate } from "@solidjs/router";

export function Source() {
  const [source] = selectedSourceSig;
  const mangaList = mangaListState();

  return (
    <div class={s.source}>
      <h1 class={s.title}>{source()?.title}</h1>

      <MangaList mangaList={mangaList} />

      <Show when={!source()}>
        <Navigate href={"/"} />
      </Show>
    </div>
  );
}
