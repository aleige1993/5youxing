
<template>
  <div class="confirm-order">
    <div class="detail-panl">
      <ul class="shop-details">
        <li>
          <img src="../assets/shop.png">
          <b>{{storeVo.corpName}}</b>
        </li>
        <li>
          <span>地址：{{storeVo.bizProvinceName}}{{storeVo.bizCityName}}{{storeVo.bizDistrictName}}{{storeVo.bizRoadAddr}}</span>
        </li>
        <li>
          <span>
            联系电话：
            <a :href="'tel:' + storeVo.telephone">{{storeVo.telephone}}</a>
            <!-- <a v-else @click="callPhone(storeVo.telephone)">{{storeVo.telephone}}</a> -->
          </span>
        </li>
      </ul>
      <em class="boxbor-left"></em>
      <em class="boxbor-right"></em>
    </div>
    <div class="tiem">
      预约时间：{{storeOrderVO.startTime | dateFormate('YYYY-MM-dd hh:00')}} 至 {{storeOrderVO.endTime | dateFormate('YYYY-MM-dd hh:00')}}
      <br>
      <span v-if="storeOrderVO.actType === '2'">
        出发地点：{{storeOrderVO.startPoint}}
        <br>
        目的地点：{{storeOrderVO.endPoint}}
        <br>
        出行人数：{{storeOrderVO.peopleNum}}人
        <br>
      </span>
    </div>
    <div class="user-info">
      <ul>
        <li>
          <p>
            <!--<img src="../assets/touxiang.png"/>-->
            姓名：{{storeOrderVO.memberName}}
          </p>
          <p>
            <!--<img src="../assets/phone.png" />-->
            手机号：{{storeOrderVO.memberMobile}}
          </p>
        </li>
      </ul>
    </div>
    <div class="car-info">
      <div class="car-one">
        <img :src="carVo.attach" alt>
        <div class="car-title">
          <p>{{carVo.carsName}}</p>
          <p>￥{{carVo.unitPrice}}/{{carVo.unit}}</p>
          <!--<p>MPV | {{carVo.carPower}}自动 | 乘坐{{carVo.carSeating}}人</p>-->
        </div>
      </div>
      <em class="boxbor-left"></em>
      <em class="boxbor-right"></em>
    </div>
    <ul class="order-info">
      <li>
        <p>
          <img src="../assets/coupon.png">支付方式
        </p>
        <span class="col999">微信支付</span>
      </li>
      <li v-if="storeOrderVO.actType === '2'" class="conactiv">
        <p>
          <img src="../assets/pay.png">活动优惠
        </p>
        <span>免费接送</span>
      </li>
      <li v-if="storeOrderVO.actType === '1'" class="conactiv">
        <p>
          <img src="../assets/pay.png">活动优惠
        </p>
        <span>租4免1</span>
      </li>
      <li v-if="storeOrderVO.actType === '0'" class="conactiv">
        <p>
          <img src="../assets/pay.png">优惠券
        </p>
        <span @click="selectCoupon" v-if="couponList && couponList.length">
          <span v-if="!formData.couponName" class="col999">请选择</span>
          <span v-else>{{formData.couponName}}</span>
          <img src="../assets/right.png">
        </span>
        <span v-else class="col999">暂无优惠券可用</span>
      </li>
      <li>
        <p>
          <img src="../assets/coupon.png">车辆租赁费
        </p>
        <span class="col999">￥ {{storeOrderVO.rentalPrice}}元</span>
      </li>
      <li>
        <p>
          <img src="../assets/coupon.png">保险费
        </p>
        <span class="col999">￥ {{storeOrderVO.bxPrice}}元</span>
      </li>
      <li class="conpue">
        <span class="col999">优惠￥{{storeOrderVO.couponAmount}}</span>
        <span>
          总价￥
          <a>{{storeOrderVO.totalPrice}}</a>
        </span>
      </li>
    </ul>

    <ul class="order-updeta">
      <li>
        实付：￥ {{storeOrderVO.totalPrice - storeOrderVO.couponAmount}}
        <span
          @click="send"
          class="next-button right"
        >发请求</span>
        <span @click="wxpay" class="next-button right">去支付</span>
      </li>
    </ul>
  </div>
</template>

<script>
// const wx = require('../utils/weixin-jsapi.js')

