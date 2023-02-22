import { createEffect, createResource } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

async function sourceList(): Promise<any> {
  return await invoke("manga_list", { identifier: "opex" });
}

function App() {
  const [sources] = createResource(sourceList);

  createEffect(() => {
    console.log(sources());
  });

  return <div class="container"></div>;
}

export default App;
