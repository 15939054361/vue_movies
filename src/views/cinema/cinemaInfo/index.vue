<template>
  <div class="info-main">
    <div class="header-mian">
      <img
        class="go-back"
        src="../../../assets/imgs/cinema/arrow-left.png"
        @click="$router.go(-1)"
        alt
      />
      <p>耀莱成龙影城（建业店)</p>
      <img class="star" src="../../../assets/imgs/cinema/xing.png" alt />
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="bg-header">
          <div class="position" @click="$router.push('/cinema/map')">
            <img class="position-icon" src="../../../assets/imgs/cinema/position.png" alt />
            <div class="position-text">
              <h2>耀莱成龙影城（建业店)</h2>
              <p>金水区中州大道建业置地</p>
            </div>
            <img class="position-img" src="../../../assets/imgs/cinema/arrow-right.png" alt />
          </div>
          <div class="swiper">
            <swiper class="swipers" :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide class="swipers-slide" v-for="item in swipers" :key="item.id">
                <img class="slide-img" :src="item.url" alt />
                <div class="star">
                  <span class="star-s"></span>
                  <span class="star-s"></span>
                  <span class="star-s"></span>
                  <span class="star-s"></span>
                  <span class="star-s"></span>
                </div>
                <p class="number">9.5</p>
              </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="field">
          <p class="info">119分钟 | 剧情 | 周冬雨</p>
          <div class="sessions">
            <p class="date">今天2月1日</p>
            <div class="box">
              <div class="box-date">
                <div>15:30</div>
                <p>17:14散场</p>
              </div>
              <div class="box-3d">
                <div class="_3d">原版3D</div>
                <div class="hall">2号厅（冠名 招商中）</div>
              </div>
              <div class="sum">30.9元</div>
              <div class="buy" @click="$router.push('/cinemaSeat')">购票</div>
            </div>
          </div>
          <div class="sessions">
            <p class="date">今天2月1日</p>
            <div class="box">
              <div class="box-date">
                <div>15:30</div>
                <p>17:14散场</p>
              </div>
              <div class="box-3d">
                <div class="_3d">原版3D</div>
                <div class="hall">2号厅（冠名 招商中）</div>
              </div>
              <div class="sum">30.9元</div>
              <div class="buy" @click="$router.push('/cinemaSeat')">购票</div>
            </div>
          </div>
          <div class="sessions">
            <p class="date">今天2月1日</p>
            <div class="box">
              <div class="box-date">
                <div>15:30</div>
                <p>17:14散场</p>
              </div>
              <div class="box-3d">
                <div class="_3d">原版3D</div>
                <div class="hall">2号厅（冠名 招商中）</div>
              </div>
              <div class="sum">30.9元</div>
              <div class="buy" @click="$router.push('/cinemaSeat')">购票</div>
            </div>
          </div>
          <div class="sessions">
            <p class="date">今天2月1日</p>
            <div class="box">
              <div class="box-date">
                <div>15:30</div>
                <p>17:14散场</p>
              </div>
              <div class="box-3d">
                <div class="_3d">原版3D</div>
                <div class="hall">2号厅（冠名 招商中）</div>
              </div>
              <div class="sum">30.9元</div>
              <div class="buy" @click="$router.push('/cinemaSeat')">购票</div>
            </div>
          </div>
          <div class="sessions">
            <p class="date">今天2月1日</p>
            <div class="box">
              <div class="box-date">
                <div>15:30</div>
                <p>17:14散场</p>
              </div>
              <div class="box-3d">
                <div class="_3d">原版3D</div>
                <div class="hall">2号厅（冠名 招商中）</div>
              </div>
              <div class="sum">30.9元</div>
              <div class="buy" @click="$router.push('/cinemaSeat')">购票</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BScroll from "@better-scroll/core";

