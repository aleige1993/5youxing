<template>
  <div class="container">
    <router-view></router-view>
    <div class="bottom">
      <van-tabbar v-model="active" fixed @change="barChange">
        <van-tabbar-item icon="shop" to="/main/car">租车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/main/mine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      active: this.$store.state.tabIndex,
    };
  },
  methods: {
    barChange(index) {
      this.active = index
      this.$store.dispatch('setTabIndex', index)
    },
  },
  // TODO: url改变 没有映射到 tabbar
  // watch: {
  //   $router: (to, from) => {
  //     console.log('11111111111', from)
  //     if (from.path.indexOf('car') > -1) {
  //       this.$store.dispatch('setTabIndex', 0)
  //     } else {
  //       this.$store.dispatch('setTabIndex', 1)
  //     }
  //   },
  // },
};
</script>
<style lang="less" scoped>
.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
