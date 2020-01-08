<template>
  <div class="moviedetail">
    <div class="header">
      <!-- <span @click="$router.go(-1)">&lt;</span>  -->
        <img src="@/assets/imgs/icons/arr-left.png" alt="" class="back" @click="$router.go(-1)">
    </div>
    <!-- 滚动内容 -->
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <!-- 2.banner -->
        <div class="banner">
          <img class="poster" src="../../../assets/imgs/home/m1.jpg" alt="" />
          <img class="play" src="../../../assets/imgs/home/play.png" alt="" />
        </div>
        <!-- 3.main -->
        <div class="main">
          <div class="title">
            <div class="top">
              <h3>傲慢与偏见（2005）</h3>
              <span>120min</span>
            </div>
            <p class="name">Pride & Prejudice</p>
            <div class="bot">
              <router-link to="/filmrate" tag="div" class="star">
                <img
                  v-for="item in 4"
                  :key="item"
                  src="../../../assets/imgs/home/star.png"
                  alt=""
                />
                <img src="../../../assets/imgs/home/star-a.png" alt="" />
                <p>9.0<span>/10</span></p>
              </router-link>
              <div class="right">
                <img src="../../../assets/imgs/home/compent.png" alt="" />
                <img src="../../../assets/imgs/home/star-b.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 3.1简介 -->
          <div class="summary">
            <van-tabs v-model="active" type="card">
              <van-tab title="简介">
                <p>
                  伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼
                  德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班
                  纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰）
                  这5个出身于小地主家庭的姐妹个个如花似玉…<span>查看更多</span>
                </p>
              </van-tab>
              <van-tab title="影评" to='/review'>内容 2</van-tab>
              <van-tab title="讨论">内容 3</van-tab>
              <van-tab title="更多">内容 4</van-tab>
            </van-tabs>
          </div>
          <!-- 3.2 actor -->
          <div class="actor">
            <p>演职人员</p>
            <div class="swiper">
              <swiper :options="swiperOption1" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in actorList" :key="item.id">
                  <router-link to="/castdetails">
                    <img :src="item.url" alt="" />
                    <p>{{ item.name }}</p>
                    <span>{{ item.actor }}</span>
                  </router-link>
                </swiper-slide>
              </swiper>
            </div>
            <div class="allactors">全部32位演员</div>
          </div>
          <!-- 3.3 视频 -->
          <div class="Video">
            <p class="title">视频</p>
            <div class="swiper">
              <swiper :options="swiperOption2" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in videoList" :key="item.id">
                  <router-link to="/castdetails">
                    <img :src="item.url" alt="" />
                    <p>{{ item.intro }}</p>
                  </router-link>
                </swiper-slide>
              </swiper>
            </div>
            <div class="allvideo">全部10个视屏</div>
          </div>
          <!-- 3.4票房 -->
          <div class="ticket">
            <p class="title">票房</p>
            <div class="ticket-main">
              <div class="left">
                <span>2</span>
                <p>今日票房排行</p>
              </div>
              <div class="center">
                <span>暂无</span>
                <p>首周票房（万）</p>
              </div>
              <div class="bot">
                <span>2660</span>
                <p>今日票房排行</p>
              </div>
            </div>
            <router-link tag="div" to="/ticketdetail" class="ticketinfo"
              >票房详情</router-link
            >
          </div>
        </div>
        <!-- 3.5footer -->
        <div class="footer" @click="$router.push('/cinemaSeat')">特惠选座</div>
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
      active: 0,
      actorList: [
        {
          id: 1,
          url: require("@/assets/imgs/home/kaila.png"),
          name: "凯拉·奈特莉",
          actor: "饰伊丽莎…"
        },
        {
          id: 2,
          url: require("@/assets/imgs/home/ximeng.png"),
          name: "西蒙·伍兹",
          actor: "饰查尔斯…"
        },
        {
          id: 3,
          url: require("@/assets/imgs/home/hua.png"),
          name: "裴淳华",
          actor: "饰珍·班内特"
        },
        {
          id: 4,
          url: require("@/assets/imgs/home/wuzi.png"),
          name: "裴淳华",
          actor: "饰珍·班内特"
        }
      ],
      videoList: [
        {
          id: 1,
          url: require("@/assets/imgs/home/yilishabai.png"),
          intro: "《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞"
        },
        {
          id: 2,
          url: require("@/assets/imgs/home/video.png"),
          intro: "借了不朽经典的光，拍了一 部沦为普通的爱情故事"
        }
      ],
      //演员
      swiperOption1: {
        slidesPerView: 3.2,
        spaceBetween: 15
      },
      //视屏
      swiperOption2: {
        slidesPerView: 1.7,
        spaceBetween: 15
      }
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
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.moviedetail {
  height: 100%;
  .scroller-wrapper {
    height: 100%;
  }
}
// 1.头部
.header {
  width: 100%;
  height: 40px;
  position: fixed;
  z-index: 99;
  // span {
  //   display: block;
  //   color: #fff;
  //   line-height: 40px;
  //   text-align: left;
  //   padding-left: 20px;
  // }
  .back{
        display: block;
        width:18px;
        height:18px;
        padding-left: 20px;
        padding-top: 20px;
      }
}
//2. banner
.banner {
  position: relative;
  height: 258px;
  background: url("../../../assets/imgs/home/banner.png") no-repeat center/375px
    258px;
  .poster {
    position: absolute;
    left: 20px;
    bottom: -10px;
    width: 96px;
    height: 133px;
  }
  .play {
    position: absolute;
    right: 105px;
    bottom: 10px;
    width: 56px;
    height: 57px;
  }
}
// 3.main
.main {
  width: 335px;
  margin: 0 auto;
  font-family: PingFangSC-Medium, PingFang SC;
  color: rgba(255, 255, 255, 1);
  .title {
    .top {
      display: flex;
      padding: 24px 0 15px 0;
      h3 {
        font-size: 20px;
      }
      span {
        display: block;
        font-size: 12px;
        color: rgba(241, 116, 121, 1);
        padding-top: 8px;
      }
    }
    .name {
      text-align: left;
      font-size: 14px;
      color: #999;
      margin-bottom: 10px;
    }
    .bot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .star {
        display: flex;
        align-items: center;
        img {
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        p {
          margin-left: 4px;
          font-size: 22px;
          color: rgba(251, 195, 74, 1);
          span {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .right {
        img {
          width: 16px;
          height: 16px;
        }
        img:first-child {
          margin-right: 20px;
        }
      }
    }
  }
  .actor {
    p {
      font-size: 18px;
      margin: 30px 0 15px 0;
      text-align: left;
    }
    .swiper {
      img {
        width: 100px;
        height: 140px;
      }
      p {
        font-size: 14px;
        color: #fff;
        margin: 10px 0 6px;
      }
      span {
        font-size: 12px;
        color: #999;
      }
    }
    .allactors {
      font-size: 14px;
      color: rgba(251, 195, 74, 1);
      margin-top: 15px;
    }
  }
  .Video {
    .title {
      font-size: 18px;
      margin: 30px 0 15px 0;
      text-align: left;
    }
    .swiper {
      img {
        width: 200px;
        height: 120px;
      }
      p {
        text-align: left;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        margin-top: 10px;
      }
    }
    .allvideo {
      font-size: 14px;
      color: rgba(251, 195, 74, 1);
      margin-top: 15px;
    }
  }
  .ticket {
    .title {
      font-size: 18px;
      margin: 30px 0 17px 0;
      text-align: left;
    }
    .ticket-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 18px;
      }
      p {
        margin-top: 6px;
        font-size: 12px;
        color: #999;
      }
    }
    .ticketinfo {
      font-size: 14px;
      color: rgba(251, 195, 74, 1);
      margin: 15px 0 22px 0;
    }
  }
}
//4.footer
.footer {
  height: 44px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  font-size: 18px;
  line-height: 44px;
  color: #fff;
  font-weight: 500;
}
</style>
<style lang="scss">
// 简介导航样式
.van-tabs__nav--card {
  box-sizing: border-box;
  height: 0.8rem;
  margin: 0 0.42667rem;
  border: none;
  border-radius: 0.05333rem;
}
.van-tabs__nav--card .van-tab {
  color: #999;
  line-height: 0.74667rem;
  border-right: none;
  padding: 0;
}
.van-tabs__nav {
  background-color: transparent;
  margin: 0;
  width: 200px;
  z-index: 99;
}
.van-tabs__nav--card .van-tab.van-tab--active {
  color: #fff;
  background-color: transparent;
}
.van-tabs__nav--card .van-tab.van-tab--active .van-tab__text::after {
  display: block;
}
.van-tab__text {
  position: relative;
  font-size: 14px;
}
.van-tab__text::after {
  position: absolute;
  left: 0;
  bottom: -5px;
  display: none;
  content: "";
  width: 100%;
  height: 3px;
  background: linear-gradient(
    135deg,
    rgba(241, 100, 129, 1) 0%,
    rgba(241, 144, 108, 1) 100%
  );
}
.van-tab__pane {
  color: #999;
  margin-top: 9px;
  text-align: left;
  line-height: 18px;
  span {
    font-size: 14px;
    color: rgba(251, 195, 74, 1);
  }
}
</style>
