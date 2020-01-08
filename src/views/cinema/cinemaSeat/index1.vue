<template>
  <div class="seat-main">
    <base-layer>
      <template v-slot:header>
        <div class="header-c">
          <div class="title">
            <span @click="$router.go(-1)"></span>
            <h1>恶龙咆哮影城 (白帝坟)</h1>
            <img class="check-icon" src="@/assets/image/cinema/share.png" alt />
          </div>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-c">
          <h3 class="title">后来的我们</h3>
          <ul class="Introduction">
            <li class="time">15:39一17:14</li>
            <li class="three-d">原版3D</li>
          </ul>
          <ul class="colorCheck">
            <li class="gray">
              <div class="gray-c"></div>
              <span>可选</span>
            </li>
            <li class="yellow">
              <div class="yellow-c"></div>
              <span>不可选</span>
            </li>
            <li class="purple">
              <div class="purple-c"></div>
              <span>已选</span>
            </li>
          </ul>
          <div class="hall">3号激光厅荧幕</div>
          <div class="seat-c">
            <ul class="row" :class="{'act':index%3 == 2}" v-for="(item,index) in arr" :key="index">
              <li
                class="grid"
                :class="{'act':index1%4 == 0,
                'del':(index==0&&!item1.is)||(index==1&&!item1.is),
                'no': !item1.is,
                'ischeck':item1.ischeck
                }"
                v-for="(item1,index1) in item"
                :key="index1"
                @click="ischeck(index,index1)"
              ></li>
            </ul>
            <ul class="num-list">
              <li
                class="num-item"
                :class="{'act':(index+1)%3==1&&index!=0}"
                v-for="(item,index) in arr"
                :key="index"
              >{{index+1}}</li>
            </ul>
          </div>
        </div>
      </template>
    </base-layer>
    <div class="but-seat">
      <ul class="recommend">
        <div class="title">推荐座位</div>
        <li @click="ischeckes(1)">1人</li>
        <li @click="ischeckes(2)">2人</li>
        <li @click="ischeckes(3)">3人</li>
        <li @click="ischeckes(4)">4人</li>
      </ul>
      <div  class="but-f">
        <router-link :to="{name:'confirm'}" v-if="isbut" tag="div" class="but-y act">确认</router-link>
        <div class="but-y" v-else>请先选座</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    BaseLayer
  },
  data() {
    return {
      arr: []
    };
  },
  methods: {

    //   单选座事件
    ischeck(i, j) {
      this.arr[i][j].ischeck = this.arr[i][j].ischeck
        ? !this.arr[i][j].ischeck
        : !this.arr[i][j].ischeck;
      console.log(this.arr);
    },
    // 多选座事件
    ischeckes(num) {
      var falg = false;
      console.log(num);
      var arr = this.arr;
      var isI = true;
      for (var i = 5; i < arr.length; i++) {
        if (falg) break;
        var isJ = true;
        for (var j = 4; j < arr[i].length - num + 1; j++) {
          if (falg) break;
          var arr1 = [];
          var rowNum = null;
          var arrNum = null;
          for (var v = 0; v < num; v++) {
            arr1.push(arr[i][j + v]);
            rowNum = i;
            arrNum = j;
          }
          if (arr1.every(ele => ele.ischeck == false)) {
            for (var e = 0; e < num; e++) {
              arr[rowNum][arrNum].ischeck = true;
              arrNum++;
            }
            falg = true;
            break;
          } else if (i == 4 && j == 3) {
            alert("无可选位置");
            falg = true;
            break;
          }
          console.log(isJ, j, arr[i].length - num + 1);
          if (isJ && j == arr[i].length - num) {
            console.log(j);
            j = -1;
            isJ = false;
          }
        }
        if (isI && i == arr.length - 1) {
          i = -1;
          isI = false;
        }
      }
    }
  },
  computed: {
    isbut() {
      return this.arr.some((ele, i) => {
        return ele.some((item, j) => {
          if (
            (i == 4 && (j == 5 || j == 6)) ||
            (i == 0 && (j == 0 || j == 1 || j == 10 || j == 11)) ||
            (i == 1 && (j == 0 || j == 11))
          ) {
            return false;
          } else {
            return item.ischeck;
          }
        });
      });
    }
  },
  created() {
   
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
/*.seat-main {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/image/cinema/seat_bg.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 200px;
  background-color: #000000;
  //   头部样式
  .header-c {
    position: relative;
    width: calc(100% - 40px);
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    color: #f7f7f7;
    span {
      position: absolute;
      width: 18px;
      height: 18px;
      background: url("~@/assets/image/icons/arr-left.png") no-repeat center;
      background-size: 100%;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
    }
    h1 {
      font-size: 18px;
      color: #f5f5f5;
      text-align: center;
    }
    .check-icon {
      width: 18px;
      height: 18.7px;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  //   内容样式
  .main-c {
    position: relative;
    padding: 0 20px;
    margin-top: 10px;
    .title {
      padding-left: 5px;
      font-size: 16px;
      line-height: 22px;
      color: #fff;
    }
    .Introduction {
      width: 100%;
      height: 22px;
      margin-top: 10px;
      color: #fff;
      font-size: 14px;
      .time {
        float: left;
        width: 99px;
        height: 22px;
        background: rgba(51, 54, 61, 1);
        border-radius: 5px;
        opacity: 0.7293999999999999;
        text-align: center;
        line-height: 22px;
      }
      .three-d {
        float: left;
        width: 61px;
        height: 20px;
        margin-left: 10px;
        border-radius: 5px;
        opacity: 0.7293999999999999;
        border: 1px solid rgba(51, 54, 61, 1);
        text-align: center;
        line-height: 22px;
      }
    }
    .colorCheck {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 30px;
      margin-top: 20px;
      li {
        height: 26px;
        width: 70px;
        line-height: 26px;
        color: #fff;
        div {
          float: left;
          width: 26px;
          height: 26px;
          margin-right: 5px;
          border-radius: 6px;
          box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
        }
        .gray-c {
          background: rgba(144, 146, 148, 1);
        }
        .yellow-c {
          background: rgba(249, 195, 74, 1);
        }
        .purple-c {
          background: rgba(101, 72, 169, 1);
        }
      }
    }
    .hall {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 121px;
      width: 130px;
      height: 30px;
      color: #ffffff;
      text-align: center;
      border-top-left-radius: 61px 4px;
      border-top-right-radius: 61px 4px;
      background-color: #33363d;
      line-height: 30px;
    }
    .seat-c {
      position: relative;
      margin-top: 110px;
      width: calc(100% - 10px);
      height: 250px;
      padding-left: 5px;
      //   background-color: rgba(216, 216, 216, 1);
      .row {
        display: flex;
        justify-content: center;
        height: 20px;
        margin-top: 5px;
        .grid {
          float: left;
          width: 20px;
          height: 20px;
          margin-left: 5px;
          background: rgba(216, 216, 216, 1);
          border-radius: 3px;
        }
        .act.grid {
          margin-left: 15px;
        }
        .del.grid {
          height: 0;
        }
        .grid.no {
          background: rgba(249, 195, 74, 1) !important;
        }
        .grid.ischeck {
          background-color: rgba(101, 72, 169, 1);
        }
      }
      .row.act {
        margin-bottom: 15px;
      }
      //   .row:first-child{
      //       height: 0;
      //   }
      .num-list {
        position: absolute;
        left: -10px;
        top: -40px;
        width: 20px;
        height: 312px;
        padding: 35px 0 10px 0;
        box-sizing: border-box;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.35);
        border-radius: 12px;
        opacity: 0.6233;
        .num-item {
          width: 100%;
          text-align: center;
          font-size: 16px;
          color: #fff;
          line-height: 27px;
        }
        .num-item.act {
          margin-top: 5px;
        }
      }
    }
  }
  .but-seat {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    padding: 15px 20px;
    box-sizing: border-box;
    background: rgba(51, 54, 61, 1);
    .recommend {
      width: 100%;
      height: 25px;
      font-size: 16px;
      line-height: 25px;
      color: #fff;
      .title {
        float: left;
        width: 65px;
        text-align: center;
      }
      li {
        float: left;
        width: 52px;
        height: 25px;
        margin-left: 10px;
        opacity: 0.529;
        border: 1px solid rgba(151, 151, 151, 1);
        text-align: center;
        box-sizing: border-box;
        line-height: 23px;
      }
    }
    .but-f {
      position: absolute;
      bottom: 15px;
      left: 20px;
      width: 335px;
      height: 40px;
      .but-y {
        width: 335px;
        height: 40px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        opacity: 0.4391;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
      }
      .but-y.act {
        opacity: 1;
      }
    }
  }
}*/
</style>