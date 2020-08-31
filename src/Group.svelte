<script>
  export let group;
  export let homeRoute;
  let user;

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
    grid-template-columns: 60% auto;
  }
  div.users {
  }
  div.msgs {
    text-align: left;
  }
</style>

<a href={homeRoute}>« Home</a>
<h2>{group.name}</h2>
<div class="container">
  <div class="users">
    Users
    <br />
    This is a long message
  </div>
  <div class="msgs">Messages</div>
</div>
