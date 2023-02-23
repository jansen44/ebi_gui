import { useNavigate } from "@solidjs/router";
import s from "./Sidebar.module.scss";

import { selectedSourceSig } from "../store/source";

export function Sidebar() {
  const [, setSelectedSource] = selectedSourceSig;

  const navigate = useNavigate();

  const onHomeClick = () => {
    setSelectedSource(null);
    navigate("/");
  };

  return (
    <div class={s.sidebar}>
      <div>
        <button onClick={onHomeClick}>Home</button>
      </div>
    </div>
  );
}