var nums = 1;
var title = ["后来的我们", "1", "2", "3", "4", "后来的我们"];
export default {
  name: "CinemaInfo",
  props: {},
  data() {
    return {
      swipers: [
        {
          id: 1,
          url: require("../../../assets/imgs/cinema/movie_1.png")
        },
        {
          id: 2,
          url: require("../../../assets/imgs/cinema/movie_2.png")
        },
        {
          id: 3,
          url: require("../../../assets/imgs/cinema/movie_3.png")
        },
        {
          id: 4,
          url: require("../../../assets/imgs/cinema/movie_4.png")
        },
        {
          id: 5,
          url: require("../../../assets/imgs/cinema/movie_5.png")
        }
      ],
      swiperOption: {
        loop: true,
        autoplay: 100,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflow: {
          rotate: 0, // 旋转的角度
          stretch: 100, // 拉伸   图片间左右的间距和密集度
          depth: 150, // 深度   切换图片间上下的间距和密集度
          modifier: 3, // 修正值 该值越大前面的效果越明显
          slideShadows: true // 页面阴影效果
        },
        on: {
          slideChangeTransitionEnd: function() {
            nums = this.activeIndex - 5;
            //console.log(this.activeIndex, nums);
          }
        },
        pagination: {
          el: ".swiper-pagination",
          renderBullet: function(index, className) {
            console.log(className);
            return (
              '<span class="' + className + '">' + title[index] + "</span>"
            );
          }
        }
      },

      num: nums
    };
  },
  computed: {
    aaa() {
      setTimeout(() => {
        this.num = nums;
      }, 0);
      return this.title[this.num];
      console.log(this.num);
    }
  },
  created() {
    console.log(this.num, this.aa);
  },
  mounted() {
    this.$nextTick(() => {
      //创建(初始化)一个bScroll实力对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
  watch: {
    aa() {
      console.log(this.num);
    }
  },
  methods: {},
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="scss">
.info-main {
  position: relative;
  height: 100%;
  color: #ffffff;

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
    .star {
      width: 20px;
      height: 20px;
    }
  }
  .wrapper {
    width: 100%;
    height: 100%;
    margin-top: 0px;
    .content {
      padding-bottom: 150px;
    }
  }
  .bg-header {
    background: url("../../../assets/imgs/cinema/movie_bg.png") no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    overflow: auto;
    .position {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 75px;
      width: 100%;
      height: 40px;
      .position-icon {
        width: 17px;
        height: 21px;
      }
      .position-text {
        padding-right: 30px;
        h2 {
          font-size: 16px;
          line-height: 22px;
        }
        p {
          text-align: left;
          font-size: 12px;
          color: rgba(255, 255, 255, 1);
          line-height: 17px;
        }
      }
      .position-img {
        width: 20px;
        height: 20px;
      }
    }
    .swiper {
      margin-top: 24px;
      .swiper-container {
        width: 95%;
        padding-top: 0.5rem;
        .swiper-slide {
          position: relative;
          background-position: center;
          background-size: 130% 120%;
          width: 140px;
          height: 188px;
          &.swiper-slide-active,
          .swiper-slide-duplicate-active {
            transform: scale(1);
          }
          .slide-img {
            width: 140px;
            height: 188px;
          }
          .star {
            position: absolute;
            left: 8px;
            bottom: 12px;
            width: 60px;
            height: 10px;
            z-index: 99;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .star-s {
              background: url("../../../assets/imgs/cinema/star.png") no-repeat
                center;
              background-size: 100% 100%;
              width: 10px;
              height: 10px;
            }
          }
          p {
            position: absolute;
            right: 15px;
            bottom: 10px;
            font-size: 18px;
          }
        }
      }
      .swiper-pagination {
        font-size: 18px;
        line-height: 25px;
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 5px;
        ::v-deep .swiper-pagination-bullet{
          display: block;
          width: 0;
          opacity: 0;
          &.swiper-pagination-bullet-active{
            background:#000;
            width:auto;
            opacity: 1;
          }
        }
      }
    }
  }
  .field {
    margin-top: 30px;

    .info {
      font-size: 14px;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
  }
  .sessions {
    margin-top: 10px;
    .date {
      text-align: left;
      color: #fbc34a;
      line-height: 17px;
      font-size: 12px;
      padding-left: 20px;
    }
    .box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      height: 91px;
      margin: 10px auto;
      background-color: #33363d;
      .box-date {
        div {
          font-size: 18px;
          line-height: 25px;
        }
        p {
          font-size: 12px;
          line-height: 17px;
        }
      }
      .box-3d {
        width: 68px;
        ._3d {
          margin-top: 20px;
          font-size: 12px;
          line-height: 17px;
        }
        .hall {
          font-size: 12px;
          line-height: 17px;
        }
      }
      .sum {
        font-size: 18px;
        color: rgba(251, 195, 74, 1);
        line-height: 25px;
      }
      .buy {
        width: 45px;
        height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        line-height: 25px;
      }
    }
  }
}
</style>
