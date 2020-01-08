<template>
    <div class="page">
        <div class="header">
            <div class="main">
            <img :src="deleteImg" alt="" @click="$router.go(-1)">
            <img :src="menu" alt="">
            </div>
        </div>
        <div class="banner">
            <div class="text">
                <div class="top">
                    “要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲”
                </div>
                <div class="bot">
                    《傲慢与偏见》
                </div>
            </div>
            <div class="laba">
                <img :src="laba" alt="">
                <span>8S</span>
            </div>
        </div>
        <div class="banner1"></div>
        <div class="banner2"></div>
        <div class="footer">
            <div class="icon icon1"></div>
            <div class="icon icon2">
                <img :src="share" alt="">
            </div>
            <div class="icon icon3">
                <img :src="thump" alt="">
            </div>
            <div class="icon icon4"></div>
        </div>
    </div>
</template>

<script>
import deleteImg from '../../assets/imgs/icons/delete.png'
import menu from '../../assets/imgs/icons/menu.png'
import laba from '../../assets/imgs/icons/Llaba.png'
import thump from '../../assets/imgs/icons/Lthump.png'
import share from '../../assets/imgs/icons/Lshare.png'
export default {
    props: {

    },
    data() {
        return {
            deleteImg,
            menu,
            laba,share,thump
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

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
    .header {
        width:100%;
height:210px;
background:linear-gradient(123deg,rgba(242,94,133,1) 0%,rgba(241,166,97,1) 100%);
border-radius:29px;
opacity:0.9029;

    }
}
.main {
    padding-top:20px;
    width: calc(100% - 40px);
    margin:0 auto;
    display:flex;
    justify-content: space-between;
}
.banner {
    width: 100%;
    position:fixed;
    top:90px;
    left:50%;
    transform: translateX(-50%);
    height: 500px;
    background: url('../../assets/imgs/home/Lbanner.png') no-repeat center;
    border-radius: 20px;
    overflow: hidden;
    z-index:3;
    .text {
        width: 227px;
        height: 90px;
        position: absolute;
        bottom:50px;
        left:20px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
           
          font-size:18px;
          font-weight:500;
          color:#fff;
          line-height:25px;
        }
        .bot {
            font-size: 15px;
            color:#fff;
            text-align: left;
        }
    }
}
.banner1 {
    position:fixed;
    width:291px;
    height:456px;
    background:url('../../assets/imgs/home/s1.jpg') no-repeat center;
    background-size: 291px 456px;
     left:50%;
    transform: translateX(-50%);
    z-index: 2;
    bottom:2.5rem;
     border-radius: 20px;
    overflow: hidden;

}
.banner2 {
position:fixed;
    width:254px;
height:379px;
background:rgba(216,216,216,1);
box-shadow:0px 6px 27px 1px rgba(0,0,0,0.5);
border-radius:12px;
 left:50%;
    transform: translateX(-50%);
    z-index: 1;
    bottom:2.1rem;
}
.laba {
    width:73px;
height:30px;
background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
box-shadow:0px 4px 16px 0px rgba(0,0,0,0.5);
border-radius:11px;
position:absolute;
bottom:50px;
right:20px;
display:flex;
justify-content: space-around;
align-items: center;
font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(247,247,247,1);
line-height:20px;
}
.footer {
    position:fixed;
    bottom:25px;
    left:50%;
    width: calc(100% - 40px);
    display:flex;
    justify-content: space-around;
    align-items: center;
    transform: translateX(-50%);
    .icon {
        width: 38px;
        height: 38px;
        background-color: #33363D;
        border-radius: 50%;
        &.icon1 {
            background:url('../../assets/imgs/icons/Lmovie.png') no-repeat center;
        }
        &.icon4 {
            background:url('../../assets/imgs/icons/Lcomment.png') no-repeat center;
        }
        &.icon2 {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 21px;
                height: 21px;
            }
        }
        &.icon3 {
             display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 21px;
                height: 21px;
            }
        }
    }
    
}
</style>
