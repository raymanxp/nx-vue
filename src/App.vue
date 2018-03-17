<template>
    <div class="nx-container">
      <header class="nx-header">
        <div class="profiles">
          <div>you</div>
        </div>
        <div class="system-status">
          <span class="item">{{time}}</span>
          <clr-icon class="item" shape="wifi" size="28"></clr-icon>
          100%
          <clr-icon class="item" shape="battery" size="48" dir="right"></clr-icon>
        </div>
      </header>
      <section class="nx-main">body</section>
      <nav class="nx-nav">
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
      </nav>
      <footer class="nx-footer">
        <div class="nx-footer-container">
          <div class="nx-footer-controller">
          </div>
          <div class="nx-footer-actions">
            <label><button>+</button>Options</label>
            <label><button>A</button>Start</label>
          </div>
          </div>
      </footer>
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      time: 'time'
    }
  },
  watch: {
    time: function () {
      return Date.now()
    }
  }
}
</script>

<style lang="scss" src="./styles/global.scss">

</style>
