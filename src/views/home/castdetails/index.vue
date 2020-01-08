<template>
  <div class="castdetails">
    <!-- 1.头部 -->
    <div class="header">
      <span @click="$router.go(-1)"><</span>
    </div>
    <!-- 滚动内容 -->
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <div class="header-bar">
          <img
            class="head-img"
            src="../../../assets/imgs/home/actor1.png"
            alt=""
          />
          <h3>凯拉·奈特莉</h3>
          <p class="name">Satomi lshihara</p>
          <div class="attention" v-if="attentionShow" @click="attentions">
            关注
          </div>
          <div class="attention" v-else>已关注</div>
          <span>{{ attention }}人关注</span>
          <div class="intro">
            <h4>简介</h4>
            <p>
              2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
              选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱
              情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷
              》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获
              得了第27届日本…<span>查看更多</span>
            </p>
          </div>
        </div>
        <!-- 2.内容 -->
        <div class="header-main">
          <!--2.个人作品  -->
          <div class="personalworks">
            <p class="title">个人作品</p>
            <div class="box" v-for="item in personalworks" :key="item.id">
              <img :src="item.url" alt="" />
              <div class="right">
                <h3>{{ item.title }}</h3>
                <p class="rate">
                  评分<span>{{ item.rate }}</span>
                </p>
                <p>
                  演员<span>{{ item.actor }}</span>
                </p>
                <p>
                  上映时间<span>{{ item.time }}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- 2.2 相册 -->
          <div class="photo">
            <p class="title">个人作品</p>
            <div class="box">
              <div class="left">
                <img
                  class="left-img"
                  src="../../../assets/imgs/home/actor4.png"
                  alt=""
                />
                <div class="bot">
                  <img src="../../../assets/imgs/home/actor5.png" alt="" />
                  <img src="../../../assets/imgs/home/actor6.png" alt="" />
                </div>
              </div>
              <div class="right">
                <img src="../../../assets/imgs/home/actor7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: {},
  data() {
    return {
      attention: 138585,
      attentionShow: true,
      //个人作品
      personalworks: [
        {
          id: 1,
          url: require("@/assets/imgs/home/actor3.png"),
          title: "忍者之国",
          rate: "9.0",
          actor: "大野智",
          time: "2017年7月1日"
        },
        {
          id: 2,
          url: require("@/assets/imgs/home/actor2 .png"),
          title: "演员 长谷川博己，竹…",
          rate: "9.0",
          actor: "大野智",
          time: " 2016年7月29日"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new BScroll(this.$refs["scroller-wrapperr"], {
        click: true
      });
    });
  },
  watch: {},
  methods: {
    //点击关注人数加一，且显示已关注
    attentions() {
      this.attention += 1;
      this.attentionShow = false;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
// 1.头部
.header {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 99;
  span {
    display: block;
    color: #fff;
    line-height: 40px;
    text-align: left;
    padding-left: 20px;
  }
}
.header-bar {
  font-family: PingFangSC-Regular, PingFang SC;
  color: #fff;
  height: 489px;
  background: url("../../../assets/imgs/home/actorbanner.png") no-repeat
    center/100% 489px;
  .head-img {
    width: 85px;
    height: 85px;
    padding-top: 91px;
  }
  h3 {
    font-size: 20px;
    margin: 12px 0 7px;
  }
  .name {
    font-size: 12px;
    color: #999;
  }
  .attention {
    width: 48px;
    height: 24px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    border-radius: 11px;
    text-align: center;
    line-height: 24px;
    margin: 11px auto;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .intro {
    width: 335px;
    margin: 0 auto;
    h4 {
      margin: 27px 0 10px 0;
      font-size: 16px;
      text-align: left;
    }
    p {
      font-size: 12px;
      line-height: 18px;
      color: #999;
      text-align: left;
      span {
        font-size: 14px;
        color: rgba(251, 195, 74, 1);
      }
    }
  }
}
.header-main {
  font-family: PingFangSC-Regular, PingFang SC;
  color: #fff;
  width: 335px;
  margin: 0 auto;
  .personalworks {
    .title {
      padding: 30px 0 10px;
      font-size: 16px;
      text-align: left;
      margin-top: -60px;
      box-sizing: border-box;
    }
    .box {
      display: flex;
      margin-bottom: 10px;
      img {
        width: 100px;
        height: 140px;
      }
    }
    .box:last-child {
      margin-bottom: 0;
    }
    .right {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        color: #999;
        span {
          margin-left: 7px;
        }
      }
      .rate {
        span {
          color: rgba(251, 195, 74, 1);
        }
      }
    }
  }
  .photo {
    .title {
      padding: 30px 0 10px;
      font-size: 16px;
      text-align: left;
      box-sizing: border-box;
    }
    .box {
      display: flex;
      .left {
        margin-right: 5px;
        .left-img {
          width: 192px;
          height: 100px;
          margin-bottom: 5px;
        }
        .bot {
          display: flex;
          img {
            width: 94px;
            height: 123px;
          }
          img:first-child {
            margin-right: 5px;
          }
        }
      }
      .right {
        img {
          width: 138px;
          height: 229px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.castdetails {
  height: 100%;
  .scroller-wrapper {
    height: 100%;
  }
}
.header-bar .van-nav-bar {
  position: fixed;
}
.header-bar .van-nav-bar .van-icon {
  color: #fff;
}
</style>
