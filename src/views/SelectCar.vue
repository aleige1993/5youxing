<template>
  <div class="create-order">
    <ul class="selectcar-type">
      <li
        @click="selectActivity(list.type, list.saleSn, list.saleName)"
        v-for="(list, index) in activityList"
        :key="index"
        :class="{active:list.active}"
      >{{list.saleName}}</li>
    </ul>
    <div class="create-order-inview first">
      <h1 @click="selectType('shopInfo', 'shopList')">
        {{shopInfo.corpName || '--'}}
        <img src="../assets/bottom-arrow-solid2.png">
      </h1>
      <h2>地址：{{shopInfo.bizProvinceName || '--'}}{{shopInfo.bizCityName}}{{shopInfo.bizDistrictName}}{{shopInfo.bizRoadAddr}}</h2>
      <h2>
        联系电话：
        <a :href="'tel:' + shopInfo.telephone">{{shopInfo.telephone}}</a>
        <!-- <a @click="callPhone(shopInfo.telephone)" v-else>{{shopInfo.telephone}}</a> -->
      </h2>
    </div>
    <!-- <ul v-if="formData.actType === '2'" class="create-order-inview select-place">
      <li>
        <img src="../assets/address.png" alt>
        <span>出发地点</span>
        <input
          @click="selectPlace()"
          readonly
          placeholder="请选择"
          v-model="formData.startPoint"
          type="text"
        >
      </li>
      <li>
        <img src="../assets/address-yellow.png" alt>
        <span>目的地点</span>
        <input placeholder="请输入" v-model="formData.endPoint" type="text">
      </li>
      <li>
        <img src="../assets/person.png" alt>
        <span>出行人数</span>
        <input
          @click="selectPersonNum()"
          readonly
          placeholder="请选择"
          v-model="formData.peopleNum"
          type="text"
        >
      </li>
    </ul>-->
    <div class="create-order-inview second">
      <div class="select-time">
        <div @click="selectTime('startTime')" class="datatime" id="startTime">
          <p>{{formData.startTime | dateFormate('YYYY-MM-dd')}}</p>
          <p>
            <span>
              {{formData.startTime | dateFormate('hh:00')}}
              <img src="../assets/bottom-arrow.png">
            </span>
          </p>
        </div>
        <div class="countime">{{countTime}}</div>
        <div @click="selectTime('endTime')" class="datatime" id="endTime">
          <p>{{formData.endTime | dateFormate('YYYY-MM-dd')}}</p>
          <p>
            <span>
              {{formData.endTime | dateFormate('hh:00')}}
              <img src="../assets/bottom-arrow.png">
            </span>
          </p>
        </div>
      </div>
      <div
        v-if="formData.actType !== '2'"
        @click="selectType('carInfo', 'carList')"
        class="car-message"
      >
        <img :src="carInfo.attach" alt>
        <p>
          {{carInfo.carsName || '--'}} ￥{{carInfo.unitPrice || '--'}}/{{carInfo.unit || '--'}}
          <span class="right select">
            选择车型
            <img src="../assets/bottom-arrow-solid2.png" alt>
          </span>
        </p>
      </div>
      <div v-else class="car-message">
        <img :src="carInfo.attach" alt>
        <p>
          {{carInfo.carsName || '--'}}
          <span
            class="right"
          >￥{{carInfo.unitPrice || '--'}}/{{carInfo.unit || '--'}}</span>
        </p>
      </div>
    </div>
    <!--<p class="remarks">如有问题请拨打官方电话：400-045-0968</p>-->
    <div id="createOrder" @click="createOrder" class="next-button">
      <div>下一步</div>
    </div>
    <!-- <div v-else class="next-button">
      <div>loading...</div>
    </div> -->
  </div>
</template>

<script>
// import palceArr from './placeData';
import {
  Toast,
} from 'vant';
import { setTimeout } from 'timers';
import { timestampToTime, formatTimeCompatibleIos } from '../utils/tool';


