<script>
  export let group;
  export let homeRoute;
  export let ownRoute;
  let user = null;
  $: sortedUsers = group.users.sort((a, b) => a.numWeek <= b.numWeek);

  // does the user fetch in here
  /*
  $: fetch(`localhost=${page}`, {
    method: "POST",
    body: `password=${pass}`,
  })
    .then((r) => r.json())
    .then((data) => {
      items = data;
      offset = PAGE_SIZE * (page - 1);
      window.scrollTo(0, 0);
    });
    */

  const setUser = (u) => (user = u);
</script>

<style>
  a {
    font-size: 1.1em;
    margin: 0.5em 0;
    color: #000096;
    text-decoration: none;
  }
  a:visited {
    color: #000096;
  }
  a:hover {
    text-decoration: underline;
    font-weight: 400;
  }
  div.container {
    width: 700px;
    display: grid;
    grid-template-columns: 40% auto;
  }
  header {
    color: #ff0080;
    font-size: 1.2em;
  }
  a.selected {
    color: #ff0080;
  }
  article.user {
    position: relative;
    padding: 0.2em 0.2em 0.2em 0em;
    border-bottom: 1px solid #eee;
  }
  div.msgs {
    padding: 0em 0em 0em 0.4em;
  }
</style>

<a href={homeRoute}>« Home</a>
<h2>{group.name}</h2>
<div class="container">
  <div>
    <header>Users</header>
    {#each group.users as u, i}
      <article class="user">
        <a
          class={u === user ? 'selected' : ''}
          href={ownRoute}
          on:click|preventDefault={setUser(u)}>
          {u.name}: {u.numWeek}, {u.numMonth}
        </a>
      </article>
    {/each}
  </div>
  <div class="msgs">
    <header>Messages</header>
    {#if user}{user.name}{:else}Click a user to select a message{/if}
  </div>

</div>
