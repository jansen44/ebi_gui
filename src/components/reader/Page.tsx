import { Suspense, createResource } from "solid-js";
import s from "./Page.module.scss";
import { selectedChapterSig } from "../../store/chapter";
import { chapterPage } from "../../tauri/chapter";
import { convertFileSrc } from "@tauri-apps/api/tauri";

export interface IPageProps {
  pageUrl: string;
  pageIdx: number;
}

export function Page(props: IPageProps) {
  const { pageUrl, pageIdx } = props;
  const [chapter] = selectedChapterSig;

  const [page] = createResource(
    { chapter: chapter()!, pageUrl, page: pageIdx },
    chapterPage
  );

  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <img
          class={s.page}
          src={convertFileSrc(page()!)}
          alt={`chapter ${chapter()?.chapter} page`}
        />
      </Suspense>
    </div>
  );
}
