<template>
  <div class="home">
    <BaseLayer v-if="Lflag">
      <template v-slot:header>
        <div class="headers">
          <router-link class="address" tag="div" to="/home/city"
            >定位</router-link
          >
          <img src="@/assets/imgs/home/arr-down.png" alt="" class="arr" />
          <div class="search">
            <img
              src="@/assets/imgs/home/search.png"
              alt=""
              class="search-icon"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="搜影片、影院、影人"
              @focus="onfocus"
            />
            <!-- @focus="onfocus" -->
          </div>
          <img
            src="@/assets/imgs/home/date.png"
            alt=""
            class="date"
            @click="$router.push('/check')"
          />
          <!-- <router-link tag="img" src="@/assets/imgs/home/date.png" class="date" to="/check"></router-link> -->
        </div>
      </template>
      <template v-slot:default>
        <!-- 海报 -->
        <div class="post">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img src="@/assets/imgs/home/banner1.jpg" alt="" class="imgs" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/imgs/home/banner2.jpg" alt="" class="imgs" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/imgs/home/banner3.jpg" alt="" class="imgs" />
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <!-- 热映影片 -->
        <div class="hot">
          <Common title="热映影片"></Common>
          <swiper :options="hotOption" ref="mySwiper">
            <swiper-slide v-for="item in hotContent" :key="item.title">
              <router-link to="/moviedetail">
                <img :src="item.img" alt="" />
                <div class="title">{{ item.title }}</div>
                <div class="buy">
                  <span>购票</span>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 即将上映 -->
        <div class="coming">
          <Common title="即将上映"></Common>
          <swiper :options="comingOption" ref="mySwiper">
            <swiper-slide v-for="item in comingContent" :key="item.title">
              <img :src="item.img" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="date">{{ item.date }}</div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 精选预告 -->
        <div class="soon">
          <Common title="精选预告" more="更多"></Common>
          <swiper :options="soonOption" ref="mySwiper">
            <swiper-slide v-for="item in soonContent" :key="item.id">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="item.playerOptions"
              ></video-player>
              <div class="title">{{ item.title }}</div>
            </swiper-slide>
          </swiper>
        </div>
      </template>
    </BaseLayer>
    <div class="Lflag" v-if="!Lflag">
      <div class="headers">
        <div class="search">
          <img src="@/assets/imgs/home/search.png" alt="" class="search-icon" />
          <input type="text" name="" id="" placeholder="搜影片、影院、影人" />
        </div>
        <div class="cancel" @click="cancel">
          取消
        </div>
      </div>
      <div class="Lmain">
        <img :src="search" alt="" />
        <span>萤火虫搜索</span>
      </div>
      <ul class="Lul">
        <li>一条狗的使命<span class="span1">沸</span></li>
        <li>哥斯拉2:怪兽之王</li>
        <li>大鱼海棠 <span class="span2">新</span></li>
        <li>下一任：前任</li>
        <li>人间.小团圆</li>
        <li>音乐家 <span class="span2">新</span></li>
        <li>爱你直到世界尽头 <span class="span3">荐</span></li>
        <li class="Lli">更多热搜&nbsp;&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
