<template>
  <div class="nx-footer-container">
    <div class="nx-footer-actions">
      <label><button>+</button>Options</label>
      <label><button>A</button>Start</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NxFooter'
}
</script>

<style lang="scss" scoped>
.nx-footer-container {
  display: flex;
  border-top: 1px solid white;
  padding-top: 0;
  height: 100%;

  .nx-footer-controller {
    flex: 1;
  }
  .nx-footer-actions {
    flex: 1;
    height: 100%;
    text-align: right;
    padding: 0 .25rem;
    label {
      flex: 1;
      font-size: .8rem;
      margin: 0 1.25rem;
      vertical-align: middle;
    }
    button {
      appearance: none;
      border-radius: 100%;
      height: 1rem;
      margin-right: 0.25rem;
      padding: 0;
      width: 1rem;
    }
  }
}
</style>
