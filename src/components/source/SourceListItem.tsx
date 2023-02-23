import { EbiSource } from "../../tauri/source";
import s from "./SourceListItem.module.scss";

interface ISourceListItemProps {
  source: EbiSource;
}

export function SourceListItem(props: ISourceListItemProps) {
  const { source } = props;

  return (
    <div class={s.container}>
      <div class={s.titleContainer}>
        <h1 class={s.title}>
          {source.locale} - {source.title}
        </h1>
        <span class={s.identifier}>{source.identifier}</span>
      </div>
      <p>{source.description}</p>
    </div>
  );
}
