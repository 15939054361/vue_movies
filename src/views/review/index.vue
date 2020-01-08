<template>
    <div class="page">
        <div class="header">
        
            <img :src="arrleft" alt="" @click="$router.go(-1)">
    
             <img :src="share" alt="">
        </div>
         <div class="wrapper" ref="wrapper">
    <div class="content">
        <ul class="ul">
            <li>简介</li>
            <li class="act">影评</li>
            <li>讨论</li>
            <li>更多</li>
        </ul>
        <div class="review">
            <div class="left">观众热评</div>
            <div class="right">写影评</div>
        </div>
        <ul class="ul2">
            <li>全部</li>
            <li>最新</li>
            <li>陪伴是最长情的告白</li>
            <li>爱狗人士必看</li>
            <li>好评</li>
            <li>差评</li>
            <li>点映</li>
            <li>购票</li>
            <li>影评达人</li>
            <li>同城</li>
        </ul>
        <div class="arr">
            <img src="../../assets/imgs/cinema/arrow down.png" alt="">
        </div>
        <ul class="ul3">
            <li v-for="(item,index) in list" :key="index">
               <div class="top">
                   <img class="img" :src="item.pic" alt="">
                   <div class="box">
                       <div class="top">{{item.name}}</div>
                       <div class="bot">{{item.count}}</div>
                   </div>
                   <img class="dot" src="../../assets/imgs/icons/Llaba.png" alt="">
               </div>
               <div class="mid">
                   {{item.text}}
               </div>
               <div class="bottom">
                   <span>05-17 19:54</span>
                   <span class="span1">
                       <img src="../../assets/imgs/icons/Lthump.png" alt="">
                       56
                       <img src="../../assets/imgs/icons/Lcomment.png" alt="">
                       1
                       </span>
               </div>
            </li>
        </ul>
    </div>
  </div>
    <div class="footer" @click="$router.push('/cinemaSeat')">
        特惠选座
    </div>
    </div>
</template>

<script>
import arrleft from '../../assets/imgs/icons/arr-left.png'
import share from '../../assets/imgs/icons/Lshare.png'
import BScroll from '@better-scroll/core'
import pic1 from '../../assets/imgs/cinema/avatar1.png'
import pic2 from '../../assets/imgs/cinema/avatar2.png'
import pic3 from '../../assets/imgs/cinema/avatar3.png'
export default {
    props: {

    },
    data() {
        return {
            arrleft,
            share,
            list:[
                {
                    pic:pic1,
                    name:'Yujia2574',
                    count:'★★★★☆ 8.0',
                    text:'2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…'
                },
                {
                    pic:pic2,
                    name:'Yujia2574',
                    count:'★★★★☆ 8.0',
                    text:'2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完…'
                },
                {
                    pic:pic3,
                    name:'Yujia2574',
                    count:'★★★★☆ 8.0',
                    text:'2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完…'
                },
                
            ]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click:true
        })
      })
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.page {
    width: 100%;
    height: 100%;
}
.header{
    width: calc(100% - 40px);
    height: 50px;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 20px;
        height: 20px;
    }
    position:fixed;
    top:0;
     left:50%;
     left:50%;
    transform: translateX(-50%);
}
.wrapper {
    overflow: hidden;
    position:fixed;
    top:55px;
    left:50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
    height: calc(100% - 110px);
    // background-color: #fff;
    .content {
        padding-top:5px;
        width: 100%;
        .ul {
            text-align: left;
            li {
                display: inline-block;
                width: 30px;
                height: 20px;
                margin-right:27px;
                font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,0.8);
line-height:14px;
            &.act {
               font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:14px;
position:relative;

            }
            &.act::before {
                position:absolute;
                left:0;
                bottom:-3px;
                content:'';
                display:block;
                width:30px;
height:3px;
background:linear-gradient(135deg,rgba(241,100,129,1) 0%,rgba(241,144,108,1) 100%);
            }
            &.act::after {
                
                position:absolute;
                top:-6px;
                content:'999+';
                color:#fff;
                font-size:8px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
            }
            }
        }
    }
}
.review {
    padding-top:30px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .left {
        font-size:18px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:18px;
    }
    .right {
        width:54px;
height:25px;
background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
border-radius:13px;
font-size:12px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height:25px;
    }
}
.ul2 {
    width: 100%;
    box-sizing: border-box;
    padding-right:70px;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-around;
    height: 140px;
    li {
        height:22px;
        padding:2px 10px;
        margin-right:10px;
        background:rgba(51,54,61,1);
border-radius:10px;
    font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:22px;
    }
}
.arr {
    width: 100%;
    height: 45px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.ul3{
    width: 100%;
    padding-top:15px;
    .top {
        width: 100%;
        height: 50px;
        position:relative;
        .img {
            position:absolute;
            width: 50px;
            height: 50px;
            top:0;
            left:0;
        }
        .box {
            box-sizing: border-box;
            padding:8px 0;
            position:absolute;
            top:0;
            left:55px;
            width: 100px;
            height: 100%;
            // background-color: pink;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            div {
                text-align: left;
            }
            .top {
                font-size:14px;
font-family:PingFangSC-Semibold,PingFang SC;
font-weight:600;
color:rgba(255,255,255,1);

            }
            .bot {
                font-size: 14px;
                color:#FBC34A;
            }
            

        }
        .dot {
                position:absolute;
                top:50%;
                transform: translateY(-50%);
                width: 15px;
                height: 15px;
                right:0;
            }
        
    }
    .mid {
        text-align:left;
        padding-top:8px;
        font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:18px;
    }
    .bottom {
        color:white;
        margin-bottom:10px;
        display: flex;
        height: 20px;
        justify-content: space-between;
        align-items: center;
        img {
            width: 20px;
            height: 20px;
            margin:0 3px;
        }
        .span1 {
            display:flex;
            align-items: center;
            justify-content: space-between;
        }

    }
}
.footer {
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
height:48px;
background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
border-radius:6px;
color:#fff;
font-size: 18px;
line-height:48px;
text-align: center;
}
</style>
