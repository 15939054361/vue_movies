<template>
  <div class="confirm-main">
    <div  @click="$router.go(-1)" class="header">
      <img  src="../../../assets/imgs/cinema/arrow-left.png" alt />
    </div>
    <div class="bg">
      <div class="title">后来的我们</div>
      <div class="date">今天2月1日 17:10（原版2D)</div>
      <div class="cinema">耀莱成龙影城（建业店）</div>
      <div class="seat">3号激光厅 6排9座</div>
    </div>
    <div class="detail">
      <div class="preferential">
        <p>电影优惠券</p>
        <div>
          <p>1张优惠券可用</p>
          <img src="../../../assets/imgs/cinema/arrow-right.png" alt />
        </div>
      </div>
      <div class="vip">
        <p>会员卡</p>
        <div>
          <p>去使用</p>
          <img src="../../../assets/imgs/cinema/arrow-right.png" alt />
        </div>
      </div>
      <div class="price">
        <p>票价总计</p>
        <div>33元</div>
      </div>
      <div class="tel">
        <div class="text">
          <div class="tel-txet">手机号</div>
          <p>购票成功后将收到取票码</p>
        </div>
        <p>13858574848</p>
      </div>
    </div>
    <div class="confirm">
      <div class="top">
        <div class="box">
          <div class="protocol">
            <p>查看退票、改签协议</p>
            <img src="../../../assets/imgs/cinema/arrow_top.png" alt />
          </div>
        </div>
        <div class="zf">
          <div class="price">
            <p>
              还需支付:
              <span>33元</span>
            </p>
            <img src="../../../assets/imgs/cinema/arrow_top.png" alt />
          </div>
        </div>
      </div>
      <div class="confirm-order">确认订单</div>
    </div>
  </div>
</template>

<script>
export default {
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
.confirm-main {
  position: relative;
  height: 100%;
  color: #fff;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    z-index: 88;
    img {
      width: 20px;
      height: 20px;
      margin-top: 12px;
      padding-left: 20px;
    }
  }
  .bg {
    position: relative;
    width: 100%;
    height: 252px;
    background: url("../../../assets/imgs/cinema/order_bg.png") no-repeat center;
    background-size: 100% 100%;
    .title {
      position: absolute;
      top: 86px;
      left: 20px;
      font-size: 24px;
      line-height: 33px;
    }
    .date {
      position: absolute;
      top: 129px;
      left: 20px;
      font-size: 14px;
      line-height: 20px;
    }
    .cinema {
      position: absolute;
      top: 159px;
      left: 20px;
      font-size: 14px;
      line-height: 20px;
    }
    .seat {
      position: absolute;
      top: 189px;
      left: 20px;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .detail {
    width: 355px;
    height: 209px;
    background: rgba(51, 54, 61, 1);
    border-radius: 6px;
    margin: 5px auto 0;
    overflow: auto;
    .preferential {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      padding: 0 10px;
      p {
        font-size: 16px;
        line-height: 22px;
      }
      div {
        p {
          font-size: 12px;
          color: rgba(249, 195, 74, 1);
          line-height: 17px;
          float: left;
        }
      }
    }
    .vip {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      p {
        font-size: 16px;
        line-height: 22px;
      }
      div {
        p {
          font-size: 12px;
          color: rgba(249, 195, 74, 1);
          line-height: 17px;
          float: left;
        }
      }
    }
    .price {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      padding: 0 10px;
      p {
        font-size: 16px;
        line-height: 22px;
      }
      div {
        font-size: 20px;
        color: rgba(194, 19, 19, 1);
        line-height: 28px;
        font-weight: 500;
      }
    }
    .tel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .text {
        text-align: left;
        .tel-txet {
          font-size: 16px;
          line-height: 22px;
        }
        p {
          line-height: 17px;
        }
      }
      p {
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .confirm {
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(51, 54, 61, 1);
    width: 100%;
    height: 145px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      .box {
        p {
          float: left;
        }
        img {
          margin-top: -2px;
          margin-left: 5px;
        }
      }
      .zf {
        .price {
          p {
            float: left;
            font-size: 16px;
            line-height: 22px;
            span {
              color: rgba(194, 19, 19, 1);
              font-size: 20px;
              line-height: 28px;
            }
          }
          img {
            margin-top: 3px;
            margin-left: 5px;
          }
        }
      }
    }
    .confirm-order {
      width: 335px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      text-align: center;
      line-height: 40px;
      margin: 0 auto;
      font-size:18px;
    }
  }
}
</style>
