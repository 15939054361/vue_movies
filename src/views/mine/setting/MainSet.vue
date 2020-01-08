<template>
  <div class="set">
    <top :title="title" />
    <div class="better_box">
      <better>
        <div class="content">
          <div>
            <img class="avatar" :src="avatar" alt />
            <span class="name">yujia1130</span>
          </div>
          <div class="safe">
            <span class="l">账号与安全</span>
            <div>
              <span class="r">手机绑定与更换</span>
              <i class="iconfont iconarrow-down"></i>
            </div>
          </div>
          <div class="line"></div>
          <ul class="other">
            <li>
              <span>被赞提醒</span>
              <label>
                <input class="mui-switch" type="checkbox" />
              </label>
            </li>
            <li>
              <span>影评/话题提醒</span>
              <label>
                <input class="mui-switch" type="checkbox" />
              </label>
            </li>
            <li>
              <span>系统通知</span>
              <label>
                <input class="mui-switch" type="checkbox" />
              </label>
            </li>
            <li>
              <span>系统通知</span>
              <label>
                <input class="mui-switch" type="checkbox" />
              </label>
            </li>
          </ul>
          <div class="line"></div>
          <div class="about">
            <span class="l">关于</span>
            <i class="iconfont iconarrow-down"></i>
          </div>
          <button class="out">退出登录</button>
        </div>
      </better>
    </div>
  </div>
</template>

<script>
import top from "../components/MainTop";
import better from "@/components/better.vue";
import avatar from "@/assets/imgs/mine/user.png";
export default {
  name: "set",
  props: {},
  data() {
    return {
      avatar,
      title: "设置"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    better,
    top
  }
};
</script>

<style scoped lang="scss">
@mixin width {
  width: calc(100% - 40px);
  margin: 0 auto;
}
@mixin flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.set {
  padding-top: 20px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.better_box {
  height: 97%;
}
.content {
  overflow: hidden;
}
.avatar {
  display: block;
  width: 73px;
  height: 73px;
  margin: 35px auto 15px;
}
.name {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
.safe {
  @include width;
  @include flex;
  margin-top: 48px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  & > div {
    @include flex;
    color: rgba(200, 200, 200, 1);
  }
  & .l {
    color: rgba(255, 255, 255, 1);
  }
  & .r {
    color: rgba(200, 200, 200, 1);
  }
  & .iconarrow-down {
    font-size: 25px;
  }
}
.line {
  margin-top: 10px;
  height: 6px;
  background: rgba(51, 54, 61, 1);
}
.about {
  @include flex;
  @include width();
  color: rgba(200, 200, 200, 1);
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  & .iconarrow-down {
    font-size: 25px;
  }
}
.other {
  @include width;
  & li {
    @include flex();
    margin-top: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
}
.out {
  margin: 20px auto 0;
  display: block;
  width: 335px;
  height: 40px;
  border: 0;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
  border-radius: 6px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
}
@mixin borderRadius($radius: 20px) {
  border-radius: $radius;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
}

$duration: 0.4s;
$checkedColor: #f26d7d;
.mui-switch {
  width: 52px;
  height: 31px;
  position: relative;
  border: 1px solid #dfdfdf;
  background-color: #fdfdfd;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  @include borderRadius();
  background-clip: content-box;
  display: inline-block;
  -webkit-appearance: none;
  user-select: none;
  outline: none;
  &:before {
    content: "";
    width: 29px;
    height: 29px;
    position: absolute;
    top: 0px;
    left: 0;
    @include borderRadius();
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
  &:checked {
    border-color: $checkedColor;
    box-shadow: $checkedColor 0 0 0 16px inset;
    background-color: $checkedColor;
    &:before {
      left: 21px;
    }
  }
  &.mui-switch-animbg {
    transition: background-color ease $duration;
    &:before {
      transition: left 0.3s;
    }
    &:checked {
      box-shadow: #dfdfdf 0 0 0 0 inset;
      background-color: $checkedColor;
      transition: border-color $duration, background-color ease $duration;
      &:before {
        transition: left 0.3s;
      }
    }
  }
  &.mui-switch-anim {
    transition: border cubic-bezier(0, 0, 0, 1) $duration,
      box-shadow cubic-bezier(0, 0, 0, 1) $duration;
    &:before {
      transition: left 0.3s;
    }
    &:checked {
      box-shadow: $checkedColor 0 0 0 16px inset;
      background-color: $checkedColor;
      transition: border ease $duration, box-shadow ease $duration,
        background-color ease $duration * 3;
      &:before {
        transition: left 0.3s;
      }
    }
  }
}
</style>
