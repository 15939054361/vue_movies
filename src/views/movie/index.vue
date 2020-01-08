<template>
  <div>
    <div class="header">
      <div class="left">
        <router-link class="address" tag="span" to="/home/city">定位</router-link>
        <img src="@/assets/imgs/home/arr-down.png" alt class="arr" />
      </div>
      <div class="mid">
        <div class="hot" :class="{'act':flag}" @click="hot">正在热映</div>
        <div class="coming" :class="{'act':flag1}" @click="coming">即将上映</div>
      </div>
      <img src="@/assets/imgs/home/search.png" alt class="search-icon" />
    </div>
    <div class="wrapper wrapper1" ref="wrapper">
      <ul class="content content1"  v-if="flag">
        <li v-for="(item,index) in list" :key="index" @click="$router.push('/moviedetail')">
          <img :src="item.img" alt />
          <div class="box">
            <div class="title">{{item.title}}</div>
            <div class="num">
              <span class="text2">{{item.text2}}</span>
              <span class="text">{{item.text}}</span>
            </div>
            <div class="dir">{{item.director}}</div>
            <div class="cast">{{item.cast}}</div>
            <div class="label" :class="['label'+index]">
              <span v-for="(item1,index) in item.label" :key="index">{{item1}}</span>
            </div>
            <div class="buy" :class="['buy'+index]">{{item.buy}}</div>
          </div>
        </li>
      </ul>
       <ul class="content content2" v-if="flag1">
        <li class="li">
            <div class="title">
                热门预告片
            </div>
         <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
        <video
        id="myVideo"
        class="video-js"
        poster='../../assets/imgs/cinema/coming1.png'
        
        >
        <source
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            type="video/mp4"
        >
        </video>
    </swiper-slide>
    <swiper-slide>
        <video
        id="myVideo1"
        class="video-js"
        poster='../../assets/imgs/cinema/coming1.png'
        >
        <source
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            type="video/mp4"
        >
        </video>
    </swiper-slide>
    <!-- Optional controls -->
  </swiper>
 <div class="title title1">
                即将上映
            </div>
    <swiper :options="swiperOption1" ref="mySwiper">
    <swiper-slide class="style">2月2日</swiper-slide>
    <swiper-slide class="style style1">2月3日</swiper-slide>
    <swiper-slide class="style">2月4日</swiper-slide>
    <swiper-slide class="style">2月5日</swiper-slide>
    <swiper-slide class="style">2月6日</swiper-slide>
  </swiper>
        <div class="movie">
            <img src="../../assets/imgs/cinema/movie_1.png" alt="">
            <div class="box">
            <div class="title">后来的我们</div>
            <div class="num">
              <span class="text2">1.4万</span>
              <span class="text">人想看</span>
            </div>
            <div class="dir">导演: 刘若因</div>
            <div class="cast">演员:周冬雨 井柏然</div>
            <div class="buy">预售</div>
          </div>
        </div>
        <div class="movie">
                 <img src="../../assets/imgs/cinema/coming2.png" alt="">
            <div class="box">
            <div class="title">STONE OF DESTINF</div>
            <div class="num">
              <span class="text2">1.4万</span>
              <span class="text">人想看</span>
            </div>
            <div class="dir">导演: 刘若因</div>
            <div class="cast">105分钟/动画/奇幻</div>
            <div class="buy">预售</div>
          </div>
        </div>
        </li>
       </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import img1 from "../../assets/imgs/cinema/Lhot1.png";
