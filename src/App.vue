<template>
  <div id="app">
    <transition :enter-active-class="animatedName">
      <router-view></router-view>
    </transition>
    <Footers v-show="$route.meta.footShow"></Footers>
  </div>
</template>
<script>
import Footers from "@/components/footers.vue";

export default {
  // name: 'home',
  data() {
    return {
      animatedName: "animated fadeInLeft"
    };
  },
  components: {
    Footers
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.animatedName =
        toDepth < fromDepth ? "animated fadeInLeft" : "animated fadeInRight";
    }
  }
};
</script>

<style lang="scss">
body,html{
  // width:375px;
// height:1121px;
height:100%;
overflow: hidden;
background:rgba(35,38,45,1);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
