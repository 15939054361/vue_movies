<template>
    <div class="common-top">
        <div class="arr-l">
        <div class="line"></div>
        <span class="text">{{ title }} </span>
        </div>
        <div class="arr-r">
        <span class="texts">{{ more }} </span>
        <img src="@/assets/imgs/icons/arr-right.png" alt="" class="icon">
        </div>
    </div>
</template>

<script>
export default {
    props: {
          title:{
             type:String
         },
         more:{
             type:String,
             default:'全部'
         }
    },
    data() {
        return {
        
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
.common-top{
position: relative;
height: 18px;
margin-bottom: 11px;
.arr-l{
    display: flex;
    height: 100%;
    .line{
        width:4px;
        height:17px;
        background:linear-gradient(90deg,rgba(242,97,130,1) 0%,rgba(241,160,100,1) 100%);
    }
    .text{
        width:72px;
        height:18px;
        font-size:18px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(223,223,223,1);
        line-height:18px;
        margin-left: 5px;
    }
}
.arr-r{
    position: absolute;
    right: 19px;
    top: 4px;
    height: 100%;
    display: flex;
    .texts{
       width:24px;
       height:12px;
       font-size:12px;
       font-family:PingFangSC-Regular,PingFang SC;
       font-weight:400;
       color:rgba(223,223,223,1);
       line-height:12px;
       margin-right: 6px;
    }
    img{
        display: block;
        width:14px;
        height:14px;
    }
}
}
</style>
