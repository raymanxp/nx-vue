<template>
  <div class="nx-header-container">
    <div class="profiles">
      <div>you</div>
    </div>
    <div class="system-status">
      <span class="item">{{time}}</span>
      <clr-icon class="item" shape="wifi" size="24"></clr-icon>
      <span class="item">100%</span>
      <clr-icon class="item" shape="battery" size="24" dir="right"></clr-icon>
    </div>
  </div>
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
.nx-header-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.profiles {
  flex: 1;
}

.system-status {
  text-align: right;
  flex: 1;
  .item {
    font-size:.8rem;
    font-weight: 400;
    display: inline-block;
    margin: 0 0.5rem;
  }
}
</style>
