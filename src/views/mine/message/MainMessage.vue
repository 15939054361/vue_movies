<template>
  <transition>
    <div class="message">
      <top title="消息中心" />
      <div class="wrapper_box">
        <better>
          <div class="content">
            <ul class="hits">
              <li v-for="(item,index) in hints" :key="index">
                <div class="left">
                  <div class="img_box">
                    <img :src="item.src" alt />
                  </div>
                  <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                  </div>
                </div>
                <span>{{item.date}}</span>
              </li>
            </ul>
            <div class="private">
              <div class="title">全部私信</div>
              <ul class="content">
                <li
                  v-for="item in privates"
                  :key="item.id"
                  @click="$router.push({path:`/main/messageList/`,query:item.id})"
                >
                  <div>
                    <img :src="item.src" alt />
                    <div>
                      <div class="name">{{item.name}}</div>
                      <div class="p_m">{{item.message}}</div>
                    </div>
                  </div>
                  <div class="time">
                    <div>{{item.time}}</div>
                    <div>{{item.message_n.number}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </better>
      </div>
    </div>
  </transition>
</template>

<script>
import mock from "mockjs";
import hint from "@/assets/imgs/mine/message_02.png";
import message from "@/assets/imgs/mine/message.png";
import great from "@/assets/imgs/mine/great.png";
import avatar from "@/assets/imgs/mine/avatar.png";
import top from "../components/MainTop.vue";
import better from "@/components/better.vue";
var random = mock.Random;

export default {
  name: "message",
  props: {},
  data() {
    return {
      hints: [
        {
          src: hint,
          title: "系统通知",
          content: "哈皮巴斯得！祝你生日快乐！",
          date: "1个月前"
        },
        {
          src: great,
          title: "赞",
          content: "一个赞都不给我！",
          date: "1个月前"
        },
        {
          src: message,
          title: "系统通知",
          content: "暂时还没有收到评论",
          date: "1个月前"
        }
      ],
      privates: [
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        },
        {
          id: random.id(),
          src: avatar,
          name: "Zeng Wen",
          message: "暂时还没有收到评论",
          time: "1个月前",
          message_n: mock.mock({
            "number|1-20": 100
          })
        }
      ]
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
.wrapper_box {
  width: calc(100% - 40px);
  margin: 0 auto;
}
@mixin flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
$yellow: rgba(249, 195, 74, 1);
$white: rgba(225, 225, 225, 1);
.message {
  padding-top: 20px;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.wrapper_box {
  height: 97%;
}
.content {
  padding-bottom: 40px;
}
// ::v-deep .wrapper{
//   padding-top: 20px;
// }
.hits {
  text-align: left;
  li {
    @include flex;
    margin-top: 32px;
    font-family: PingFangSC-Regular, PingFang SC;

    .img_box {
      overflow: hidden;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: $yellow;
      margin-right: 15px;
      img {
        display: block;
        margin: 12px auto;
        width: 20px;
        height: 20px;
      }
    }
    h3 {
      font-size: 16px;
      font-weight: 500;
      color: $white;
      line-height: 22px;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      color: rgba(200, 200, 200, 1);
      line-height: 17px;
    }
    .left {
      display: flex;
    }

    span {
      font-size: 12px;
      font-weight: 400;
      color: $white;
      line-height: 17px;
    }
  }
}
.private {
  font-family: PingFangSC-Medium, PingFang SC;
  & .title {
    margin: 30px 0 20px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    color: $white;
    line-height: 16px;
  }
  .content li div:first-child {
    display: flex;
  }
  & li {
    @include flex;
    margin-bottom: 15px;
    img {
      margin-right: 13px;
    }
    .name {
      font-size: 14px;
      font-weight: 400;
      color: rgba(249, 195, 74, 1);
      line-height: 20px;
    }
    .p_m {
      font-size: 12px;
      font-weight: 400;
      color: $white;
      line-height: 17px;
    }
    .time div:first-child {
      font-size: 12px;
      font-weight: 400;
      color: $white;
      line-height: 17px;
    }
    .time div:last-child {
      width: 16px;
      height: 16px;
      float: right;
      color: $white;
      border-radius: 50%;
      text-align: center;
      line-height: 16px;
      font-size: 11px;
      background: rgba(249, 195, 74, 1);
    }
  }
}
</style>