import img2 from "../../assets/imgs/cinema/Lhot2.png";
import img3 from "../../assets/imgs/cinema/Lhot3.png";
import img4 from "../../assets/imgs/cinema/Lhot4.png";
export default {
  props: {},
  data() {
    return {
         swiperOption: {
        },
        swiperOption1: {
          slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
        },
        flag:true,
        flag1:false,
      list: [
        {
          title: "CRACKS（2018）",
          img: img1,
          text: "萤火虫评分",
          text2: "9.1",
          director: "导演：赞恩.阿尔.拉菲亚",
          cast: "主演：赞恩.阿尔.拉菲亚",
          label: ["今日最热", "一周最热"],
          buy:'购票',

        },
        {
          title: "大鱼海棠",
          img: img2,
          text: "人想看",
          text2: "16.4万",
          director: "导演：梁旋 季冠霖",
          cast: "105分钟/动画/奇幻",
          label: ["今日最热"],
           buy:'预售',
        },
        {
          title: "现在去见你",
          img: img3,
          text: "人想看",
          text2: "15.4万",
          director: "导演：李俊赫",
          cast: "主演：苏志燮 孙艺珍",
          label: ["口碑最佳"],
           buy:'购票',
        },
        {
          title: "RETURN ON THE JEDI",
          img: img4,
          text: "人想看",
          text2: "15.4万",
          director: "导演：盖尔.曼库索",
          cast: "主演：赞恩.阿尔.拉菲亚",
          label: ["口碑最佳"],
           buy:'购票',
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });

  },
  watch: {},
  methods: {
      hot() {
          this.flag = true
          this.flag1 = false
          console.log(this)
      },
      coming() {
        this.flag = false
        this.flag1 = true
        console.log(this)
        this.$nextTick(()=>{
           this.initVideo();
        })
        //  this.initVideo();
      },
      initVideo() {
         var myPlayer=[]
        //初始化视频方法
        for(var i=0;i<2;i++) {
            myPlayer[i] = this.$video((i==0?myVideo:myVideo1), {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            // autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "318px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "185px",
            text: "Press me" 
        });
        }
        
        }

  },
  components: {}
};
</script>

<style scoped lang="scss">
.header {
  padding-top: 15px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(223, 223, 223, 1);
    line-height: 14px;
  }
  img {
    width: 12px;
    height: 6px;
  }
  .search-icon {
    width: 18px;
    height: 17px;
  }
  .mid {
    width: 164px;
    height: 25px;
    border-radius: 6px 5px 5px 6px;
    border: 1px solid #f2697f;
    display: flex;
    .hot {
      width: 50%;
      height: 100%;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
    }
    .coming {
      width: 50%;
      height: 100%;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
    }
    .act {
      background: linear-gradient(to right, #f2697f, #f19e65);
    }
  }
}

.wrapper {
  position: fixed;
  top: 70px;
  transform: translateX(-50%);
  left: 50%;
  width: calc(100% - 40px);
  height: 510px;
  // background-color: #fff;
  overflow: hidden;
  .content.content1 {
    padding-top: 10px;
    li {
      position: relative;
      width: 100%;
      height: 146px;
      margin-bottom: 25px;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
      border-radius: 6px;
      img {
        position: absolute;
        width: 120px;
        height: 170px;
        bottom: -5px;
        left: -5px;
      }
      .box {
         position: relative;
        width: calc(100% - 120px);
        height: 100%;
        // background-color: pink;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        left: 122px;
        top: 0;
        text-align: left;
        .title {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 16px;
        }
        .num {
          .text {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
          }
          .text2 {
            font-size: 15px;
            color: #fbc34a;
          }
        }
        .dir {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 12px;
        }
        .cast {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 12px;
        }
        .label0 {
          display: inline-block;
            span:nth-child(1) {
        width: 48px;
          height: 17px;
          border-radius: 3px;
          border: 1px solid rgba(251, 195, 74, 1);
          color:rgba(251, 195, 74, 1);
          margin-right:6px;
            }
            span:nth-child(2) {
                 width: 48px;
          height: 17px;
          border-radius: 3px;
          border:1px solid rgba(242,108,126,1);
          color:rgba(242,108,126,1);
            }
        }
        .label1 {
          display: inline-block;
            span:nth-child(1) {
        width: 48px;
          height: 17px;
          border-radius: 3px;
          border: 1px solid rgba(251, 195, 74, 1);
          color:rgba(251, 195, 74, 1);
          margin-right:6px;
            }
        }
        .label2 {
          display: inline-block;
            span:nth-child(1) {
        width: 48px;
          height: 17px;
          border-radius: 3px;
          border: 1px solid rgba(60,76,172,1);
          color:rgba(60,76,172,1);
          margin-right:6px;
            }
        }
        .label3 {
          display: inline-block;
            span:nth-child(1) {
        width: 48px;
          height: 17px;
          border-radius: 3px;
          border: 1px solid rgba(60,76,172,1);
          color:rgba(60,76,172,1);
          margin-right:6px;
            }
        }
        .buy {
            width:54px;
       height:25px;
background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
border-radius:6px;
text-align: center;
line-height:25px;
color:#fff;
position:absolute;
right:15px;
top:50%;
transform: translateY(-50%);
        }
        .buy1 {
            background:linear-gradient(150deg,rgba(98,75,163,1) 0%,rgba(203,68,152,1) 100%);
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>

.wrapper .content2 {

    // background-color: pink;
    .li {
        width: 100%;
        height: 100%;
        .title {
            text-align: left;
            font-size:18px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(223,223,223,1);
line-height:18px;
margin-bottom:20px;
        }
        .swiper-slide {
            display: flex;
            justify-content: center;
            ::v-deep .video-js .vjs-big-play-button {
            top: 60px;
            left: 110px;
  }
        }
        .title1 {
              padding-top:20px;
          
            margin-bottom:15px;
        }
        .style {
            width:82px;
height:26px;
border-radius:13px;
border:2px solid rgba(151,151,151,1);
line-height: 26px;
text-align: center;
color:#fff;
        }
        .style1 {
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            border:none;
        }
        .movie {
            width: 100%;
            height: 160px;
            background-color: #33363D;
            margin-top:15px;
            display:flex;
            justify-content: space-between;
            img {
                width: 120px;
                height: 160px;
            }
            .box {
                box-sizing: border-box;
                padding:10px 0 10px 10px;
                text-align: left;
                width: calc(100% - 125px);
                height: 100%;
                // background-color: pink;
                 display:flex;
              flex-direction: column;
              justify-content: space-around;
              position:relative;
               .title {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 16px;
        }
        .num {
          .text {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 14px;
          }
          .text2 {
            font-size: 15px;
            color: #fbc34a;
          }
        }
        .dir {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 12px;
        }
        .cast {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 12px;
        }
              .buy {
            width:54px;
       height:25px;
 background:linear-gradient(150deg,rgba(98,75,163,1) 0%,rgba(203,68,152,1) 100%);
box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
border-radius:6px;
text-align: center;
line-height:25px;
color:#fff;
position:absolute;
right:15px;
top:50%;
transform: translateY(-50%);
        }
            }
           
        }

    }
}

</style>