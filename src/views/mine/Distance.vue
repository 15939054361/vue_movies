<template>
    <div class="distance">
       <div class="headers">
           <div class="top">
           <img src="@/assets/imgs/icons/arr-left.png" alt="" class="back" @click="$router.go(-1)">
           <div class="title">优惠券</div>
       </div>
       <div class="tip">
          <span>你有两张优惠券可用</span>
       </div>
       </div>
    <div class="wrapper" ref="wrapper"> 
   <ul class="box">
     <!-- <img src="@/assets/imgs/mine/bgi.png" alt="" class="box-c">   -->
     <li class="contents" v-for="item in list" :key="item.id">
          <div class="contents-l">
         <p class="p1">{{item.title }} </p>
         <p class="p2">{{item.content }}</p>
         <p class="p2">{{item.time }}</p>
          </div>
         <div class="contents-r">
             <p class="p1">{{item.price }}</p>
             <p class="p2">{{item.buy }}</p>
         </div>
         </li>   
    </ul>
 </div>  
 <div class="footers" @click="$router.push('/buy')">
     <p>去购票</p>
     <img src="@/assets/imgs/icons/arr-right.png" alt="">
 </div>
    </div>
</template>

<script>
// import BaseLayer from "@/components/BaseLayer";
import BScroll from "@better-scroll/core";
export default {
    components: {
        // BaseLayer
    },
    props: {
      
    },
    data() {
        return {
              list:[
                  {
                      title:'电影专享代金券',
                      content:'购票即可抵扣 快去购票',
                      time:'有效期至： 2018-04-11',
                      price:'5元',
                      buy:'购票',
                      id:1
                  },
                   {
                      title:'电影专享代金券',
                      content:'购票即可抵扣 快去购票',
                      time:'有效期至： 2018-04-11',
                      price:'5元',
                      buy:'购票',
                      id:2
                  },
                   {
                      title:'电影专享代金券',
                      content:'购票即可抵扣 快去购票',
                      time:'有效期至： 2018-04-5',
                      price:'5元',
                      buy:'',
                      id:3
                  },
                   {
                      title:'电影专享代金券',
                      content:'购票即可抵扣 快去购票',
                      time:'有效期至： 2018-04-5',
                      price:'5元',
                      buy:'',
                      id:4
                  },
                   {
                      title:'电影专享代金券',
                      content:'购票即可抵扣 快去购票',
                      time:'有效期至： 2018-04-5',
                      price:'5元',
                      buy:'',
                      id:5
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
      //创建(初始化)一个bScroll实力对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      });
    });
  },
    watch: {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
.distance{
    height: 100%;
.headers{
   
  .top{
       display: flex;
        width: 90%;
        height: 24px;
        padding: 10px 0 10px 20px;
        background:rgba(35,38,45,1);
      .back{
        display: block;
        width:18px;
        height:18px;
      }
      .title{
            width:48px;
            height:22px;
            font-size:16px;
            margin-left:136px; 
            color:rgba(255,255,255,1);
            line-height:22px;
      }
    //   border-style: dotted;
    }
    .tip{
        width:375px;
        height:30px;
        text-align: left;
        padding: 12px 0 0 20px;
        background:rgba(44,47,54,1);
        span{
        font-size:12px;
        color:rgba(255,255,255,1);
        line-height:17px;
        }
    }
    }
.wrapper{
  height: 500px;
  overflow: hidden;
.box{
    height: auto;
    // padding-bottom: 100px;
 p{
    color: #fff;  
 }
   li{
    position: relative;
    width:335px;
    height:120px;
    margin-top:10px;
    margin-left: 16px;
    background-image: url('../../assets/imgs/mine/bgi-b.png');
    background-size: cover;
    display: flex;
   
    .contents-l{
        width: 215px;
        height: 100%;
        padding: 22px 0 23px 22px;
        box-sizing: border-box;
        .p2{
            width:124px;
            height:17px;
            font-size:12px;
            line-height:17px;
            margin-top: 8px;
        }
        .p1{
            width:126px;
            height:25px;
            font-size:18px;
            line-height:25px;
        }
    }
    .contents-r{
        position: relative;
        width:120px;
        height:120px;
        padding: 35px 42px  27px 42px;
        box-sizing: border-box;
        .p1{
            width:40px;
            height:40px;
            font-size:22px;
            line-height:33px;
            
        }
        .p2{
            position: absolute;
            bottom: 24px;
            left: 42px;
            width:54px;
            height:54px;
            font-size:18px;
            line-height:25px;
            background-image: url('../../assets/imgs/mine/late.png');
            background-size: cover;
        }
    }
      }
  }
    li:first-child{
         background-image: url('../../assets/imgs/mine/bgi.png');
    }
    li:first-child .contents-r .p2{
        position: none;
        width:36px;
        height:25px;
        background-image: none;
    }
    li:nth-child(2){
         background-image: url('../../assets/imgs/mine/bgi.png');
    }
    li:nth-child(2) .contents-r .p2{
        position: none;
        width:36px;
        height:25px;
        background-image: none;
    }
  }
.footers{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width:375px;
    height:47px;
    padding-top: 23px;
    padding-left:144px; 
    background:rgba(44,47,54,1);
    p{
        width:60px;
        height:25px;
        font-size:18px;
        color: #fff;
    }
    img{
        display: block;
        width: 18px;
        height: 18px;
    }
}
}
</style>
