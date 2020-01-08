<template>
  <div class="container">
    <better>
      <div class="user">
        <div class="header">
          <i class="arrow_l iconfont iconarrow-left-c" @click="back"></i>
          <div class="header_item">
            <img :src="avatar" alt class="avatar" />
            <div class="info">
              <span class="name">yujia1130</span>
              <div class="level_box">
                <img class="merber" :src="member" alt />
                <span>LV1</span>
              </div>
            </div>
            <p class="label">同学有点懒，还没有写签名</p>
            <div class="select">
              <div class="want">
                <div class="want_item">
                  <span>想看</span>
                  <span>5</span>
                </div>
              </div>
              <div class="over">
                <div class="over_item">
                  <span>看过</span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="main">
          <div class="title">看过电影</div>
          <li v-for="(item,index) in movies" :key="index">
            <div class="star">
              <span :class="['iconfont' ,item.star<1?'iconxing':'iconstart']"></span>
              <span :class="['iconfont' ,item.star<2?'iconxing':'iconstart']"></span>
              <span :class="['iconfont' ,item.star<3?'iconxing':'iconstart']"></span>
              <span :class="['iconfont' ,item.star<4?'iconxing':'iconstart']"></span>
              <span :class="['iconfont' ,item.star<5?'iconxing':'iconstart']"></span>
              <span class="grade">{{item.grade}}</span>
            </div>
            <div>
              <img :src="item.src" alt />
              <div>
                <h3>{{item.title}}</h3>
                <p>{{item.opera}}</p>
                <p>{{item.time}}</p>
                <p>{{item.date}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </better>
  </div>
</template>

<script>
import better from "@/components/better.vue";
import arrow_l from "@/assets/imgs/icons/arr-left.png";
import avatar from "@/assets/imgs/mine/user.png";
import movie_01 from "@/assets/imgs/mine/m4.jpg";
import movie_02 from "@/assets/imgs/mine/m3.jpg";
import member from "@/assets/imgs/mine/member.png";
export default {
  name: "userInfo",
  props: {},
  data() {
    return {
      // 静态
      avatar,
      arrow_l,
      member,
      movies: [
        {
          src: movie_01,
          title: "后来的我们",
          opera: "剧情",
          time: "中国/105分钟",
          date: "购票时间 2017-8-4",
          grade: "9分",
          star: 4
        },
        {
          src: movie_02,
          title: "后来的我们",
          opera: "剧情",
          time: "中国/105分钟",
          date: "购票时间 2017-8-4",
          grade: "8分",
          star: 3
        },
        {
          src: movie_02,
          title: "后来的我们",
          opera: "剧情",
          time: "中国/105分钟",
          date: "购票时间 2017-8-4",
          grade: "8分",
          star: 3
        },
        {
          src: movie_02,
          title: "后来的我们",
          opera: "剧情",
          time: "中国/105分钟",
          date: "购票时间 2017-8-4",
          grade: "8分",
          star: 3
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    better
  }
};
</script>

<style scoped lang="scss">
.container{
  height: 100%;
  overflow: hidden;
}
.userInfo {
  padding-bottom: 50px;
}
.header {
  position: relative;
  height: 277px;
  background: linear-gradient(
    127deg,
    rgba(242, 98, 131, 1) 0%,
    rgba(241, 163, 99, 1) 100%
  );
  border-radius: 29px;
  opacity: 0.8996999999999999;
}
.header .arrow_l {
  position: absolute;
  top: 30px;
  left: 0;
  color: rgba(225, 225, 225, 0.5);
  font-size: 30px;
  margin-left: 20px;
}
.header .header_item {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 185px;
  background: rgba(51, 54, 61, 1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 17px;

  & .avatar {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -31.5px;
    width: 73px;
    height: 73px;
  }
  & .info {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .name {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
    }
    .level_box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      width: 50px;
      height: 18px;
      border-radius: 12px;
      border: 1px solid rgba(251, 195, 73, 1);
      span {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(251, 195, 73, 1);
        line-height: 14px;
      }
    }
    .merber {
      display: block;
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }
  }
  & .label {
    margin-top: 10px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
  & .select {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    .want,
    .over {
      width: 134px;
      height: 37px;
      line-height: 37px;
      border-radius: 5px;
      padding: 2px;
    }
    .want {
      background: linear-gradient(
        139deg,
        rgba(242, 96, 132, 1),
        rgba(241, 159, 100, 1)
      );
    }
    .over {
      background: linear-gradient(
        137deg,
        rgba(60, 76, 172, 1),
        rgba(198, 69, 151, 1)
      );
    }
    .want_item,
    .over_item {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: rgba(51, 54, 61, 1);
    }
  }
}
.contents {
  height: 800px;
  background-color: rebeccapurple;
}
.main {
  padding: 0 20px;
  margin-top: 50px;
  & .title {
    margin-bottom: 15px;
    text-align: left;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
  }
  & li {
    margin-bottom: 10px;
  }
  & li > div:last-child {
    text-align: left;
    text-indent: 4em;
    height: 120px;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    display: flex;
  }
  & li img {
    display: block;
    width: 94px;
    height: 120px;
  }
  & li h3 {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 44px;
  }
  & li p {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
  & li .grade {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(251, 195, 74, 1);
    line-height: 17px;
  }
}
.star {
  text-align: left;
  margin-bottom: 10px;
  & .grade {
    margin-left: 10px;
  }
}
.iconfont {
  margin-left: 5px;
  color: #fbc34a;
}
</style>
