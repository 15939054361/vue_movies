<template>
  <div class="login">
    <top />
    <div class="main">
      <img :src="avatar" alt class="avatar" />
      <div class="use">
        <ValidationProvider rules="required" v-slot="{ errors,classes }">
          <input v-model="user.phone" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <img :src="phoneSrc" alt />
      </div>
      <div class="pass">
        <ValidationProvider rules="minmax:6,12|required" v-slot="{ errors, classes}" :bails="false">
          <input v-model="user.pass" type="password" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <img :src="passSrc" alt />
      </div>
      <button class="login_btn" @click="enter">登录</button>
      <div class="other">
        <span>注册</span>
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import storeJs from "store";
import phoneSrc from "@/assets/imgs/mine/phone.png";
import passSrc from "@/assets/imgs/mine/pass.png";
import top from "../components/MainTop";
import avatar from "@/assets/imgs/mine/login_avatar.png";
import { configure } from "vee-validate";

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
    // ...
  }
});
// 验证规则
extend("minmax", {
  validate(value, args) {
    const length = value.length;

    return length >= args.min && length <= args.max;
  },
  params: ["min", "max"],
  message: "密码为6到12位"
});
extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  // This rule reports the `required` state of the field.
  computesRequired: true,
  message: "这是必填项"
});

export default {
  name: "login",
  props: {},
  data() {
    return {
      avatar,
      phoneSrc,
      passSrc,
      user: {
        phone: "",
        pass: ""
      },
      // /-------/
      value: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    enter() {
      console.log(Boolean(this.user.pass))
      if (this.user.pass && this.user.phone) {
        storeJs.set("user", this.user);
        if (storeJs.get("user")) {
          this.$router.push("/main");
        } else {
          alert("登录失败");
        }
      } else {
        alert("不能为空");
      }
    }
  },
  components: {
    top,
    ValidationProvider
  }
};
</script>

<style scoped lang="scss">
// .control {
//   width: 100%;
//   span {
//     display: block;
//   }
//   input {
//     padding: 5px 10px;
//   }
//   &.invalid {
//     input,
//     span {
//       color: #eb0600;
//     }
//     input {
//       border: 1px #eb0600 solid;
//     }
//   }
// }

// &.valid {
//   input,
//   span {
//     color: #045929;
//   }
// }

// input
//         border: 1px #045929 solid
.login {
  padding-top: 20px;
  overflow: hidden;
  box-sizing: border-box;
}
.main {
  width: calc(100% - 122px);
  margin: 0 auto;
}
.avatar {
  display: block;
  width: 103px;
  height: 92px;
  margin: 0 auto;
  margin-top: 77px;
}
.use,
.pass {
  height: 40px;
  margin: 33px auto 20px;
  position: relative;
  & input {
    width: 100%;
    height: 100%;
    text-indent: 4em;
    outline: none;
    border: 0;
    background: rgba(51, 54, 61, 1);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
    border-radius: 11px;
  }
  & img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 20px;
  }
}
.login_btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px auto 0;
  border: 0;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  border-radius: 11px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.other {
  display: flex;
  font-size: 14px;
  margin-top: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(200, 200, 200, 1);
  line-height: 14px;
  justify-content: space-between;
}
</style>
