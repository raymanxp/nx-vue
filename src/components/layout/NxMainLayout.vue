<template>
  <div class="nx-container">
    <header class="nx-header">
      <slot name="nx-header"></slot>
    </header>
    <main class="nx-main">
        <slot></slot>
    </main>
    <nav class="nx-nav">
        <slot name="nx-nav"></slot>
    </nav>
    <footer class="nx-footer">
        <slot name="nx-footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NxMainLayout'
}
</script>

<style lang="scss">
@media screen and (orientation: portrait) {
  .nx-main {
    // display: flex;
  }
}
.nx-header {
  height: 5rem;
  padding: 1rem 2rem;
  overflow: scroll;
}
.nx-main {
  flex: 1;
  overflow: scroll;
}

@media (max-width: 374px) {
  .nx-nav {
    width: 100%;
  }
}
.nx-nav {
  padding: 0.5rem;
  height: 6rem;
  margin: 0 auto;
  overflow-x: scroll;
  white-space: nowrap;
}
.nx-footer {
  height: 2rem;
  padding: 0 .25rem;
}
</style>
