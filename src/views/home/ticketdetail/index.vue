<template>
  <div class="tickettail">
    <div class="header-bar">
      <div class="top">
        <span @click="$router.go(-1)"><</span>
        <h3>傲慢与偏见</h3>
        <span></span>
      </div>
    </div>
     <!-- 滚动内容 -->
    <div class="scroller-wrapper" ref="scroller-wrapperr">
      <div class="content">
        <div class="header-main">
          <!-- 1.票房 -->
          <div class="ticket">
            <div class="top">
              <div class="left">
                <span>2</span>
                <p>今日票房排行</p>
              </div>
              <div class="center">
                <span>暂无</span>
                <p>首周票房（万）</p>
              </div>
              <div class="right">
                <span>2660</span>
                <p>今日票房排行</p>
              </div>
            </div>
            <div class="bot"></div>
          </div>
          <!-- 2.总票房 -->
          <div class="allticket">
            <div class="top">
              <h3>总票房</h3>
              <ul class="nav">
                <li class="first">
                  <p>地区</p>
                  <p>每周末票房</p>
                  <p>总票房</p>
                </li>
                <li>
                  <p>中国</p>
                  <p>暂无数据</p>
                  <p>501万元</p>
                </li>
              </ul>
            </div>
            <div class="bot"></div>
          </div>
          <!-- 3.日票房明细 -->
          <div class="officeDetails">
            <div class="top">
              <h3>日票房明细</h3>
              <span>单位：万元</span>
            </div>
            <ul class="nav">
              <li>
                <p>日期</p>
                <p>当日票房</p>
                <p>票房占比</p>
                <p>拍片占比</p>
                <p>场次人次</p>
              </li>
              <li class="two">
                <div>
                  2018-05-1
                  <p>周六上映首日</p>
                </div>
                <p>538.6</p>
                <p>8.3%</p>
                <p>21.3%</p>
                <p>3</p>
              </li>
              <li>
                <div>
                  2018-05-17
                  <p>周五零点场</p>
                </div>
                <p>- -</p>
                <p>- -</p>
                <p>0.0%</p>
                <p>0</p>
              </li>
            </ul>
          </div>
          <!-- 4.fotter -->
          <div class="footer"></div>
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
    return {};
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
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.tickettail{
    height: 100%;
    .scroller-wrapper{
         height: 100%;
    }
}
.header-bar {
  color: #fff;
  width: 335px;
  margin: 0 auto;
  height: 78px;
  .top {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 335px;
    height: 78px;
    h3 {
      font-size: 16px;
    }
  }
}
.header-main {
  color: #999;
  font-size: 12px;
  line-height: 18px;
  .ticket {
    .top {
      width: 335px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left,
      .center,
      .right {
        span {
          display: block;
          font-size: 18px;
          color: rgba(251, 195, 74, 1);
          line-height: 25px;
          margin-bottom: 5px;
          font-weight: 500;
        }
      }
      .center {
        span {
          color: #fff;
          line-height: 18px;
        }
      }
    }
    .bot {
      height: 6px;
      background: rgba(51, 54, 61, 1);
      margin: 9px 0 19px;
    }
  }
  .allticket {
    .top {
      color: rgba(255, 255, 255, 1);
      width: 335px;
      margin: 0 auto;
      h3 {
        font-size: 16px;
        line-height: 18px;
        text-align: left;
        margin-bottom: 28px;
      }
      .nav {
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          &.first {
            color: #999;
          }
        }
      }
    }
    .bot {
      width: 375px;
      height: 6px;
      background: rgba(51, 54, 61, 1);
    }
  }
  .officeDetails {
    width: 335px;
    margin: 0 auto;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 30px;
      h3 {
        font-size: 16px;
        line-height: 18px;
        color: #fff;
      }
    }
    .nav {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        p {
          width: 18%;
        }
        div {
          width: 22%;
          p {
            width: 100%;
          }
        }
      }
      .two {
        div {
          color: red;
          p {
            color: rgba(251, 195, 74, 1);
          }
        }
      }
    }
  }
  .footer {
    width: 134px;
    height: 5px;
    background: rgba(51, 54, 61, 1);
    margin: 289px auto 21px;
  }
}
</style>
