<template>
  <div class="nx-nav-container">
    <label>
      <button><clr-icon class="icon-red" shape="chat-bubble" size="36"></clr-icon></button>
      <span>News</span>
    </label>
    <label>
      <button><clr-icon class="icon-yellow" shape="shopping-bag" size="36"></clr-icon></button>
      <span>News</span>
      </label>
    <label>
      <button><clr-icon class="icon-blue" shape="image" size="36"></clr-icon></button>
      <span>News</span>
      </label>
    <label>
      <button><clr-icon class="icon" shape="devices" size="36"></clr-icon></button>
      <span>News</span>
      </label>
    <label>
      <button><clr-icon class="icon" shape="cog" size="36"></clr-icon></button>
      <span>News</span>
      </label>
    <label>
      <button><clr-icon class="icon" shape="power" size="36"></clr-icon></button>
      <span>News</span>
      </label>
  </div>
</template>

<script>
export default {
  name: 'NxNav'
}
</script>

<style lang="scss" scoped>

.nx-nav-container {
  label {
    display: inline-block;
    & span {
      text-align: center;
      display: block;
    }
  }
  button {
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;

    width: 3.75rem;
    height: 3.75rem;
    border-radius: 100%;
    border: 0;
    background-color: rgb(105, 105, 105);
    margin: 0 0.5rem;

    &:focus {
      border: 5px solid rgb(0, 195, 255);
    }
  }
  .icon {
    fill: rgb(206, 206, 206);
    &-red {
      fill: rgb(255, 68, 68);
    }
    &-blue {
      fill: rgb(0, 153, 255);
    }
    &-yellow {
      fill: rgb(255, 223, 44);
    }
  }
}
</style>
