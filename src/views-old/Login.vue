<template>
  <div class="container flex-column">
    <Logo/>
    <div class="bottom-border row">
      <van-field v-model="mobile" placeholder="请输入手机号码" clearable @input="inputHandler"/>
    </div>
    <div class="bottom-border row" v-if="!isSms">
      <van-field
        v-model="password"
        type="password"
        placeholder="请输入密码"
        clearable
        @input="inputHandler"
      />
    </div>
    <div class="bottom-border row" v-if="isSms">
      <van-field v-model="sms" center placeholder="请输入短信验证码" clearable @input="inputHandler">
        <van-button slot="button" size="small" plain type="info" @click="sendCode">{{smsText}}</van-button>
      </van-field>
    </div>
    <van-button class="common-btn" type="info" size="large" @click="login">登 录</van-button>
    <div class="flex-space gray">
      <span @click="changeHandler">{{loginWay}}</span>
      <span @click="register">新用户注册</span>
    </div>
  </div>
</template>
<script>
import SparkMD5 from 'spark-md5';
import { Field, Button, Toast } from 'vant';
import { setInterval } from 'timers';
import Logo from '../components/Logo.vue';

export default {
  components: {
    Logo,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      smsText: '发送验证码',
      mobile: '',
      password: '',
      sms: '',
      isSms: false,
      from: this.$router.currentRoute.query.redirect || '',
      freez: false,
    };
  },
  computed: {
    loginWay() {
      return this.isSms ? '密码登录' : '验证码登录';
    },
  },
  methods: {
    register() {
      location.href = '/register.html';
      // this.$router.push('/register')
    },
    changeHandler() {
      // 清空切换的输入框值
      if (this.isSms) {
        this.sms = '';
      } else {
        this.password = '';
      }
      this.isSms = !this.isSms;
    },
    inputHandler() {},
    async login() {
      const param = {
        mobile: this.mobile.trim(),
      };
      let res = null;
      if (this.isSms) {
        if (!this.mobile.trim() || !this.sms.trim()) {
          this.$toast('手机号或验证码不能为空');
          return;
        }
        param.verifyCode = this.sms.trim();
        this.$toast.loading({
          duration: 0,
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: '加载中',
        });
        res = await this.$store.dispatch('loginBySms', param);
      } else {
        if (!this.mobile.trim() || !this.password.trim()) {
          this.$toast('手机号或密码不能为空');
          return;
        }
        param.password = SparkMD5.hash(this.password.trim());
        this.$toast.loading({
          duration: 0,
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: '加载中',
        });
        res = await this.$store.dispatch('loginByPwd', param);
      }
      console.log(res);
      this.$toast.clear()
      if (typeof res === 'string') {
        this.$toast(res)
        return
      }
      this.$router.replace(this.from ? this.from : '/main/car')
    },
    async sendCode() {
      if (this.freez) {
        return
      }

      const res = await this.$postData('user/sendSms', { mobile: this.mobile, busiType: 1 })
      if (typeof res === 'string') {
        this.$toast(res || '请求错误')
        return
      }

      this.freez = true

      let count = 60;
      const that = this;
      const interval = setInterval(() => {
        if (count > 0) {
          count -= 1;
          that.smsText = `${count}s后重发`
        } else {
          that.smsText = '获取验证码'
          clearInterval(interval);
          that.freez = false
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  background-color: #fff;
}
</style>
