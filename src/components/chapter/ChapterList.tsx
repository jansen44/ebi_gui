import { Accessor, For } from "solid-js";

import s from "./ChapterList.module.scss";

import { EbiChapter } from "../../tauri/chapter";

export interface IChapterListProps {
  chapterList: Accessor<EbiChapter[] | null>;
}

export function ChapterList(props: IChapterListProps) {
  const { chapterList } = props;

  return (
    <div class={s.chapterList}>
      <For each={chapterList()} fallback={<div>NOTHING HERE YET</div>}>
        {(chapter) => (
          <span class={s.chapter}>
            {chapter.chapter} - {chapter.title}
          </span>
        )}
      </For>
    </div>
  );
}
