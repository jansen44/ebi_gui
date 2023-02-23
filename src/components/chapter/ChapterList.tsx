import { Accessor, For, Show } from "solid-js";

import s from "./ChapterList.module.scss";

import { EbiChapter } from "../../tauri/chapter";
import { selectedChapterSig } from "../../store/chapter";
import { Navigate } from "@solidjs/router";

export interface IChapterListProps {
  chapterList: Accessor<EbiChapter[] | null>;
}

export function ChapterList(props: IChapterListProps) {
  const { chapterList } = props;

  const [selectedChapter, setSelectedChapter] = selectedChapterSig;

  return (
    <div class={s.chapterList}>
      <For each={chapterList()} fallback={<div>NOTHING HERE YET</div>}>
        {(chapter) => (
          <span onClick={() => setSelectedChapter(chapter)} class={s.chapter}>
            {chapter.chapter} - {chapter.title}
          </span>
        )}
      </For>

      <Show when={!!selectedChapter()}>
        <Navigate href="/reader" />
      </Show>
    </div>
  );
}
