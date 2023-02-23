import { Show } from "solid-js";
import { selectedSourceSig } from "../../store/source";
import { EbiSource } from "../../tauri/source";
import s from "./SourceListItem.module.scss";
import { Navigate } from "@solidjs/router";

interface ISourceListItemProps {
  source: EbiSource;
}

export function SourceListItem(props: ISourceListItemProps) {
  const { source } = props;

  const [selectedSource, setSelectedSource] = selectedSourceSig;

  return (
    <div class={s.container} onClick={() => setSelectedSource(source)}>
      <div class={s.titleContainer}>
        <h1 class={s.title}>
          {source.locale} - {source.title}
        </h1>
        <span class={s.identifier}>{source.identifier}</span>
      </div>
      <p>{source.description}</p>

      <Show when={!!selectedSource()}>
        <Navigate href="/source" />
      </Show>
    </div>
  );
}
