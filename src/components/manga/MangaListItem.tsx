import { convertFileSrc } from "@tauri-apps/api/tauri";
import { Navigate } from "@solidjs/router";

import { Show, Suspense, createResource } from "solid-js";
import { EbiManga, mangaCover } from "../../tauri/manga";

import s from "./MangaListItem.module.scss";
import { selectedMangaSig } from "../../store/manga";

export interface IMangaListItemProps {
  manga: EbiManga;
}

export function MangaListItem(props: IMangaListItemProps) {
  const { manga } = props;

  const [selectedManga, setSelectedManga] = selectedMangaSig;
  const [cover] = createResource(manga, mangaCover);

  return (
    <div
      class={s.manga}
      onClick={() =>
        setSelectedManga({ ...manga, cover: cover() || manga.cover })
      }
    >
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

      <Show when={!!selectedManga()}>
        <Navigate href="/manga" />
      </Show>
    </div>
  );
}
