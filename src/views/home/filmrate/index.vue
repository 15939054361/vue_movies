<template>
  <div class="rate">
    <div class="header">
      <div class="top">
        <!-- <span @click="$router.go(-1)"><</span> -->
   <img src="@/assets/imgs/icons/arr-left.png" alt="" class="back" @click="$router.go(-1)"> 
        <p>电影评分</p>
        <van-icon name="share" />
      </div>
    </div>
    <!-- 滚动内容 -->
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <!-- 头部 -->
        <div class="rete-header">
          <div class="text">
            <h3>《傲慢与偏见》</h3>
            <div class="star">
              <img
                v-for="item in 4"
                :key="item"
                src="../../../assets/imgs/home/star.png"
                alt=""
              />
              <img src="../../../assets/imgs/home/star-a.png" alt="" />
              <p>9.0 <span>分</span></p>
            </div>
            <span class="comment">28.5万人评论</span>
          </div>
        </div>
        <!-- 百分比 -->
        <div class="rate-main">
          <div class="echarts">
            <!-- <div id="myChart" :style="{ width: '300px', height: '300px' }"></div> -->
            <div
              class="graph"
              v-for="item in echartsList"
              :key="item.percentage"
            >
              <span>{{ item.percentage }}%</span>
              <div class="Histogram" :style="{ height: item.heig }"></div>
              <p>{{ item.title }}</p>
            </div>
          </div>
          <p class="bot">·以上数据，实时更新</p>
        </div>
        <div class="lines"></div>
        <!-- 观众评分 -->
        <div class="Audience">
          <h3>观众评分画像</h3>
          <div class="top">
            <div class="left">
              <span class="icon"></span>
              <p>男性观众</p>
              <span>8.4分</span>
            </div>
            <h3>VS</h3>
            <div class="right">
              <span class="icon"></span>
              <p>女性观众</p>
              <span>8.6分</span>
            </div>
          </div>
          <div class="center">
            <div class="box" v-for="item in AudienceList" :key="item.heig">
              <p>{{ item.title }}</p>
              <div class="line" :style="{ width: item.heig }"></div>
              <div class="rate">{{ item.rete }}</div>
            </div>
          </div>
          <div class="data">·以上数据，每30分钟更新一次</div>
          <div class="bot"></div>
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
      //百分比
      echartsList: [
        {
          percentage: 56.4,
          title: "8-10分",
          heig: "135px"
        },
        {
          percentage: 29.4,
          title: "8-10分",
          heig: "98px"
        },
        {
          percentage: 12.3,
          title: "8-10分",
          heig: "49px"
        },
        {
          percentage: 1.1,
          title: "8-10分",
          heig: "25px"
        },
        {
          percentage: 0.8,
          title: "8-10分",
          heig: "8px"
        }
      ],
      AudienceList: [
        {
          title: "95后",
          heig: "135px",
          rete: "8.7分"
        },
        {
          title: "90后",
          heig: "126px",
          rete: "8.7分"
        },
        {
          title: "80后",
          heig: "110px",
          rete: "8.7分"
        },
        {
          title: "70后",
          heig: "117px",
          rete: "8.7分"
        }
      ]
    };
  },
  computed: {},
  created() {},
  watch: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new BScroll(this.$refs["scroller-wrapperr"], {
        click: true
      });
    });
  },
  components: {}
};
</script>

<style scoped lang="scss">
.rate {
  color: #fff;
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: 14px;
  height: 100%;
   .scroller-wrapper{
         height: 100%;
    }
  .header {
    .top {
      position: fixed;
      left: 0;
      top: 0;
      width: 335px;
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      margin-bottom: 27px;
      .back{
        display: block;
        width:18px;
        height:18px;
        // padding-left: 20px;
        // padding-top: 20px;
      }
      p {
        font-size: 16px;
        line-height: 22px;
      }
      .van-icon {
        width: 19px;
        height: 19px;
      }
    }
  }
}
.rete-header {
  height: 252px;
  background: url("../../../assets/imgs/home/rate.png") no-repeat center/100%
    252px;

  .text {
    padding-top: 87px;
    .star {
      margin-top: 12px;
      img {
        width: 8px;
        height: 8px;
        margin-right: 3px;
      }
      p {
        display: inline-block;
        font-size: 22px;
        color: rgba(251, 195, 74, 1);
        span {
          font-size: 14px;
        }
      }
    }
    .comment {
      display: block;
      color: #999;
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
.rate-main {
  width: 260px;
  height: 170px;
  margin: -75px auto 0;
  .echarts {
    display: flex;
    height: 100%;
    .graph {
      width: 39px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-right: 16px;
      span {
        margin-bottom: 5px;
        font-size: 12px;
        color: rgba(251, 195, 74, 1);
      }
      .Histogram {
        width: 22px;
        background: linear-gradient(
          180deg,
          rgba(241, 162, 99, 1) 0%,
          rgba(242, 94, 132, 1) 100%
        );
        border-radius: 5px;
      }
      p {
        font-size: 12px;
        line-height: 17px;
        color: #999;
        width: 39px;
      }
    }
  }
  .bot {
    margin: 12px 0 15px;
    color: #999;
    font-size: 12px;
    line-height: 17px;
  }
}
.lines {
  height: 6px;
  background: rgba(51, 54, 61, 1);
  margin-top: 41px;
}
.Audience {
  margin: 0 32px;
  h3 {
    font-size: 16px;
    line-height: 22px;
    margin: 20px 0;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left,
    .right {
      width: 138px;
      height: 36px;
      background: rgba(51, 54, 61, 1);
      border-radius: 6px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        display: block;
        width: 20px;
        height: 20px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
      span {
        font-size: 12px;
        color: rgba(251, 195, 74, 1);
        line-height: 17px;
      }
    }
    .left {
      .icon {
        background: url("../../../assets/imgs/home/rateman.png") no-repeat
          center/20px 20px;
      }
    }
    .right {
      .icon {
        background: url("../../../assets/imgs/home/ratemen.png") no-repeat
          center/20px 20px;
      }
    }
  }
  .center {
    margin: 5px 81px 0 6px;
    .box {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 22px;
      p {
        font-size: 14px;
        line-height: 20px;
        color: #ccc;
        margin-right: 10px;
      }
      .line {
        height: 12px;
        background: linear-gradient(
          180deg,
          rgba(241, 162, 99, 1) 0%,
          rgba(242, 94, 132, 1) 100%
        );
        border-radius: 5px;
      }
      .rate {
        position: absolute;
        right: 0;
        font-size: 14px;
        color: rgba(251, 195, 74, 1);
        line-height: 20px;
      }
    }
  }
  .data {
    font-size: 12px;
    line-height: 17px;
    margin: 20px 0 32px;
    color: #999;
  }
  .bot {
    width: 134px;
    height: 5px;
    background: #33363d;
    border-radius: 100px;
    margin: 0 auto 21px;
  }
}
</style>
