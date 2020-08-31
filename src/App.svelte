<script>
  import List from "./List.svelte";
  import Group from "./Group.svelte";
  import { onMount } from "svelte";
  export let name;

  let groups = [
    {
      resource: { owner: "~timluc-miptev", name: "the-collapse" },
      name: "💸 The Collapse",
      chats: [
        { path: "/~timluc-miptev/technical-2147" },
        { path: "/~timluc-miptev/politics--broadly-defined-5795" },
        { path: "/~timluc-miptev/macro---monetary-879" },
      ],
      users: [
        { user: "~locbur-pasneb", numWeek: 0, numMonth: 0 },
        { user: "~tirlyd-tadlug", numWeek: 0, numMonth: 12 },
        { user: "~fabnev-hinmur", numWeek: 2, numMonth: 37 },
      ],
    },
    {
      resource: { owner: "~risruc-habteb", name: "rabsef-somlus" },
      name: "HoonivU Staff",
      chats: [],
      users: [],
    },
  ];
  let group = null;

  async function hashchange() {
    const path = window.location.hash.slice(1);

    if (path.startsWith("/group")) {
      const groupPath = path.slice(7).split("/");
      const r = { owner: groupPath[0], name: groupPath[1] };
      group = groups.find(
        (g) => g.resource.owner === r.owner && g.resource.name === r.name
      );
      window.scrollTo(0, 0);
    } else {
      group = null;
      window.location.hash = "/top";
    }
  }
  onMount(hashchange);
</script>

<style>
  main {
    position: relative;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff0080;
    text-transform: lowercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: 800px;
    }
  }
</style>

<svelte:window on:hashchange={hashchange} />

<main>
  <h1>{name}</h1>
  <div>
    {#if group}
      <Group {group} homeRoute="#/top" />
    {:else}
      <List {groups} />
    {/if}
  </div>
</main>
