<template>
  <div class="container">
    <better>
      <div class="mine owin">
        <div class="header">
          <div class="function">
            <img class="setting" :src="set" alt @click="goSet" />
            <img class="message" :src="message" alt @click="$router.push('/main/message')" />
          </div>
          <div class="person">
            <div class="person_item">
              <img class="avatar" :src="avatar" alt @click="goUser" />
              <div>
                <p class="name">yujia1130</p>
                <p class="level">V1青铜会员&nbsp; ></p>
              </div>
            </div>
            <img class="arrow_r" :src="arrow_r" alt />
          </div>
        </div>
        <div class="center">
          <div class="l">会员中心</div>
          <div class="line"></div>
          <div class="c">
            <p>会员中心</p>
            <p>50元通兑券天天送</p>
          </div>
          <img class="packet" :src="packet" alt />
        </div>
        <div class="order">
          <div class="title">
            <span class="mine">我的订单</span>
            <div>
              <span class="all_btn" @click="$router.push('/myorder')">全部</span>
              <i class="iconfont iconarrow-down"></i>
            </div>
          </div>
          <ul class="order_main">
            <li @click="$router.push('/myorder?shows=0')">
              <img :src="money" alt />
              <span>未消费</span>
            </li>
            <li @click="$router.push('/myorder?shows=1')">
              <img :src="pay" alt />
              <span>待付款</span>
            </li>
            <li @click="$router.push('/myorder?shows=2')">
              <img :src="evaluate" alt />
              <span>待评价</span>
            </li>
            <li @click="$router.push('/myorder?shows=3')">
              <img :src="refund" alt />
              <span>退款</span>
            </li>
          </ul>
        </div>
        <ul class="other">
          <li>
            <span>影城会员卡</span>
            <i class="iconfont iconarrow-down" ></i>
          </li>
          <li>
            <span>优惠券</span>
            <i class="iconfont iconarrow-down" @click="$router.push('/mine/distance')"></i>
          </li>
          <li>
            <span>我的收藏</span>

            <i class="iconfont iconarrow-down"></i>
          </li>
          <li>
            <span>帮助与反馈</span>
            <i class="iconfont iconarrow-down"></i>
          </li>
        </ul>
      </div>
    </better>
  </div>
</template>

<script>
import avatar from "@/assets/imgs/mine/user.png";
import message from "@/assets/imgs/mine/message.png";
import set from "@/assets/imgs/mine/settings.png";
import packet from "@/assets/imgs/mine/hb.png";
import money from "@/assets/imgs/mine/mony.png";
import pay from "@/assets/imgs/mine/pay.png";
import refund from "@/assets/imgs/mine/refund.png";
import evaluate from "@/assets/imgs/mine/evaluate.png";
import arrow_r from "@/assets/imgs/icons/arr-right.png";
import better from "@/components/better.vue";
export default {
  name: "mine",
  props: {},
  data() {
    return {
      //图片资源
      avatar,
      set,
      message,
      arrow_r,
      packet,
      pay,
      refund,
      evaluate,
      money
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    goUser() {
      this.$router.push("/main/userInfo");
    },
    goSet() {
      this.$router.push("/main/setting");
    }
  },
  components: {
    better
  },
  beforeRouteEnter(to, from, next) {
    console.log(from.path);
    next();
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  overflow: hidden;
}
.owin {
  padding-bottom: 80px;
  // padding-bottom: 50px;
}
.header {
  overflow: hidden;
  padding: 0 20px;
  margin: 0 auto;
  height: 210px;
  background: linear-gradient(
    123deg,
    rgba(242, 94, 133, 1) 0%,
    rgba(241, 166, 97, 1) 100%
  );
  border-radius: 29px;
  opacity: 0.9029;
  & .avatar {
    width: 73px;
    height: 73px;
  }
  & .function {
    margin-top: 15px;
    text-align: right;
    // margin-top:
  }
  & .setting,
  .message,
  .arrow_r {
    width: 19px;
    height: 19px;
    margin-left: 12px;
  }
  & .arrow_r {
    opacity: 0.6;
  }
  & .person {
    margin-top: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .person_item {
      text-align: left;
      display: flex;
      align-items: center;
      & div {
        margin-left: 17px;
      }
    }
    & .name {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
    & .level {
      margin-top: 4px;
      padding: 0 10px;
      background: rgba(51, 54, 61, 1);
      border-radius: 5px;
      opacity: 0.7293999999999999;
      font-size: 14px;
      line-height: 1.65;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.center {
  position: relative;
  top: -20px;
  width: calc(100% - 40px);
  height: 68px;
  background: rgba(51, 54, 61, 1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 17px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & .line {
    width: 1px;
    height: 47px;
    background-color: rgba(250, 250, 250, 0.5);
  }
  & .l {
    text-indent: 1em;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }
  & .c {
    text-align: left;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 17px;
  }
  & .packet {
    width: 32px;
    height: 34px;
  }
}
.order {
  height: 137px;
  background: rgba(51, 54, 61, 1);
  padding: 0 20px;
  border-radius: 6px;
  & .title {
    padding: 5px 0 22px;
    display: flex;
    justify-content: space-between;
  }
  & .title .mine {
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }
  & .title .all_btn {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
  & .order_main {
    display: flex;
    justify-content: space-around;
    li {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;

      img {
        display: block;
        margin: 0 auto;
        width: 24px;
        height: 24px;
        margin-bottom: 14px;
      }
    }
  }
}
.other {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 6px;
  background: rgba(51, 54, 61, 1);
  height: 215px;
  & li {
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;

    img {
      width: 5px;
      height: 8px;
    }
  }
}
.iconfont {
  color: rgba(255, 255, 255, 0.5);
}
.other .iconfont {
  font-size: 25px;
}
</style>
