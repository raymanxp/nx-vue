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
    align-items: center;
    justify-content: center;
    label {
      flex: 1;
      margin-right: 0.5rem;
    }
    button {
      appearance: none;
      border-radius: 100%;
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 0.25rem;
    }
  }
}
</style>