export default {
  name: 'carshopleaseOrderConfirm',
  data() {
    return {
      couponList: [],
      storeOrderVO: {
        startTime: '',
        endTime: '',
      },
      storeVo: {},
      carVo: {},
      formData: {
        orderCode: this.$route.query.orderNo,
        paymentType: '1',
        couponName: '',
        couponCode: '',
        couponOrderId: '',
        invoiceType: '1',
      },
      loading: false,
      wxParams: {
        appid: 'wx8ddfeecf1fd01033',
      },
    };
  },
  methods: {
    // callPhone(number) {
    //   this.$nativeAppUtils.callPhone(number);
    // },
    selectCoupon() {
      const that = this;
      const picker = new mui.PopPicker();
      picker.setData(this.$data.couponList);
      picker.show(async (items) => {
        that.$data.formData.couponCode = items[0].couponCode;
        that.$data.formData.couponName = items[0].couponName;
        if (that.$data.formData.couponCode) {
          that.$data.formData.couponOrderId = items[0].id / 1;
          that.$toast.loading({
            duration: 0,
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载中',
          });
          const res = await that.$postData('/store/orderDiscount', {
            ...this.$data.formData,
          });
          that.$toast.clear();
          that.$data.storeOrderVO.couponAmount = res;
        } else {
          that.$data.storeOrderVO.couponAmount = '0.00';
        }
      });
    },
    // async submit() {
    //   this.$data.loading = true;
    //   const res = await this.$postData('/store/submitOrder', this.$data.formData);
    //   this.$data.loading = false;
    //   if (res.success && res.success === 'true') {
    //     //          this.$router.push({
    //     //            name: 'carShopLeaseOrderSuccess',
    //     //            query: {
    //     //              orderNo: this.$data.formData.orderCode
    //     //            }
    //     //          });
    //     window.location.replace(`/#/carlease/order/success?orderNo=${this.$data.formData.orderCode}`);
    //   } else {
    //     this.$Tools.layerOpen(res.reMsg);
    //   }
    // },
    async initData() {
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const res = await this.$postData(
        `/store/getDetail?orderNo=${this.$data.formData.orderCode}`,
      );
      this.$toast.clear();
      if (typeof res === 'string' || !res) {
        if (res === '/logout') {
          this.$store.dispatch('outLogin');
          return false;
        }
        this.$toast(res || '请求错误');
        return false;
      }
      this.$data.couponList = res.couponList;
      if (this.$data.couponList && this.$data.couponList.length) {
        this.$data.couponList = [
          {
            couponName: '不使用优惠劵',
            couponCode: null,
          },
        ].concat(this.$data.couponList);
      }
      this.$data.couponList.map((item, index) => {
        item.value = index;
        item.text = item.couponName;
        return item;
      });
      this.$data.storeOrderVO = res.storeOrderVO;
      this.$data.storeVo = res.storeVo;
      this.$data.carVo = res.carVo;
      return false;
    },

    async wxpay() {
      try {
        // 这里是后端要你传的参数
        if (wx) {
          this.$toast.loading({
            duration: 0,
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
            message: '加载中',
          });
          // 这里如果后端要url 是#前面的部分不包括#号
          const res = await this.$getData('wx/js/sdk/init');
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: this.wxParams.appid, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature, // 必填，签名，见附录1
            jsApiList: ['chooseWXPay'],
          });
          const data = await this.$postData('wx/pay', {
            orderNo: this.formData.orderCode,
          });
          const args = data;
          wx.ready(() => {
            wx.chooseWXPay({
              timestamp: args.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: args.nonceStr, // 支付签名随机串，不长于 32 位
              package: `prepay_id=${args.repay_id}`, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: args.paySign, // 支付签名
              success(result) {
                // 这里写成功后的动作 我试过跳转路由好像不灵 或者是执行太快后端处理订单未变化呢 我改成了这个   window.location.href="你所要跳转的页面";
                this.$toast(result);
              },
              cancel() {
                this.$toast('已取消支付');
              },
              fail() {
                this.$toast('购买失败，请重新创建订单');
              },
            });
          });
        }
      } catch (e) {
        this.$toast(e);
      }
    },

    send() {
      $.get(
        `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
          this.wxParams.appid
        }&redirect_uri=https%3A%2F%2Fzucheapi.songchewang.com%2Fuser%2Fupdate%3Fmember&response_type=code&scope=snsapi_base&state=${
          this.formData.orderCode
        }#wechat_redirect`,
      );
    },
  },
  mounted() {
    document.body.style.backgroundColor = '#eeeeee';
    this.initData();
    $.get(
      `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        this.wxParams.appid
      }&redirect_uri=https%3A%2F%2Fzucheapi.songchewang.com%2Fuser%2Fupdate%3Fmember&response_type=code&scope=snsapi_base&state=${
        this.formData.orderCode
      }#wechat_redirect`,
    );
  },
};
</script>

