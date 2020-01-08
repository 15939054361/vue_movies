<template>
<div class="city">
  <div id="allmap"></div>
   <ul class="tips">
          <li>定位</li>
          <li>历史</li>
          <li>热门</li>
      </ul>
      <ul class="english" v-slide>
        <li v-for="item in english" :key="item.name">
          {{ item.name }}
        </li>
      </ul>
      <div class="centers" v-if="currentChar">
        {{ currentChar }}
      </div>
  <!-- <BaseLayer> -->
  <!-- <template v-slot:header> -->
      <div class="headers">
       <div class="address" @click="$router.go(-1)">关闭</div>
       <div class="title">选择城市</div>
   </div>
   <!-- </template> -->
   <!-- <template v-slot:default>  -->
     <div class="wrapper" ref="wrapper">
     <div class="box">
       <div class="tip">
       <div class="search">
      <img src="@/assets/imgs/home/search.png" alt="" class="search-icon">
      <input type="text" name="" id="" placeholder="输入城市">
      </div>
      <span>取消</span>
      </div>
   <div class="contents">
     <div class="fixs">
      <Fix historys ='定位城市' :name= 'name1'></Fix>
      <Fix historys ='历史访问城市' :name= 'name2'></Fix>
      </div>
      <Fix historys ='热门城市' :name= 'hot'></Fix>
      <ul class="list">
        <li v-for="item in english" :key="item.name" class="item-t">
          <div class="item-r" :class="['city-char-'+item.name]"> {{ item.name }} </div>
            <div v-for="ele in item.citys" :key="ele" class="item-r">
              {{ ele }}
            </div>
       </li>
      </ul>
   </div>
   </div>
   <!-- </template>
   </BaseLayer> -->
     </div>
    </div>
</template>

<script>
// import BaseLayer from "@/components/BaseLayer";
import BScroll from "@better-scroll/core";
import Fix from './components/citys.vue'
import cityList from '@/assets/js/city.js'
export default {
     components: {
      Fix,
      // BaseLayer
    },
    props: {

    },
    data() {
        return {
          name1:['正在定位'],
          name2:[
              '郑州','上海','南京'
          ],
          currentChar:''
        };
    },
    computed: {
       hot(){  
         var hots = cityList.cityAll.find(ele=>ele.name =='hot');
         return hots.citys
       },
       english(){
         return cityList.cityAll.filter(ele=>ele.name !='hot')
       },
    },
    created() {
      this.goPosition();
    },
    mounted() {
    this.$nextTick(() => {
      //创建(初始化)一个bScroll实力对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  },
    watch: {

    },
    methods: {
      goPosition(){
        // 百度地图API功能
        var that = this;
      var map = new BMap.Map("allmap");
       var geoc = new BMap.Geocoder();
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            //  geoc.getLocation(r.point, function(rs) {
            //   var addComp = rs.addressComponents;
            //   console.log(addComp)
            
            // });
            console.log(r);
            that.name1.pop();
            that.name1.push(r.address.city.substring(0,2))
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      }
      
    },
    directives: {
      slide:{
        inserted: function(el,binding,vnode){
          console.log(el)
          //获取vue的上下文对象
          var vm = vnode.context;
          console.log(vnode);
          //ul距离顶部的距离
          var offsetTop = el.offsetTop;
          //ul高度
          var ulH = el.offsetHeight;
         
          el.ontouchstart = function(e){
             console.log('e===>',e)
             //移动端是多点触控 这里获取第一个touch对象
            var touch = e.touches[0];
            var startY = touch.clientY;
            var endY = startY;
            console.log(startY,endY);
            var dis = endY - offsetTop;
            var index = Math.floor((dis/ulH)*vm.english.length);
            //修正下标
            if(index<0){
              index = 0;
            }
            if(index >= vm.english.length){
               index = vm.english.length - 1;
          }
          console.log(index);
          vm.currentChar = vm.english[index].name;
          if(vm.currentChar){
            var targetEl = document.querySelector(
              '.city-char-' + vm.currentChar
            );
            if(targetEl){
              vm.scroll.scrollToElement(targetEl,400,true,false);
            }
          };
           el.ontouchmove = function(e) {
            var touch = e.touches[0];
            //移动更新endY
            endY = touch.clientY;
            dis = endY - offsetTop;
            // var index = dis/ulH*this.chars;
            var index = Math.floor((dis / ulH) * vm.english.length);
            //修正下标
            if (index < 0) {
              index = 0;
            }
            if (index >= vm.english.length) {
              index = vm.english.length - 1;
            }
            vm.currentChar = vm.english[index].name;

            if (vm.currentChar && vm.$refs.wrapper) {
              var targetEl = document.querySelector(
                ".city-char-" + vm.currentChar
              );
              if(targetEl){
              vm.scroll.scrollToElement(targetEl, 400, true, false);
            }
            }
           }
          };

          el.ontouchend = function(){
            //取消事件绑定
            el.ontouchmove = null;
            vm.currentChar = ''
          }
        }
      }
      }
};
</script>

<style scoped lang="scss">
.city{
    height: 100%;
  .headers{
      // position: fixed;
      // top: 0;
      // left: 0;
      // z-index: 88;
       display: flex;
        width: 90%;
        height: 44px;
        background:rgba(35,38,45,1);
      .address{
        width:32px;
        height:16px;
        margin-left: 20px;
        margin-top: 13px;
        font-size:16px;
        color:rgba(247,247,247,1);
        line-height:16px;
      }
      .title{
            width:80px;
            height:20px;
            font-size:20px;
            margin-left: 100px;
            margin-top: 10px;
            color:rgba(245,245,245,1);
            line-height:18px;
      }
    }
    .tip{
        width: 90%;
         display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        height: 36px;
    .search{
        display: flex;
        justify-content: flex-start;
        width:298px;
        height:36px;
        background:rgba(51,54,61,1);
        box-shadow:0px 0px 4px 2px rgba(0,0,0,0.09);
        border-radius:18px;
        .search-icon{
        width:17px;
        height:17px;
        margin: 10px 7px 9px 12px;
        color:rgba(122,122,122,1);
        }
        input{
        width:126px;
        height:14px;
        margin-top: 11px;
        font-size:14px;
        color: #fff;
        background:transparent;
        line-height:14px;
        border: none;
        outline: none;
        }
    }
    span{
        width:32px;
        height:16px;
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(247,247,247,1);
        line-height:16px;
    }
    
    }
.wrapper{
  height: 100%;
.box{
  height: auto;
    .contents{
        width: 92%;
        .fixs{
          // height: auto;
          ::v-deep .nav:first-child{
             border:2px solid rgba(249,195,74,1);
          }
        }
        .list{
          height: auto;
          width: 100%;
          padding: 20px 20px;
        }
        .item-r{
          width:60px;
          height:40px;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(247,247,247,1);
          line-height:20px;
        }
    }
        }
        }
  .tips{
          position: fixed;
          right: 0;
          top: 140px;
          width:60px;
          height:54px;
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(241,163,99,1);
          line-height:18px;
        }
        .english{
          position: fixed;
          right: 15px;
          top: 200px;
          width:25px;
          height:auto;
          font-size:12px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(130,130,130,1);
          line-height:18px;
          z-index: 999;
        }
        .centers{
            position: fixed;
            top: 45%;
            left: 40%;
            width: 100px;
            height: 100px;
            line-height: 100px;
            z-index: 99;
            font-size: 30px;
            text-align: center;
            color: #fff;
            background-color: rgba(0,0,0,.5);
    }
}
</style>
