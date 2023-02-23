import { Accessor, For } from "solid-js";
import s from "./MangaList.module.scss";

import { EbiManga } from "../../tauri/manga";
import { MangaListItem } from "./MangaListItem";

export interface IMangaListProps {
  mangaList: Accessor<EbiManga[] | null>;
}

export function MangaList(props: IMangaListProps) {
  const { mangaList } = props;

  return (
    <div class={s.mangaList}>
      <For each={mangaList()} fallback={<div>NOTHING HERE YET</div>}>
        {(manga) => <MangaListItem manga={manga} />}
      </For>
    </div>
  );
}
