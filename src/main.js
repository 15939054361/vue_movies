import "@/assets/css/animated.css";
import "@/assets/style/reset.css";
import Vant from "vant";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vant/lib/index.css";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
import storeJs from 'store'
import animate from 'animate.css'

router.beforeEach((to, from, next) => {
  if (to.path === '/mine') {
    if (storeJs.get('user')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
Vue.use(Vant);
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";

Vue.use(VueVideoPlayer);

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


import 'lib-flexible'
Vue.use(animate).use(VueAwesomeSwiper).use(VueVideoPlayer);
Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  // 或
  // window.scroll(0, 0);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");