export default {
  components: {
    [Toast.name]: Toast,
  },
  data() {
    return {
      //        activityType: this.$route.query.type || '0',
      //        activityCode: '',
      oneHourTimestamp: 60 * 60 * 1000,
      activityList: [],
      shopList: [],
      shopInfo: {
        bizCityName: '',
        bizDistrictName: '',
        bizProvinceName: '',
        bizRoadAddr: '',
        corpName: '',
        custMgrName: '',
        custMgrPhone: '',
        merchantNo: '',
        telephone: '',
      },
      carInfo: {
        attach: '',
        brandName: '',
        carTotal: 0,
        carsCode: '',
        carsName: '',
        id: 1,
        modelName: '',
        remack: '',
        unit: '',
        unitPrice: 0,
      },
      carList: [],
      carAllList: [],
      placeList: [], // palceArr.getData(),
      personList: [
        {
          text: '4',
          value: '4',
        },
        {
          text: '5',
          value: '5',
        },
        {
          text: '6',
          value: '6',
        },
      ],
      formData: {
        startTime: '',
        endTime: '',
        //          countTime: '',
        carCode: '',
        storeNo: '',
        memberNo: '',
        startPoint: '',
        endPoint: '',
        peopleNum: '',
        actType: '',
        actCode: '',
        actName: '',
      },
      loading: false,
    };
  },
  computed: {
    countTime() {
      if (this.$data.formData.actType === '2') {
        return '1小时';
      }
      let countDay = null;
      if (this.$data.formData.endTime && this.$data.formData.startTime) {
        const endTime = new Date(
          formatTimeCompatibleIos(this.$data.formData.endTime),
        ).getTime();
        const startTime = new Date(
          formatTimeCompatibleIos(this.$data.formData.startTime),
        ).getTime();
        countDay = (endTime - startTime) / this.$data.oneHourTimestamp / 24;
        countDay = countDay <= 0 ? 0 : countDay;
      } else {
        countDay = 0;
      }
      return `${countDay}天`;
    },
  },
  methods: {
    // callPhone(number) {
    //   this.$nativeAppUtils.callPhone(number);
    // },
    getStartTime() {
      const time = new Date().getTime();
      const startTime = time + 2 * 24 * this.$data.oneHourTimestamp;
      return timestampToTime(startTime);
      //        let time = new Date().getTime();
      //        let timeArr = timestampToTime(time).split(' ');
      //        timeArr[1] = timeArr[1].split(':').map((item, index) => {
      //          if (index === 0) {
      //            item = item / 1 + 1;
      //          }
      // //          if (index === 1) {
      // //            item = item / 1 <= 30 ? '00' : '30';
      // //          }
      //          if (index === 2) {
      //            item = '00';
      //          }
      //          return item.toString();
      //        }).join(':');
      //        return timeArr.join(' ');
    },
    initTime(time = this.getStartTime()) {
      this.$data.formData.startTime = time;
      const timestamp = new Date(formatTimeCompatibleIos(time)).getTime();
      if (this.$data.formData.actType === '0') {
        this.$data.formData.endTime = timestampToTime(
          timestamp + 24 * 2 * this.$data.oneHourTimestamp,
        );
      } else if (this.$data.formData.actType === '1') {
        this.$data.formData.endTime = timestampToTime(
          timestamp + 24 * 4 * this.$data.oneHourTimestamp,
        );
      } else if (this.$data.formData.actType === '2') {
        this.$data.formData.endTime = timestampToTime(
          timestamp + this.$data.oneHourTimestamp,
        );
      }
    },
    selectTime(type) {
      // if (this.$data.formData.actType === '2' && type === 'endTime') {
      //   this.$Tools.layerOpen('结束时间默认为开始时间后一个小时');
      // } else {
      //   //          let hourArr = [];
      //   //          if (type === 'startTime') {
      //   //            for (let index = 0; index <= 23; index++) {
      //   //              index = index < 10 ?  '0' + index : index;
      //   //              hourArr.push({text: index + ':00', value: index + ':00'});
      //   //              hourArr.push({text: index + ':30', value: index + ':30'});
      //   //            }
      //   //          } else {
      //   //            let startTime = this.$data.formData.startTime.substring(11, 16);
      //   //            hourArr.push({text: startTime, value: startTime});
      //   //          }
      //   //          let dtPicker = new mui.DtPicker({type: 'hour', customData: {h: hourArr}});
      const year = new Date().getFullYear();
      const value = type === 'startTime'
        ? this.$data.formData.startTime
        : this.$data.formData.endTime;
      const beginDateTime = type === 'startTime' ? timestampToTime(new Date()) : this.$data.formData.startTime
      const dtPickerType = 'hour' // type === 'startTime' ? 'datetime' : 'date';
      console.log('beginDateTime', beginDateTime)
      const dtPicker = new mui.DtPicker({
        type: dtPickerType,
        beginYear: year,
        endYear: year + 1,
        beginDateTime,
        labels: ['年', '月', '日', '时'],
        value: timestampToTime(value, 'd'),
      });
      const that = this;
      dtPicker.show((rs) => {
        console.log(rs)
        if (type === 'startTime') {
          that.initTime(formatTimeCompatibleIos(`${rs.value}:00:00`));
        } else {
          // console.log(_this.$data.formData.endTime.substring(10, 19));
          console.log(that.$data.formData.endTime)
          console.log(`${rs.value}:00:00`)
          that.$data.formData.endTime = formatTimeCompatibleIos(`${rs.value}:00:00`)
        }
        dtPicker.dispose();
      });
    },
    validateTime() {
      //        let currentTime = new Date().getTime();
      const startTime = new Date(
        formatTimeCompatibleIos(this.getStartTime().substring(0, 16)),
      ).getTime();
      const beginTime = new Date(
        formatTimeCompatibleIos(this.$data.formData.startTime.substring(0, 16)),
      ).getTime();
      const endTime = new Date(
        formatTimeCompatibleIos(this.$data.formData.endTime.substring(0, 16)),
      ).getTime();
      // if (beginTime < startTime) {
      //   this.$Tools.layerOpen('开始时间需在当前时间的一天后');
      //   return false;
      // }
      if (endTime <= beginTime) {
        this.$Tools.layerOpen('结束时间不能小于或等于开始时间');
        return false;
      }
      if (
        this.$data.formData.actType === '1'
        && endTime - beginTime < 24 * 4 * this.$data.oneHourTimestamp
      ) {
        this.$Tools.layerOpen('租车时间至少4天起');
        return false;
      }
      return true;
    },
    selectActivity(type, saleSn, saleName) {
      //        this.$Tools.layerOpen(this.$nativeAppUtils.getNums());
      // if (type === '1') {
      //   this.$data.carList = this.$data.carAllList.filter(
      //     item => item.carsName.indexOf('朗逸') > -1
      //       || item.carsName.indexOf('华颂7') > -1
      //       || item.carsName.indexOf('雪铁龙C3-XR') > -1,
      //   );
      // }
      // // else if (type === '2') {
      // //   // if (!this.$nativeAppUtils.getNums()) {
      // //   //   this.$nativeAppUtils.toLogin();
      // //   //   return false;
      // //   // }
      // //   const res = await this.$postData('/store/attend', {
      // //     actType: type,
      // //     memberNo: this.$store.user.memberNo,
      // //   });
      // //   if (res.body.ifAttend === 'no') {
      // //     this.$Tools.layerOpen('您没有免费接送的资格，去抽奖活动可获取资格');
      // //     return false;
      // //   }
      // //   this.$data.carList = this.$data.carAllList.filter(
      // //     item => item.carsName.indexOf('华颂7') > -1,
      // //   );
      // // }
      // else {
      //   this.$data.carList = this.$data.carAllList;
      // }
      // this.$data.carInfo = this.$data.carList[0];
      this.$data.carList = this.$data.carList.map((item, index) => {
        item.value = index;
        item.text = `${item.carsName}(￥${item.unitPrice}/${item.unit})`;
        return item;
      });
      // this.$data.activityList = this.$data.activityList.map((item) => {
      //   item.active = type === item.type;
      //   return item;
      // });
      this.$data.formData.actType = type;
      this.$data.formData.actCode = saleSn;
      this.$data.formData.actName = saleName;
      this.initTime();
      // this.$nativeAppUtils.setNavTitle(saleName);
    },
    selectType(info, list) {
      const that = this;
      const picker = new mui.PopPicker();
      picker.setData(that.$data[list]);
      picker.show((items) => {
        that[info] = that.$data[list][items[0].value];
        picker.dispose();
      });
    },
    popupComfirm(value, index) {
      console.log(index);
      this.$data[this.popupObj] = value;
    },
    // selectPlace() {
    //   const that = this;
    //   const picker = new mui.PopPicker({
    //     layer: 2,
    //   });
    //   const $picker = $('.mui-poppicker-body');
    //   $('.mui-picker:first-child', $picker).width('25%');
    //   $('.mui-picker:last-child', $picker).width('75%');
    //   picker.setData(this.$data.placeList);
    //   picker.show((items) => {
    //     that.$data.formData.startPoint = items[0].value + items[1].value;
    //     picker.dispose();
    //   });
    // },
    // selectPersonNum() {
    //   const that = this;
    //   const picker = new mui.PopPicker();
    //   picker.setData(this.$data.personList);
    //   picker.show((items) => {
    //     that.$data.formData.peopleNum = items[0].value / 1;
    //     picker.dispose();
    //   });
    // },
    async createOrder() {
      const { memberNo } = this.$store.state.user;
      if (!memberNo) {
        // this.$nativeAppUtils.toLogin();
        this.$router.push('/login')
        return false;
      }
      if (this.$data.formData.actType === '2') {
        if (
          this.$data.formData.startPoint === ''
          || this.$data.formData.endPoint === ''
        ) {
          this.$toast('出发地或目的地不能为空');
          return false;
        }
        if (this.$data.formData.peopleNum === '') {
          this.$toast('请选择出行人数');
          return false;
        }
      }
      if (!this.validateTime()) {
        return false;
      }
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      this.$data.formData.memberNo = memberNo;
      this.$data.formData.storeNo = this.shopInfo.merchantNo;
      this.$data.formData.carCode = this.carInfo.carsCode;
      const res = await this.$postData(
        '/store/createOrder',
        {
          ...this.formData,
          startTime: this.formData.startTime.replace(/\//g, '-'),
          endTime: this.formData.endTime.replace(/\//g, '-'),
        },
      );
      this.$toast.clear()
      if (typeof res === 'string' || !res) {
        if (res === '/logout') {
          this.$store.dispatch('outLogin')
          return false
        }
        this.$toast(res || '请求错误')
        return false
      }

      this.$router.push({
        name: 'createOrder',
        query: {
          orderNo: res.orderNo,
        },
      })


      return false;
      // if (res.success && res.success === 'true') {

      // } else {
      //   this.$Tools.layerOpen(res.reMsg);
      //   if (res.reCode === 'MERCHANT2' || res.reCode === '2') {
      //     // this.$nativeAppUtils.toIdentityAuth();
      //   }
      //   if (this.$data.formData.actType !== '2') {
      //     if (res.reCode === 'MERCHANT3' || res.reCode === '3') {
      //       // this.$nativeAppUtils.toDriveAuth();
      //     }
      //   }
      // }
    },
    async initData() {
      const actType = this.$route.query.type || '0';
      const actCode = '';
      const actName = '';
      // const actRes = await this.$postData('/activity/travel/list/Activity', {});
      // if (actRes.success && actRes.success === 'true') {
      //   if (actRes.body && actRes.body.length) {
      //     this.$data.activityList = [{
      //       type: '0',
      //       saleName: '预约租车',
      //       saleSn: '',
      //       active: true,
      //     }].concat(actRes.body);
      //   }
      //   this.$data.activityList.map((item) => {
      //     if (item.type === actType) {
      //       actCode = item.saleSn;
      //       actName = item.saleName;
      //     }
      //   });
      // }
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const shopRes = await this.$postData('store/storeList');
      console.log(shopRes);
      // if (shopRes.success && shopRes.success === 'true') {
      this.$data.shopList = shopRes.map((item, index) => {
        item.value = index;
        item.text = item.corpName;
        return item;
      });
      const [shopInfo] = this.$data.shopList
      this.$data.shopInfo = shopInfo;
      // }
      this.$toast.clear()
      if (typeof shopRes === 'string' || !shopRes) {
        this.$toast(shopRes || '请求错误')
        return
      }
      this.shopList = shopRes.map((item, index) => {
        console.log(item);
        item.value = index;
        item.text = item.corpName;
        return item;
      });

      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const carRes = await this.$postData('/store/car/carSeriesList', {
        storeNo: this.shopList[0].merchantNo,
      });

      this.$toast.clear()
      if (typeof carRes === 'string' || !carRes) {
        this.$toast(carRes || '请求错误')
        return
      }
      // if (carRes.success && carRes.success === 'true') {
      //   this.$data.carAllList = carRes.body.resultList;
      //   //          this.$data.carInfo = this.$data.carList[0];
      // }
      this.$data.carAllList = carRes;
      this.$data.carList = carRes
      const [carInfo] = this.$data.carList
      this.$data.carInfo = carInfo
      this.selectActivity(actType, actCode, actName);
    },
  },

  mounted() {
    document.body.style.backgroundColor = '#eeeeee';
    this.initData();
    //      this.initTime();
  },
  beforeDestroy() {
    // do something before destroying vue instance
    document.body.style.backgroundColor = '#fff';
  },
  watch: {
    shopInfo: (val) => {
      console.log(val)
    },
  },
};
</script>

<style lang="less" scoped>
.create-order {
  margin: 0.4rem 0.4rem 2.4rem;
  padding-bottom: 30px;
  background-color: #fff;
  .van-picker__columns{
    display: block;
  }
}
.create-order-inview {
  padding: 0.8rem;
  border-radius: 0.1rem;
  background: #fff;
}
.create-order-inview.first {
  min-height: 3rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #eeeeee;
}
.create-order-inview.second {
  padding-top: 0.6rem;
}
.create-order-inview h1,
.create-order-inview h2 {
  font-weight: normal;
}
.create-order-inview h1,
.create-order-inview h1 img {
  vertical-align: middle;
}
.create-order-inview h1 {
  margin-bottom: 0.4rem;
  padding-left: 0.6rem;
  line-height: 0.5rem;
  font-size: 0.48rem;
  color: #3984ff;
  background: url("../assets/shop.png") left top no-repeat;
  background-size: 0.5rem;
}
.create-order-inview h1 img {
  width: 0.24rem;
  margin-left: 0.1rem;
}
.create-order-inview h2 {
  margin-top: 0.2rem;
  font-size: 0.4rem;
  color: gray;
}
.create-order-inview h2 a {
  text-decoration: underline;
}

.selectcar-type,
.selectcar-type li {
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.selectcar-type {
  display: flex;
  background: #f4f4f4;
  li {
    width: 100%;
    padding: 0.4rem 0;
    text-align: center;
    background: #f4f4f4;
    &.active {
      background: #fff;
    }
  }
}

.select-place {
  white-space: nowrap;
  padding-top: 0;
  padding-bottom: 0;
  li {
    display: flex;
    align-items: center;
    padding-top: 0.4rem;
    line-height: 1rem;
    img {
      width: 0.5rem;
      margin-right: 0.1rem;
    }
    span {
      display: inline-block;
      width: 6em;
    }
    input {
      width: 100%;
      height: 1rem;
      font-size: 0.4rem;
      text-indent: 0.4rem;
      border: 1px solid #eeeeee;
      border-radius: 1rem;
    }
  }
}

.select-time {
  position: relative;
  height: 1.6rem;
}
.select-time .datatime {
  position: absolute;
  top: 0;
  color: gray;
}
.select-time #startTime {
  left: 0;
}
.select-time #endTime {
  right: 0;
}
.select-time .datatime span,
.select-time .datatime span img {
  vertical-align: middle;
}
.select-time .datatime span {
  display: inline-block;
  width: 100%;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.6rem;
  color: #3984ff;
}
.select-time .datatime span img {
  width: 0.3rem;
}
.select-time .countime {
  position: relative;
  margin: 0 2.8rem;
  padding: 0.4rem 0 0.1rem;
  text-align: center;
  color: gray;
  border-bottom: 2px solid #3984ff;
}
.select-time .countime:after {
  content: "";
  position: absolute;
  right: -4px;
  bottom: -6px;
  width: 10px;
  height: 11px;
  background: url("../assets/right-arrow-solid.png") no-repeat;
  background-size: cover;
}
.car-message {
  margin-top: 0.3rem;
}
.car-message img {
  width: 100%;
  border-radius: 0.1rem;
}
.car-message p {
  margin-top: 0.2rem;
}
.car-message .right {
  float: right;
}
.car-message .right.select,
.car-message .right.select img {
  vertical-align: middle;
}
.car-message .right.select {
  white-space: nowrap;
  padding: 1px 0.2rem;
  color: #3984ff;
  border: 1px solid #3984ff;
  border-radius: 0.4rem;
}
.car-message .right.select img {
  width: 0.24rem;
  margin-left: 1px;
}

.remarks {
  margin-top: 0.4rem;
  text-align: center;
  color: gray;
}

.next-button {
  // position: fixed;
  // width: 100%;
  // left: 0;
  // bottom: 0;
  // z-index: 9;
  background: #fff;
  div {
    height: 1.2rem;
    margin: 0.4rem;
    line-height: 1.2rem;
    text-align: center;
    color: #fff;
    background: #2193fc;
    border-radius: 1.2rem;
  }
}
</style>
