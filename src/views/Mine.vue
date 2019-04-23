<template>
  <div class="container">
    <div class="header">
      <van-icon class="item avatar" name="manager" size="2em" color="#ddd"/>
      <div class="item">电话: {{mobile}}</div>
    </div>
    <van-cell-group>
      <van-cell title="我的优惠券" @click="gotoPage('couponlist')" icon="coupon-o" is-link/>
      <van-cell title="我的租车订单" @click="gotoPage('orderlist')" icon="bill-o" is-link/>
      <van-cell v-if="authStatus" title="完善信息" @click="gotoPage('fillinfo')" icon="contact" is-link/>
    </van-cell-group>
  </div>
</template>
<script>
import {
  Toast, CellGroup, Cell, Icon,
} from 'vant';

export default {
  components: {
    [Toast.name]: Toast,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
  },
  data() {
    return {
      mobile: this.$store.state.user.mobile,
      authStatus: this.$store.state.user.authStatus === '0',
    };
  },
  methods: {
    gotoPage(flag) {
      this.$router.push({ name: flag });
    },
  },
  mounted() {
    this.$store.dispatch('setTabIndex', 1)
  },
};
</script>
<style lang="less" scoped>
.container {
  .header {
    height: 200px;
    background-color: #3984ff;
    display: flex;
    align-items: center;
    color: #fff;
    .item {
      margin: 0 20px;
      &.avatar {
        width: 80px;
        height: 80px;
        border: 2px solid #43986d;
        border-radius: 40px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        &::before{
          display: flex;

        }
      }
    }
    // img{
    //   width: 80px;
    //   height: 80px;
    //   border: 2px solid #43986d;
    //   border-radius: 40px;
    // }
  }
}
</style>
