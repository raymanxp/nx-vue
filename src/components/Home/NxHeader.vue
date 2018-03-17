<template>
  <header class="nx-header">
    <div class="profiles">
      <div>you</div>
    </div>
    <div class="system-status">
      <span class="item">{{time}}</span>
      <clr-icon class="item" shape="wifi" size="28"></clr-icon>
      100%
      <clr-icon class="item" shape="battery" size="28" dir="right"></clr-icon>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NxHeader',
  data: function () {
    return {
      time: 'time'
    }
  }
}
</script>

<style lang="scss">
.nx-header {
  display: flex;
  height: 6rem;
  padding: 1rem;

  .profiles {
    flex: 1;
  }

  .system-status {
    text-align: right;
    flex: 1;
    .item {
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
}
</style>
