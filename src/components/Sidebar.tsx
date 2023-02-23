import { A } from "@solidjs/router";
import s from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div class={s.sidebar}>
      <div>
        <A href="/">Home</A>
      </div>
    </div>
  );
}
