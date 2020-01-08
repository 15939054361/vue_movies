<template>
    <div class="map">
    <div class="headers">
    <div class="top-l">
    <img src="@/assets/imgs/icons/arr-left.png" alt="" class="arr" @click="$router.go(-1)">
    </div>
     <p>影院地图</p>
     <img src="@/assets/imgs/home/search.png" alt="" class="search-icon">
     </div>
<div id="allmap"></div>
<div class="lists">
<swiper :options="listsOption" ref="mySwiper">
    <swiper-slide v-for="item in listsContent" :key='item.id'>
      <img :src="item.img" alt="" class="imgs">
    <div class="text">
    <div class="text-l">
      <div class="title-t">{{ item.title }}</div>
      <div class="title-b">
          <div class="imgs1"></div>
          <div class="imgs2"></div>
          <p>{{ item.time }}</p>
      </div>
   </div>
      <div class="look">
        <span>{{ item.look }}</span>
       </div>
       </div>
    </swiper-slide>  
</swiper>
</div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
          listsOption:{
           slidesPerView:2,
           slidesOffsetAfter:150
        },
        listsContent:[
           {
               img:require("@/assets/imgs/cinema/cinema_1.png"),
               title:'耀莱成龙影城（建业店）',
               time:'45min',
               look:'查看',
               id:1 
           },
           {
               img:require("@/assets/imgs/cinema/cinema_2.png"),
               title:'耀莱成龙影城（建业店）',  
               time:'45min',
               look:'查看',
               id:2 
           }
        ]
        };
    },
    computed: {
     
    },
    created() {
   
    },
    mounted() {
      this.goPosition()
    },
    watch: {

    },
    methods: {
     goPosition(){
        // 百度地图API功能
      var that = this;
      var map = new BMap.Map("allmap");
        var point = new BMap.Point(113.64964385,34.75661006);    
         map.centerAndZoom(point, 15); 
       var marker = new BMap.Marker(point); // 创建标注 
       // 添加弹跳动画
      marker.setAnimation('AMAP_ANIMATION_BOUNCE');   
        map.addOverlay(marker);  
        map.enableScrollWheelZoom(true); 
        map.addControl(new BMap.MapTypeControl());       
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.map{
    height: auto;
    width: 100%;
    .headers{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:375px;
        height:44px;
        background:rgba(51,54,61,1);
        padding: 10px 20px;
        color: #DFDFDF;
        box-sizing: border-box;
        .top-l{
            display: flex;
        .arr{
            width:18px;
            height:18px;
        }
     }
     p{
         font-size: 19px;
         line-height: 25px;
     }
     .search-icon{
          width: 17px;
          height: 17px;
     }
    }
    #allmap{
        width: 375px;
        height: 584px;
        opacity: .7;
    }
    .lists{
        position: fixed;
        bottom: 20px;
        left: 0;
        width: 446px;
        height: 194px;
        ::v-deep .swiper-slide{
             margin-left:20px;
             background:rgba(51,54,61,1);
        }
        .imgs{
            width:100%;
            height:126px;
        }
        .text{
            height: 68px;
            display: flex;
            justify-content: space-between;
            color: #fff;
            opacity: .8;
            .text-l{
               .title-t{
                   width:132px;
                   height:20px;
                   margin-top: 5px;
                   margin-left: 7px;
                   font-size:12px;
               }
               .title-b{
                   height: 17px;
                   margin-top: 7px;
                   display: flex;
                   .imgs2{
                        width:17px;
                        height:17px;
                        margin-right: 46px;
                        background-image: url('../../../assets/imgs/cinema/tel.png');
                        background-size: cover;
                   }
                   .imgs1{
                        width:15px;
                        height:15px;
                        margin-left: 10px;
                        margin-right: 14px;
                        background-image: url('../../../assets/imgs/cinema/share.png');
                        background-size: cover;
                   }
                   p{
                       height:17px;
                       font-size:12px;
                   }
               }
            }
        }
       .look{
            width:45px;
            height:20px;
            margin-top: 23px;
            margin-right: 6px;
            padding-top: 7px;
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
            border-radius:6px;
            font-size:12px;
            color: #fff;
            opacity: 1;
        }
    }
}
</style>
