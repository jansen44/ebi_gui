import { convertFileSrc } from "@tauri-apps/api/tauri";

import { Show, Suspense, createEffect, createResource } from "solid-js";
import { EbiManga, mangaCover } from "../../tauri/manga";

import s from "./MangaListItem.module.scss";

export interface IMangaListItemProps {
  manga: EbiManga;
}

export function MangaListItem(props: IMangaListItemProps) {
  const { manga } = props;

  const [cover] = createResource(manga, mangaCover);

  return (
    <div class={s.manga} onClick={() => {}}>
      <Suspense fallback={<div>loading</div>}>
        <img
          class={s.cover}
          src={convertFileSrc(cover()!)}
          alt={`${manga.title} cover`}
        />
      </Suspense>
      <div class={s.textContainer}>
        <h4>{manga.title}</h4>
        <Show when={!!manga.description}>
          <span>{manga.description}</span>
        </Show>
      </div>
    </div>
  );
}
