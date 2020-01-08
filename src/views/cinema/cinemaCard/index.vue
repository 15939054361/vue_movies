<template>
  <div class="card-main">
    <div class="header-mian">
      <img
        class="go-back"
        src="../../../assets/imgs/cinema/arrow-left.png"
        @click="$router.go(-1)"
        alt
      />
      <p>影城卡</p>
      <img class="share" src="../../../assets/imgs/cinema/share.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "cinemaCard",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.card-main {
  position: relative;
  color: #fff;
  height: 100%;
  .header-mian {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    // background:url("../../../assets/imgs/cinema/movie_bg.png") no-repeat center;
    z-index: 999;
     .go-back {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 16px;
    }
    .share {
      width: 0;
      height: 0;
    }
  }
}
</style>
