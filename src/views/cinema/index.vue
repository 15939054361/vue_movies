<template>
<div class="cinema">
 <div class="headers">
   <div class="top-l">
   <router-link class="address" tag='div' to='/home/city'>郑州</router-link>
   <img src="@/assets/imgs/home/arr-down.png" alt="" class="arr">
   </div>
    <p>影院</p>
    <img src="@/assets/imgs/home/search.png" alt="" class="search-icon">
  </div>
  <div class="wrapper" ref="wrapper">
   <div class="box">
    <router-link class="fixs" tag='div' to="/cinema/map">
      <img src="@/assets/imgs/cinema/position.png" alt="">
      <span>我在: {{ address }}</span>
  </router-link>
      <ul class="contents">
          <li v-for="item in list" :key="item.id" @click="$router.push('/cinemaInfo')">
              <div class="title">
                  <p class="p1">{{ item.name }}</p>
                  <p class="p2">{{ item.price }}
                      <span>起</span>
                  </p>
              </div>
              <div class="fam">
                  <p class="p1">{{ item.address }}</p>
                  <p class="p2">{{ item.km }}</p>
              </div>
              <div class="lis">
                  <p class="p1 first">{{ item.dis }}</p>
                  <p class="p2">{{ item.disCont }}</p>
              </div>
              <div class="lis">
                  <p class="p1 second">{{ item.cu }}</p>
                  <p class="p2">{{ item.cuCont }}</p>
              </div>
              <div class="lis">
                  <p class="p1 third">{{ item.cart }}</p>
                  <p class="p2">{{ item.cartCont }}</p>
              </div>
          </li>
      </ul>
  </div>
  </div>
</div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
    props: {

    },
    data() {
        return {
          address:'正在定位',
          list:[
              {
                  name:'耀莱成龙影城（建业店）',
                  price:'19.9元',
                  km:'1.7km',
                  address:'金水区普惠路77号绿地之窗尚峰座正大乐成',
                  dis:'惠',
                  disCont:'我是药神等4部影片特惠',
                  cu:'促',
                  cuCont:'观影套餐限量特惠',
                  cart:'卡',
                  cartCont:'开卡特惠，每单2张立减2元',
                  id:1
              },
              {
                  name:'耀莱成龙影城（建业店）',
                  price:'19.9元',
                  km:'1.2km',
                  address:'管城回族区东风南路尚鼎路',
                  dis:'惠',
                  disCont:'我是药神等4部影片特惠',
                  cu:'促',
                  cuCont:'观影套餐限量特惠',
                  cart:'卡',
                  cartCont:'开卡特惠，每单2张立减2元',
                  id:2
              },
              {
                  name:'耀莱成龙影城（建业店）',
                  price:'19.9元',
                  km:'1.2km',
                  address:'管城回族区东风南路尚鼎路',
                  dis:'惠',
                  disCont:'我是药神等4部影片特惠',
                  cu:'促',
                  cuCont:'观影套餐限量特惠',
                  cart:'卡',
                  cartCont:'开卡特惠，每单2张立减2元',
                  id:3
              },
              {
                  name:'耀莱成龙影城（建业店）',
                  price:'19.9元',
                  km:'1.2km',
                  address:'管城回族区东风南路尚鼎路',
                  dis:'惠',
                  disCont:'我是药神等4部影片特惠',
                  cu:'促',
                  cuCont:'观影套餐限量特惠',
                  cart:'卡',
                  cartCont:'开卡特惠，每单2张立减2元',
                  id:4
              },
              {
                  name:'耀莱成龙影城（建业店）',
                  price:'19.9元',
                  km:'1.2km',
                  address:'管城回族区东风南路尚鼎路',
                  dis:'惠',
                  disCont:'我是药神等4部影片特惠',
                  cu:'促',
                  cuCont:'观影套餐限量特惠',
                  cart:'卡',
                  cartCont:'开卡特惠，每单2张立减2元',
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
   this.goPosition();
  },
    watch: {

    },
  methods: {
    goPosition(){
      var that = this;
      var map = new BMap.Map("allmap");
      var geoc = new BMap.Geocoder();
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
             geoc.getLocation(r.point, function(rs) {
              var addComp = rs.addressComponents;
              console.log(addComp)
              that.address = addComp.city + addComp.district + addComp.street
             console.log(that.address)
            });
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
  },
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.cinema{
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
          
        .address{
          font-size:14px;
          line-height: 20px;
        }
        .arr{
            width: 14px;
            height: 8px;
            margin-top: 5px;
            margin-left: 6px;
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
.wrapper{
    height: 520px;
    overflow: hidden;
    .box{
     .fixs{
        width:375px;
        height:30px;
        background:rgba(44,47,54,1);
        margin-top: 12px;
        padding-left:20px;
        color: #DFDFDF;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        img{
            width: 13px;
            height: 16px;
            margin-right: 11px;
        }
    }
    .contents{
        padding: 0 20px;
        li{
            width:335px;
            height:146px;
            margin-top: 12px;
            padding: 9px 12px 13px 11px;
            box-sizing: border-box;
            background:rgba(51,54,61,1);
            border-radius:6px;
            color: #FFFFFF;
            .title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size:14px;
                line-height: 25px;
                .p2{
                    color:#FBC34A;
                    span{
                       color: #FFFFFF; 
                       opacity:0.5865;
                    }
                }
            }
            .fam{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size:12px;
                line-height: 17px;
                 opacity:0.5865;
            }
            .lis{
                display: flex;
                margin-top: 11px;
                height: 18px;
                font-size:12px;
                .p1{
                    width:18px;
                    height:15px;
                    padding-top: 4px;
                    background:linear-gradient(135deg,rgba(235,110,117,1) 0%,rgba(247,166,83,1) 100%);
                    border-radius:4px;
                }
                .second{
                    background:linear-gradient(135deg,rgba(176,70,157,1) 0%,rgba(97,72,170,1) 100%);
                }
                .third{
                  background:linear-gradient(135deg,rgba(50,36,149,1) 0%,rgba(49,56,172,1) 100%);
                }
                .p2{
                    height:17px;
                    font-size:12px;
                     opacity:0.5865;
                     margin-left: 9px;
                     margin-top: 4px;
                }
            }
        }
    }
    }
}
}
</style>
