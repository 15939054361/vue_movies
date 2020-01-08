<template>
    <div>
       <div class="history">
           <div class="history-item">{{ historys }}</div>
           <ul>
               <li v-for="item in name" :key="item" class="nav active">
                   <span class="nav-item">{{ item }}</span>
            </li>
           </ul>
       </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
           historys:{
               type:String
           },
           name:{
               type:Array
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
};
</script>

<style scoped lang="scss">
 .history{
   width: 90%;
   height: auto;
   padding: 25px 10px 0 20px;
   .history-item{
        width:100px;
        height:12px;
        text-align: left;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(247,247,247,1);
        line-height:12px;
        
   } 
   ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      .nav{ 
            width:90px;
            height:30px;
            margin-top: 20px;
            // border:2px solid rgba(249,195,74,1);
            background:rgba(51,54,61,1);
            .nav-item{
                display: block;
                width:100%;
                height:14px;
                margin-top: 8px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(247,247,247,1);
                line-height:14px;
            }
        }
        }
 }
</style>
