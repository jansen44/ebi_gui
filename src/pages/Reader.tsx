import { For, Show, createEffect, createSignal } from "solid-js";
import { Navigate } from "@solidjs/router";

import s from "./Reader.module.scss";

import { selectedChapterSig } from "../store/chapter";
import { chapterPageList } from "../tauri/chapter";
import { Page } from "../components/reader/Page";

export function Reader() {
  const [chapter] = selectedChapterSig;
  const [pages, setPages] = createSignal<string[] | null>(null);

  createEffect(() => {
    if (!chapter()) {
      return;
    }

    chapterPageList(chapter()!).then((pages) => {
      if (pages) {
        setPages(pages);
      }
    });
  });

  return (
    <div>
      <Show when={chapter()}>
        <For each={pages()} fallback={<div>NotYet</div>}>
          {(page, i) => <Page pageIdx={i()} pageUrl={page} />}
        </For>
      </Show>
      <Show when={!chapter()}>
        <Navigate href={"/"} />
      </Show>
    </div>
  );
}
