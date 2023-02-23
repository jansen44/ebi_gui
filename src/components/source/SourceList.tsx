import { For } from "solid-js";

import { EbiSource } from "../../tauri/source";

import { SourceListItem } from "./SourceListItem";

import s from "./SourceList.module.scss";

export interface ISourceListProps {
  sources: EbiSource[];
}

export function SourceList(props: ISourceListProps) {
  const { sources } = props;

  return (
    <div class={s.container}>
      <For each={sources}>{(source) => <SourceListItem source={source} />}</For>
    </div>
  );
}