<style lang="less" scoped>
.confirm-order {
  padding: 0.4rem 0.4rem 2.4rem;
}
.detail-panl {
  background-color: #fff;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  position: relative;
  em {
    position: absolute;
    top: 0.65rem;
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    background-color: #eee;
    border-radius: 100%;
  }
  em.boxbor-left {
    left: -0.25rem;
  }
  em.boxbor-right {
    right: -0.25rem;
  }
  ul {
    padding: 0.6rem 0.4rem;
  }
  ul:first-child {
    border-bottom: 1px dashed #e5e5e5;
    li {
      display: flex;
    }
    li:first-child {
      margin-bottom: 0.5rem;
      span:nth-child(2) {
        color: #999;
        font-size: 0.38rem;
      }
    }
  }
  .shop-details li {
    margin-bottom: 0.3rem;
    span {
      color: #333;
    }
  }
  .shop-details li:last-child {
    margin-bottom: 0;
    span {
      a {
        text-decoration: underline;
      }
    }
  }
  .shop-details li:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    img {
      width: 0.6rem;
    }
    b {
      color: #3785ff;
      font-size: 0.5rem;
      margin-left: 0.2rem;
    }
  }
}
.tiem {
  //text-align: center;
  background-color: #3785ff;
  color: #fff;
  font-size: 0.35rem;
  padding: 0.4rem;
  span {
    font-size: 0.35rem;
  }
}
.user-info {
  background-color: #fff;
}
.user-info ul li {
  padding: 0.5rem 0.4rem;
  display: flex;
  justify-content: space-between;
}
.user-info p,
.user-info img {
  vertical-align: top;
}
.user-info ul li p {
  line-height: 0.5rem;
}
.user-info ul li p img {
  height: 0.4rem;
  margin-right: 0.2rem;
}
.car-info {
  display: flex;
  background-color: #fff;
  border-bottom: 1px dashed #e5e5e5;
  border-top: 1px dashed #e5e5e5;
  position: relative;
  em {
    position: absolute;
    top: 1.2rem;
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    background-color: #eee;
    border-radius: 100%;
  }
  em.boxbor-left {
    left: -0.25rem;
  }
  em.boxbor-right {
    right: -0.25rem;
  }
  .car-one {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    img {
      width: 3rem;
      height: 1.8rem;
      border-radius: 0.1rem;
    }
    .car-title {
      font-size: 0.4rem;
      margin-left: 0.4rem;
      p {
        margin: 0.2rem 0;
      }
    }
  }
}
.select-time {
  display: flex;
  padding: 0.5rem;
  background-color: #fff;
  border-top: 1px dashed #e5e5e5;
  border-bottom: 1px dashed #e5e5e5;
  position: relative;
  .poc-left,
  .poc-right {
    position: absolute;
    z-index: 10;
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
    background-color: #eee;
    top: 0.9rem;
  }
  .poc-left {
    left: -0.3rem;
  }
  .poc-right {
    right: -0.3rem;
  }
}
.select-time div {
  display: inline-block;
  vertical-align: top;
}
.select-time .datatime {
  width: 5.4rem;
}
.select-time .datatime span {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.select-time .datatime span:first-child {
  color: #999999;
  font-size: 0.38rem;
}
.select-time .datatime span:nth-child(2) {
  color: #3984ff;
  font-size: 0.6rem;
  font-weight: 600;
  margin-top: 0.3rem;
}
.select-time .countime {
  width: 100%;
  height: 0.8rem;
  margin: 0 0.1rem;
  text-align: center;
  background: url("../assets/arrow.png") no-repeat;
  background-position: bottom;
  background-size: 60%;
  margin-top: 0.5rem;
  color: #999;
}

.shop-info {
  display: flex;
  background-color: #fff;
  padding: 0.5rem;
  div:first-child {
    margin-right: 0.3rem;
    padding-right: 0.3rem;
    border-right: 1px solid #e5e5e5;
  }
  .shop-img {
    display: flex;
    min-width: 1.7rem;
    color: #3984ff;
    font-weight: bold;
    img {
      width: 0.4rem !important;
      height: 0.4rem;
      margin-right: 0.1rem;
      margin-top: -0.05rem;
    }
  }
  div:last-child p {
    display: flex;
    align-items: center;
    img {
      width: 0.3rem;
      height: 0.4rem;
      margin-left: 0.2rem;
    }
  }
  div:last-child p:nth-child(2) {
    margin-top: 0.3rem;
    color: #999;
    font-size: 0.38rem;
  }
}
.col999 {
  color: #999;
}
.order-info {
  background-color: #fff;
  border-bottom-right-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  li:last-child {
    border: none;
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .right {
      float: right;
    }
    .next-button {
      padding: 0.1rem;
      color: #fff;
      background: #2193fc;
      border-radius: 0.1rem;
    }
    p img {
      width: 0.4rem;
      margin-right: 0.1rem;
    }
  }
  .conactiv span {
    display: flex;
    align-items: center;
  }

  .conactiv span img {
    width: 0.12rem;
    margin-left: 0.1rem;
  }
}
.conpue,
.conpue * {
  vertical-align: top;
}
.conpue {
  justify-content: flex-end !important;
  align-content: center;
}
.conpue span:first-child {
  margin-right: 0.2rem;
  font-size: 0.35rem;
}
.conpue span a {
  font-size: 0.6rem;
  font-weight: 600;
  color: #3984ff;
}
.order-updeta {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  padding: 0.4rem 0.5rem;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.38rem;
    .next-button {
      width: 3rem;
      padding: 0.3rem 0;
      text-align: center;
      background-color: #3785ff;
      color: #fff;
      border-radius: 1rem;
    }
  }
}
</style>
