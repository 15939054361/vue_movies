<template>
  <div class="seat-main">
    <div class="header-mian">
      <img
        class="go-back"
        src="../../../assets/imgs/cinema/arrow-left.png"
        @click="$router.go(-1)"
        alt
      />
      <p>耀莱成龙影城（建业店)</p>
      <img class="share" src="../../../assets/imgs/cinema/share.png" alt />
    </div>
    <div class="bg">
      <div class="title">后来的我们</div>
      <div class="date">15:30—17:14</div>
      <div class="_3d">原版3D</div>
      <div class="select">
        <div class="optional">
          <span></span> 可选
        </div>
        <div class="not-selectable">
          <span></span>不可选
        </div>
        <div class="selected">
          <span></span>已选
        </div>
      </div>
      <div class="screen">3号激光厅银幕</div>
    </div>
    <div class="seat">
      <div class="row1">
        <span v-for="item in rowList" :key="item">{{item}}</span>
      </div>
      <div class="allseat">
        <ul class="row" :class="{'act':index%3 == 2}" v-for="(item,index) in seatList" :key="index">
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
      </div>
    </div>
    <div class="bot">
      <div class="box">
        <div>推荐座位</div>
        <div @click="conman(1)" class="nums">1人</div>
        <div @click="conman(2)" class="nums">2人</div>
        <div @click="conman(3)" class="nums">3人</div>
        <div @click="conman(4)" class="nums">4人</div>
      </div>
      <div v-if="iszf=='请先选座'" class="btn">请先选座</div>
      <router-link tag="div" to="/confirmOrder" v-if="iszf=='确认'" class="btn">确认</router-link>
    </div>
  </div>
</template>

<script>
import seatList from "./seat.json";
export default {
  name: "Seat",
  data() {
    return {
      seatList: [],
      rowList: [],
      iszf: "请先选座"
    };
  },
  created() {
    
    console.log(this.rowList)
    var arr = [];
    for (var i = 0; i < 9; i++) {
      var arr1 = [];
      var v = 12;
      for (var j = 0; j < v; j++) {
        if (
          (i == 4 && (j == 5 || j == 6)) ||
          (i == 0 && (j == 0 || j == 1 || j == 10 || j == 11)) ||
          (i == 1 && (j == 0 || j == 11))
        ) {
          arr1.push({
            ischeck: true,
            is: false
          });
        } else {
          arr1.push({
            ischeck: false,
            is: true
          });
        }
      }
      arr.push(arr1);
    }
    this.seatList = arr;
    for (var i = 1; i <= this.seatList.length; i++) {
      var num = i;
      this.rowList.push(num);
    }
    console.log(this.seatList);
  },
  methods: {
    ischeck(i, j) {
      this.seatList[i][j].ischeck = this.seatList[i][j].ischeck
        ? !this.seatList[i][j].ischeck
        : !this.seatList[i][j].ischeck;
        if(this.seatList[i][j].ischeck){
          this.iszf = "确认"
        }else{
          this.iszf = "请先选座"
        }
    },
    conman(num) {
      this.iszf = "确认"
      var falg = false;
      console.log(num);
      var arr = this.seatList;
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
  }
};
</script>

<style scoped lang="scss">
.seat-main {
  position: relative;
  color: #fff;
  height: 100%;
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
    .share {
      width: 20px;
      height: 20px;
    }
  }
  .bg {
    position: relative;
    width: 100%;
    height: 265px;
    background: url("../../../assets/imgs/cinema/seat_bg.png") no-repeat center;
    background-size: 100% 100%;
    overflow: auto;
    z-index: 9;
    .title {
      position: absolute;
      left: 24px;
      top: 62px;
      font-size: 16px;
      line-height: 22px;
    }
    .date {
      position: absolute;
      left: 20px;
      top: 95px;
      background: rgba(51, 54, 61, 1);
      border-radius: 5px;
      opacity: 0.7293999999999999;
      font-size: 14px;
      line-height: 23px;
      width: 99px;
      height: 23px;
    }
    ._3d {
      position: absolute;
      left: 129px;
      top: 95px;
      width: 61px;
      height: 23px;
      border-radius: 5px;
      opacity: 0.7293999999999999;
      border: 1px solid rgba(51, 54, 61, 1);
      font-size: 14px;
      line-height: 23px;
    }
    .select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      font-size: 14px;
      margin: 140px auto 0;
      .optional {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          margin-right: 5px;
          width: 26px;
          height: 26px;
          background: rgba(144, 146, 148, 1);
          border-radius: 6px;
        }
      }
      .not-selectable {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          margin-right: 5px;
          width: 26px;
          height: 26px;
          background: #f9c34a;
          border-radius: 6px;
        }
      }
      .selected {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          margin-right: 5px;
          width: 26px;
          height: 26px;
          background: #6548a9;
          border-radius: 6px;
        }
      }
    }
    .screen {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translate(-50%);
      width: 110px;
      height: 23px;
      background-color: #555;
      text-align: center;
      line-height: 23px;
      z-index: 0;
    }
  }
  .seat {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 40px;
    overflow: auto;
    .row1 {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      position: absolute;
      left: 10px;
      top: 30px;
      width: 20px;
      height: 220px;
      background: rgba(51, 54, 61, 1);
      font-size: 16px;
      line-height: 22px;
      opacity: 0.6233;
      span {
        width: 100%;
      }
    }
    .allseat {
      width: 80%;
      margin-left: 10%;
      height: auto;
      margin-top: 30px;
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
    }
  }
  .bot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 145px;
    background: rgba(51, 54, 61, 1);
    .box {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      font-size: 16px;
      line-height: 22px;
      .nums {
        width: 52px;
        height: 23px;
        opacity: 0.529;
        border: 1px solid rgba(151, 151, 151, 1);
      }
    }
    .btn {
      position: absolute;
      left: 20px;
      top: 50%;
      width: 335px;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
    }
  }
}
</style>
