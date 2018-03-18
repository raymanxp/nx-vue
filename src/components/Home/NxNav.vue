<template>
  <div class="nx-nav-container">
    <label v-for="item in navItems" :key="item.label" :item="item">
      <button @focus="toggle($event, item)"
              @blur="toggle($event, item)">
        <clr-icon class="icon"
                  size="28"
                  v-bind:class="[item.class]"
                  v-bind:shape="item.shape"></clr-icon>
      </button>
      <span v-show="item.showLabel">{{item.label}}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NxNav',
  data () {
    return {
      navItems: [
        {label: 'News', shape: 'chat-bubble', class: 'icon-red', showLabel: false},
        {label: 'eShop', shape: 'shopping-bag', class: 'icon-yellow', showLabel: false},
        {label: 'Album', shape: 'image', class: 'icon-blue', showLabel: false},
        {label: 'Devices', shape: 'devices', class: '', showLabel: false},
        {label: 'System Settings', shape: 'cog', class: '', showLabel: false},
        {label: 'Sleep Mode', shape: 'power', class: '', showLabel: false}
      ]
    }
  },
  methods: {
    toggle: function (event, item) {
      item.showLabel = !item.showLabel
    }
  }
}
</script>

<style lang="scss" scoped>

.nx-nav-container {
  label {
    display: inline-block;
    position: relative;
    height: 70px;
    vertical-align: middle;
    width: 56px;
    & span {
      color:rgb(0, 204, 255);
      display: block;
      left: -27px;
      line-height: 2rem;
      position: absolute;
      text-align: center;
      width: 112px;
    }
  }
  button {
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;

    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: 0;
    background-color: rgb(105, 105, 105);
    margin: 0 0.25rem;

    &:focus {
      border: 3px solid rgb(0, 195, 255);
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
      fill: rgb(255, 181, 44);
    }
  }
}
</style>
