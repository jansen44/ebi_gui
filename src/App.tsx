import { Route, Routes } from "@solidjs/router";

import { Home } from "./pages/Home";
import { Manga } from "./pages/Manga";
import { Reader } from "./pages/Reader";
import { Source } from "./pages/Source";
import { Sidebar } from "./components/Sidebar";

import s from "./App.module.scss";

function App() {
  return (
    <div class={s.app}>
      <Sidebar />
      <div class={s.content}>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/source" component={Source} />
          <Route path="/manga" component={Manga} />
          <Route path="/reader" component={Reader} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
