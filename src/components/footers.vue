<template>
    <div>
     <div class="footer-main">
       <router-link class="footer-link home" to='/home' tag='li'></router-link>
       <router-link class="footer-link movie" to='/movie' tag='li'></router-link>
       <router-link class="footer-link ticket animated" :class="{'rubberBand' : current}" @click.native="ant" to='/buy' tag='li'></router-link>
       <router-link class="footer-link cinema" to='/cinema' tag='li'></router-link>
       <router-link class="footer-link main" to='/mine' tag='li'></router-link>
     </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            current:false
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
        ant(){
           this.current = true;
           setTimeout(()=>{
              this.current = false;
           },1000)
        //  console.log(this.current)
        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.footer-main{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 104px;
    background: url('../assets/imgs/icons/footer-bar-bg.png') no-repeat center;
    background-size: cover;
    .footer-link{
        height: 70px; 
        width: 42px;
        list-style: none;
        background-position: center;
        background-size: 42px 42px;
        background-repeat: no-repeat;
        margin-top: 32px;
           &.home{
                background-image: url('../assets/imgs/icons/home.png');
            }
            &.router-link-active.home{
                background-image: url('../assets/imgs/icons/home-active.png');
            } 
            &.movie{
                background-image: url('../assets/imgs/icons/movie.png');
            }
            &.router-link-active.movie{
                background-image: url('../assets/imgs/icons/movie-active.png');
            } 
            &.ticket{
                // align-self: flex-start;
                background-image: url('../assets/imgs/icons/ticket-active.png');
                background-size: 72px 72px;
                width: 72px;
                height: 72px;
                margin-top: -20px;
                // animation-duration: .8s;
            }  
            &.cinema{
                background-image: url('../assets/imgs/icons/cinema.png');
            }
            &.router-link-active.cinema{
                background-image: url('../assets/imgs/icons/cinema-active.png');
            } 
            &.main{
                background-image: url('../assets/imgs/icons/main.png');
            }
            &.router-link-active.main{
                background-image: url('../assets/imgs/icons/main-active.png');
            } 
    }
}
</style>
