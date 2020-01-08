<template>
  <div class="top">
    <img :src="arrow_l" alt class="arrow_l" @click="back" />
    <span>{{title}}</span>
    <div></div>
  </div>
</template>

<script>
import arrow_l from "@/assets/imgs/icons/arr-left.png";

export default {
  props: {
    title: String
  },
  data() {
    return {
      arrow_l
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.top {
  box-sizing: border-box;
  height: 3%;
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & img {
    display: block;
    width: 16px;
    height: 16px;
  }
  & span {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 22px;
  }
  & div {
    width: 16px;
    height: 16px;
  }
}
</style>
