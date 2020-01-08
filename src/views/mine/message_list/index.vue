<template>
  <div class="container">
    <div class="top">
      <div>
        <i class="iconfont iconarrow-left-c" @click="back"></i>
        <img :src="avatar" alt class="avatar" />
        <div class="user">{{user}}</div>
      </div>
      <i class="menu iconfont iconsangedian"></i>
    </div>
    <div class="wrapper_box">
      <better>
        <div class="main nav">
          <div class="nav_item" v-for="(item,index) in message" :key="index">
            <div>
              <div class="mssage_item">{{item}}</div>
            </div>
          </div>
        </div>
      </better>
    </div>
  </div>
</template>

<script>
import better from "@/components/better.vue";
import avatar from "@/assets/imgs/mine/user.png";
export default {
  name: "message_list",
  props: {},
  data() {
    return {
      avatar,
      user: "Zeng Wen",
      message: [
        "你好",
        "你好",
        "2002年，15岁的石原里美参加 了HORIPRO公司第27回艺人新 人选拔，获得最佳新人“完…",
        "你好",
        "2002年，15岁的石原里美参加 ",
        "你好",
        "你好",
        "2002年，15岁的石原里美参加 ",
        "你好",
        "你好"
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
.container {
  width: calc(100% - 40px);
  padding-top: 20px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
.top {
  display: flex;
  justify-content: space-between;
  height: 6%;
  & .avatar {
    width: 32px;
    height: 32px;
    margin-left: 16px;
  }
  & .user {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    margin-left: 8px;
  }
  & .iconarrow-left-c {
    font-size: 25px;
    color: rgba(250, 250, 250, 0.5);
  }
  & .menu {
    font-size: 20px;
    color: rgba(250, 250, 250, 0.5);
  }
}
.top > div:first-child {
  display: flex;
  align-items: center;
}
.wrapper_box {
  height: 94%;
}
.main {
  padding-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  & .nav_item > div {
    padding: 20px 20px;
    min-width: 42px;
    max-width: 180px;
  }
  & .nav_item:nth-child(odd) {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    div {
      background: url("~@/assets/imgs/mine/message_left.png") left/100% 100%;
      div {
        word-break: break-all;
        line-height: 1.2;
        text-align: left;
        width: 80%;
        float: right;
      }
    }
  }
  & .nav_item:nth-child(even) {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    div {
      background: url("~@/assets/imgs/mine/message_right.png") right/100% 100%;
      div {
        word-break: break-all;
        line-height: 1.2;
        text-align: right;
        width: 80%;
        float: left;
      }
    }
  }
}
</style>
