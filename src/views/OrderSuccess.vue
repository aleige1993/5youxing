
<template>
  <div id="order-success">
    <div class="success">
      <div class="detail-panl">
         <p>
           <img src="../assets/success.png"/>
           <b>下单成功</b>
         </p>
        <p>
          您预约的租车订单已生成, 请尽快完成支付!
        </p>
      </div>

      <div class="but-panl">
        <!-- <router-link :to="{path:'/carlease/order/detail?orderNo=' + this.$route.query.orderNo}" class="active">订单详情</router-link> -->
        <!-- <router-link :to="{path:'/carlease/order/selectcar'}">去支付</router-link> -->
        <van-button class="common-btn" type="info" size="large" @click="wxpay">去支付</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Button } from 'vant'

export default {
  components: {
    [Toast.name]: Toast,
    [Button.name]: Button,
  },
  data() {
    return {
      orderNo: this.$route.query.orderNo,
    }
  },
  methods: {
    async wxpay() {
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const args = await this.$postData('wx/pay', {
        orderNo: this.orderNo,
      });
      this.$toast.clear()

      const that = this

      if (WeixinJSBridge) {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            appId: args.appId,
            timeStamp: args.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: args.nonceStr, // 支付签名随机串，不长于 32 位
            package: `${args.repay_id}`, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: args.paySign, // 支付签名
          },
          (wxRes) => {
            if (wxRes.err_msg === 'get_brand_wcpay_request:ok') {
              // 使用以上方式判断前端返回,微信团队郑重提示：
              // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              that.$router.replace('/successpay')
            }
          },
        );
      }
    },
  },
  mounted() {
    document.body.style.backgroundColor = '#eeeeee';
  },
  beforeDestroy() {
    document.body.style.backgroundColor = '#fff';
  },
};
</script>
<style lang="less" scoped="">
  .success{
    padding: 0.4rem;
  }
  .detail-panl{
    background-color: #fff;
    border-radius:0.2rem;
    padding:1rem 0.6rem;
    p:first-child{
       text-align: center;
      img{
        width: 2rem;
      }
      b{
        display: block;
        color: #3785ff;
        font-size:0.5rem;
        margin-top:0.3rem;
        margin-bottom: 1rem;
      }
    }
    p:nth-child(2){
      color: #999;
      /*font-size: 0.3rem;*/
      line-height:0.6rem;
    }
  }
  .but-panl{
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    a{
      display: inline-block;
      padding: .3rem 0;
      width: 45%;
      text-align: center;
      border-radius:1rem;
      background-color: #fff;
      color: #3785ff;
    }
    a.active{
      background-color: #3785ff !important;
      color: #fff !important;
    }
  }

</style>