//
import BaseLayer from "@/components/BaseLayer";
import Common from "./components/common.vue";
import search from "../../assets/imgs/icons/Lsearch.png";
export default {
  name: "home",
  components: {
    Common,
    BaseLayer
  },
  data() {
    return {
      Lflag: true,
      search,
      //海报轮播
      swiperOption: {
        slidesPerView: 1.5,
        spaceBetween: 14,
        centeredSlides: true,
        loop: true,
        //  autoplay:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      //热映轮播
      hotOption: {
        slidesPerView: 3.5,
        spaceBetween: 14
      },
      //即将上映轮播
      comingOption: {
        slidesPerView: 2.7,
        spaceBetween: 10
      },
      //精彩预告轮播
      soonOption: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      //正在热映
      hotContent: [
        {
          img: require("@/assets/imgs/home/m1.jpg"),
          title: "傲慢与偏见"
        },
        {
          img: require("@/assets/imgs/home/m2.jpg"),
          title: "韩国电影 "
        },
        {
          img: require("@/assets/imgs/home/m3.jpg"),
          title: "帕丁顿熊 "
        },
        {
          img: require("@/assets/imgs/home/m4.jpg"),
          title: "未来机械"
        }
      ],
      //即将上映
      comingContent: [
        {
          img: require("@/assets/imgs/home/s1.jpg"),
          title: "My bluebery…",
          date: "1月5日"
        },
        {
          img: require("@/assets/imgs/home/s2.jpg"),
          title: "THE WORLD… ",
          date: "1月5日"
        },
        {
          img: require("@/assets/imgs/home/s3.jpg"),
          title: "BABBIT HOLE ",
          date: "1月5日"
        }
      ],
      //精彩预告
      soonContent: [
        {
          playerOptions: {
            // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            // autoplay: false, //如果true,浏览器准备好时开始回放。
            // muted: false, // 默认情况下将会消除任何音频。
            // loop: false, // 导致视频一结束就重新开始。
            // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            // language: 'zh-CN',
            // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                src: "https://media.w3.org/2010/05/sintel/trailer.mp4" //url地址
              }
            ],
            poster: require("@/assets/imgs/home/banner2.jpg"), //你的封面地址
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true //全屏按钮
            }
          },
          title: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          id: 1
        },
        {
          playerOptions: {
            // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            // autoplay: false,
            // muted: false,
            // loop: false,
            // preload: 'auto',
            // language: 'zh-CN',
            // aspectRatio: '16:9',
            fluid: true,
            sources: [
              {
                type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                src: "https://media.w3.org/2010/05/sintel/trailer.mp4" //url地址
              }
            ],
            poster: require("@/assets/imgs/home/banner3.jpg"), //你的封面地址
            // width: document.documentElement.clientWidth, //播放器宽度
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true //全屏按钮
            }
          },
          title: "《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画… ",
          id: 2
        }
      ]
    };
  },
  methods: {
    onfocus() {
      this.Lflag = false;
    },
    cancel() {
      this.Lflag = true;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.headers {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  .address {
    display:block;
    width: 40px;

    // width: 28px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 14px;
  }
  .arr {
    display: block;
    width: 12px;
    height: 6px;
  }
  .search {
    display: flex;
    justify-content: flex-start;
    width: 259px;
    height: 36px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    .search-icon {
      width: 17px;
      height: 17px;
      margin: 10px 7px 9px 12px;
      color: rgba(122, 122, 122, 1);
    }
    input {
      width: 126px;
      height: 14px;
      margin-top: 11px;
      font-size: 14px;
      color: #fff;
      background: transparent;
      line-height: 14px;
      border: none;
      outline: none;
    }
  }
  .date {
    width: 18px;
    height: 19px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.777;
  }
}
.imgs {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.hot {
  width: calc(100%-20px);
  height: auto;
  margin: 30px 0 0 20px;
  .title {
    width: 60px;
    height: 12px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 12px;
    margin-top: 10px;
  }
  .buy {
    margin-top: 10px;
    width: 50px;
    height: 22px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 11px;
    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 22px;
      color: rgba(223, 223, 223, 1);
      text-shadow: 0px 2px 4px rgba(49, 49, 49, 0.5);
    }
  }
  ::v-deep .swiper-container {
    height: auto;
    .swiper-slide {
      height: 100%;
      img {
        display: block;
        width: 90px;
        height: 122px;
        border-radius: 6px;
      }
    }
  }
}
.coming {
  width: calc(100%-20px);
  height: auto;
  margin: 30px 0 0 20px;
  .title {
    width: 96px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 20px;
    margin-top: 6px;
  }
  .date {
    width: 40px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 17px;
    margin-top: 1px;
  }
  img {
    display: block;
    width: 120px;
    height: 162px;
    background: rgba(216, 216, 216, 1);
    border-radius: 6px;
  }
}
.soon {
  width: calc(100%-20px);
  height: auto;
  margin: 30px 0 0 20px;
  // video{
  //  width:295px;
  //  height:160px;
  // }
  .title {
    width: 270px;
    height: 36px;
    text-align: left;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 18px;
  }
  ::v-deep .video-js .vjs-big-play-button {
     top: 60px;
     left: 110px;
  }
}
</style>
<style lang="scss" scoped>
.post {
  .swiper-container {
    height: 145px;
    width: 100%;
    .swiper-slide {
      width: 332px;
      height: 145px;
      margin-right: 10px;
      transform: scale(0.8);
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1);
    }
  }
  .swiper-pagination {
    position: static;
    margin: 8px auto;
    //修改swiper的一些样式 需要用到 样式穿透 /deep/
    ::v-deep .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      background-color: #b2b2b2;
      border-radius: 2px;
      margin: 0 4px;
      &.swiper-pagination-bullet-active {
        width: 14px;
        height: 3px;
        background-color: #fff;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.headers {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    display: flex;
    justify-content: flex-start;
    width: 298px;
    height: 36px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
    border-radius: 18px;
    .search-icon {
      width: 17px;
      height: 17px;
      margin: 10px 7px 9px 12px;
      color: rgba(122, 122, 122, 1);
    }
    input {
      width: 126px;
      height: 14px;
      margin-top: 11px;
      font-size: 14px;
      color: #fff;
      background: transparent;
      line-height: 14px;
      border: none;
      outline: none;
    }
  }
  .cancel {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(247, 247, 247, 1);
    cursor: pointer;
  }
}
.Lmain {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  padding-top: 10px;
  align-items: center;
  span {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 16px;
    margin-left: 5px;
  }
}
.Lul {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    width: 160px;
    height: 16px;
    // background-color: #fff;
    margin-top: 20px;
    text-align: left;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 16px;
    span {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-left: 3px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(223, 223, 223, 1);
      line-height: 17px;
      text-align: center;
      &.span1 {
        background: linear-gradient(
          135deg,
          rgba(176, 70, 157, 1) 0%,
          rgba(97, 72, 170, 1) 100%
        );
        border-radius: 4px;
      }
      &.span2 {
        background: linear-gradient(
          143deg,
          rgba(235, 110, 117, 1) 0%,
          rgba(247, 166, 83, 1) 100%
        );
        border-radius: 4px;
      }
      &.span3 {
        background: linear-gradient(
          135deg,
          rgba(50, 36, 149, 1) 0%,
          rgba(49, 56, 172, 1) 100%
        );
        border-radius: 4px;
      }
    }
    &.Lli {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(241, 163, 99, 1);
      line-height: 16px;
    }
  }
}
</style>