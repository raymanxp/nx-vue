<template>
  <section class="nx-main-container">
    <article v-for="app of apps" :key="app.id" :item="app">
      <header v-show="app.showTitle">{{app.title | uppercase}}</header>
      <div class="box-art">
        <button @blur="toggleTitle($event, app)"
                @focus="toggleTitle($event, app)">
        <img v-bind:src="app.imgUrl">
        </button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'NxMain',
  methods: {
    toggleTitle: function (event, item) {
      item.showTitle = !item.showTitle
    }
  },
  data () {
    return {
      apps: [
        {
          id: 'abc',
          title: 'Super Mario Odyssey',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/8/82063/2972168-smoboxartfinal.jpg'
        },
        {
          id: '3030',
          title: 'Xenoblade Chronicles 2',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/8/82063/2978038-xc2.jpg'
        },
        {
          id: '57686',
          title: 'Arms',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/8/82063/2944702-setwidth1920-hacp-aabq-wwillu01-01-r-ad-3-lr.jpg'
        },
        {
          id: '41355',
          title: 'The Legend of Zelda: Breath of the Wild',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/0/3699/2920687-the+legend+of+zelda+-+breath+of+the+wild+v7.jpg'
        },
        {
          id: '53284',
          title: 'Overcooked!',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/8/87790/2994870-box_oc.png'
        },
        {
          id: '34407',
          title: 'Rocket League',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/8/87790/2949245-box_rleague.png'
        },
        {
          id: 'Snipperclips: Cut It Out, Together',
          title: 'Other',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/0/1992/2912170-sq_nswitch_snipperclips.jpg'
        },
        {
          id: '57685',
          title: '1-2-Switch',
          showTitle: false,
          imgUrl:
            'https://static.giantbomb.com/uploads/scale_small/0/1992/2912138-screen+shot+2017-01-13+at+9.02.52+am.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin main-container() {
  display: block;
  height: 100%;
  padding: 0 2rem;
}
.nx-main-container {
  @include main-container();
  flex-wrap: wrap;
  article {
    display: inline-block;
    position: relative;
    flex: 1;
    margin-right: 6px;
    header {
      line-height: 1.5rem;
      position: absolute;
      white-space: nowrap;
      left: -75px;
      text-align: center;
      white-space: nowrap;
      width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      color:  rgb(0, 195, 255);
    }
    .box-art {
      display: block;
      position: relative;
      margin-top: 1.5rem;
      button {
        appearance: none;
        border: 4px solid transparent;
        background: none;
        padding: 0;

        &:focus {
          border: 4px solid rgb(0, 195, 255);
        }
      }
      img {
        height: 150px;
        width: 150px;
        padding: 2px;
        object-fit: cover;
      }
    }
  }
}
@media screen and (min-width: 355px) and (max-width: 400px) {
  .nx-main-container {
    display: flex;
    article {
      .box-art img{
        height: 125px;
        width: 125px;
      }
    }
  }
}
@media screen and (min-height: 200px) and (max-height: 600px) {
  .nx-main-container {
    @include main-container();
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    overflow-x: scroll;
    align-items: center;
  }
}
</style>
