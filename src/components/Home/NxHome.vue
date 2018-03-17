<template>
  <nx-main-layout>
      <nx-header slot="nx-header"></nx-header>
      <nx-footer slot="nx-footer"></nx-footer>
      <nx-nav slot="nx-nav"></nx-nav>
      <nx-main></nx-main>
  </nx-main-layout>
</template>

<script>
import NxMainLayout from '../layout/NxMainLayout.vue'
import NxHeader from './NxHeader.vue'
import NxFooter from './NxFooter.vue'
import NxMain from './NxMain.vue'
import NxNav from './NxNav.vue'

export default {
  components: {NxMainLayout, NxHeader, NxFooter, NxMain, NxNav},
  name: 'NxHome'
}
</script>

<style lang="scss" scoped>

</style>
