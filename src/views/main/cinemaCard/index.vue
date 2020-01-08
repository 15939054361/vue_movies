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
    <div class="card">
      <div class="title">
        <p class="left">耀莱成龙影城影城卡</p>
        <p class="right">10元起</p>
      </div>
      <div class="main">开卡可享购票超值会员价</div>
      <div class="expiration">有效期6个月</div>
    </div>
    <div class="card_1">
      <div class="title">
        <p class="left">耀莱成龙影城影城卡</p>
        <p class="right">10元起</p>
      </div>
      <div class="main">开卡可享购票超值会员价</div>
      <div class="expiration">有效期6个月</div>
    </div>
    <router-link to="/ticket" class="go-ticket">
      <p>去购票</p>
      <img src="../../../assets/imgs/cinema/arrow-right.png" alt />
    </router-link>
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
  overflow: hidden;
  .header-mian {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background:url("../../../assets/imgs/cinema/movie_bg.png") no-repeat center;
    z-index: 999;
    .go-back {
      padding-left: 20px;
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 16px;
      padding-right: 20px;
    }
    .share {
      width: 0;
      height: 0;
    }
  }
  .card {
    position: relative;
    width: 334px;
    height: 174px;
    background: linear-gradient(
      136deg,
      rgba(242, 95, 133, 1) 0%,
      rgba(242, 166, 98, 1) 100%
    );
    border-radius: 6px;
    overflow: hidden;
    margin: 87px auto 0;
    .title {
      margin-top: 21px;
      display: flex;
      justify-content: space-between;
      .left {
        font-size: 14px;
        padding-left: 22px;
      }
      .right {
        font-size: 14px;
        padding-right: 16px;
      }
    }
    .main {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      line-height: 20px;
    }
    .expiration {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 34px;
      text-align: left;
      line-height: 34px;
      font-size: 14px;
      padding-left: 22px;
      background: rgba(255, 255, 255, 0.22);
    }
  }
  .card_1 {
    position: relative;
    width: 334px;
    height: 174px;
    background: linear-gradient(
      136deg,
      rgba(117, 74, 161, 1) 0%,
      rgba(178, 69, 154, 1) 100%
    );
    border-radius: 6px;
    overflow: hidden;
    margin: 20px auto 0;
    .title {
      margin-top: 21px;
      display: flex;
      justify-content: space-between;
      .left {
        font-size: 14px;
        padding-left: 22px;
      }
      .right {
        font-size: 14px;
        padding-right: 16px;
      }
    }
    .main {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      line-height: 20px;
    }
    .expiration {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 34px;
      text-align: left;
      line-height: 34px;
      font-size: 14px;
      padding-left: 22px;
      background: rgba(255, 255, 255, 0.22);
    }
  }
  .go-ticket {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 70px;
    width: 100%;
    background: #2c2f36;
    text-decoration: none;
    p {
      font-size: 18px;
      line-height: 70px;
      color: #fff;
    }
    img{
        position: absolute;
        right: 140px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }
  }
}
</style>
