import { useNavigate } from "@solidjs/router";
import s from "./Sidebar.module.scss";

import { selectedSourceSig } from "../store/source";
import { selectedMangaSig } from "../store/manga";
import { Show } from "solid-js";
import { selectedChapterSig } from "../store/chapter";

export function Sidebar() {
  const [selectedSource, setSelectedSource] = selectedSourceSig;
  const [selectedManga, setSelectedManga] = selectedMangaSig;
  const [selectedChapter, setSelectedChapter] = selectedChapterSig;

  const navigate = useNavigate();

  const onHomeClick = () => {
    setSelectedChapter(null);
    setSelectedManga(null);
    setSelectedSource(null);
    navigate("/");
  };

  const onSourceClick = () => {
    setSelectedChapter(null);
    setSelectedManga(null);
    navigate("/source");
  };

  const onMangaClick = () => {
    setSelectedChapter(null);
    navigate("/manga");
  };

  return (
    <div class={s.sidebar}>
      <div class={s.navigation}>
        <button onClick={onHomeClick}>Home</button>
        <Show when={!!selectedSource()}>
          <button onClick={onSourceClick}>
            {selectedSource()?.identifier}
          </button>
        </Show>
        <Show when={!!selectedManga()}>
          <button onClick={onMangaClick}>{selectedManga()?.identifier}</button>
        </Show>
        <Show when={!!selectedChapter()}>
          <button onClick={onMangaClick}>{selectedChapter()?.chapter}</button>
        </Show>
      </div>
    </div>
  );
}
