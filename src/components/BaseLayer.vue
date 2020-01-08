<template>
  <div class="base-layer-main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "BaseLayer",

  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.$scroll) {
        this.$scroll = new BScroll(this.$refs["scroller-wrapperr"], {
          click: true
        });
      }
    });
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.base-layer-main {
  height: 100%;
  .scroller-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    height: 100%;
    .content{
        width: 100%;
        padding-bottom: 140px;
        // position: absolute;
        // left: 0 ;
        // top: 0;
    }
  }
}
</style>
