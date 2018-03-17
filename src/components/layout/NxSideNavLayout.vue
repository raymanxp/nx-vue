<template>
  <div class="nx-container">
      <header slow="nx-header">
      </header>
      <nav slot="nx-nav">
      </nav>
      <main>
          <slot></slot>
      </main>
      <footer slot="nx-footer">
      </footer>
  </div>
</template>

<script>
export default {
    name: 'NxSideNavLayout'
}
</script>

<style lang="scss">

</style>
