import { writable } from "svelte/store";

function createApi() {
  const { subscribe, set, update } = writable({ chan: new Channel() });

  /* 
/primary
- subscribe on load
- gets diff messages?
- make an onEvent type handler that updates different parts of the state?
*/

  // opens a subscription to /primary
  update((store) => {
    store.chan.subscribe(
      window.ship,
      "picky-view",
      "/primary",
      (err) => console.log("Sub Error"),
      (data) => console.log(`got response: ${data}`),
      () => console.log("Sub Quit")
    );
    return store;
  });

  const poke = (json) => {
    update((store) => {
      store.chan.poke(
        window.ship,
        "picky-view",
        "picky-view-action",
        json,
        () => console.log("Successful poke"),
        (err) => console.log(err)
      );
      return store;
    });
  };

  const ban = (user) => {
    poke({
      ban: {
        rid: { entity: "~timluc-miptev", name: "the-collapse" },
        user: user,
      },
    });
  };

  return {
    subscribe,
    ban,
  };
}

export const api = createApi();
