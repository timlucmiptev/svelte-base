import { writable } from "svelte/store";

function createApi() {
  const { subscribe, set, update } = writable(new Channel());

  const poke = (json) => {
    update((chan) => {
      chan.poke(
        window.ship,
        "picky-view",
        "picky-view-action",
        json,
        () => console.log("Successful poke"),
        (err) => console.log(err)
      );
      return chan;
    });
  };

  return {
    subscribe,
    test: () => {
      poke({
        ban: {
          rid: { entity: "~timluc-miptev", name: "the-collapse" },
          user: "~fabnev-hinmur",
        },
      });
    },
  };
}

export const api = createApi();
