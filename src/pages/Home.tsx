import { A } from "@solidjs/router";

import { sourceResource } from "../store/source";

import s from "./Home.module.scss";
import { SourceList } from "../components/source/SourceList";
import { Show } from "solid-js";

export function Home() {
  const [sources] = sourceResource();

  return (
    <div class={s.home}>
      <h1 class={s.title}>Sources</h1>
      <div>
        <Show when={!!sources()}>
          <SourceList sources={sources()!} />
        </Show>
      </div>
    </div>
  );
}
