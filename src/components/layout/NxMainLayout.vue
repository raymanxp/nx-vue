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
.nx-header {
  height: 6rem;
  padding: 1rem 2rem;;
}
.nx-main {
  justify-content: space-between;
  flex: 1;
}

@media (max-width: 480px) {
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
