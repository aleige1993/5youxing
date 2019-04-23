<template>
  <div class="container flex-column gray">
    <div class="gray">
      <div class="item idcardFrontPic">
        <img v-if="idcardFrontPic" :src="idcardFrontPic" alt="身份证正面照片">
        <van-uploader
          name="idcardFrontPic"
          :after-read="onRead"
          accept="image/*"
          :max-size="maxSize"
        >
          <div class="content">
            <img src="../assets/ic_shot.png" alt>
            <span>身份证正面照片</span>
          </div>
        </van-uploader>
      </div>
      <div class="item idcardBackPic">
        <img v-if="idcardBackPic" :src="idcardBackPic" alt="身份证反面照片">
        <van-uploader
          name="idcardBackPic"
          :after-read="onRead"
          accept="image/*"
          :max-size="maxSize"
        >
          <div class="content">
            <img src="../assets/ic_shot.png" alt>
            <span>身份证反面照片</span>
          </div>
        </van-uploader>
      </div>
      <div class="item handerIdcardPic">
        <img v-if="handerIdcardPic" class="handerIdcardPic" :src="handerIdcardPic" alt="本人手持身份证照片">
        <van-uploader
          name="handerIdcardPic"
          :after-read="onRead"
          accept="image/*"
          :max-size="maxSize"
        >
          <div class="content">
            <img src="../assets/ic_shot.png" alt>
            <span>本人手持身份证照片</span>
          </div>
        </van-uploader>
      </div>
      <div class="item driverFrontPic">
        <img v-if="driverFrontPic" :src="driverFrontPic" alt="驾驶证左边示例">
        <van-uploader
          name="driverFrontPic"
          :after-read="onRead"
          accept="image/*"
          :max-size="maxSize"
        >
          <div class="content">
            <img src="../assets/ic_shot.png" alt>
            <span>驾驶证左边示例</span>
          </div>
        </van-uploader>
      </div>
      <div class="item driverBackPic">
        <img v-if="driverBackPic" :src="driverBackPic" alt="驾驶证右边示例">
        <van-uploader
          name="driverBackPic"
          :after-read="onRead"
          accept="image/*"
          :max-size="maxSize"
        >
          <div class="content">
            <img src="../assets/ic_shot.png" alt>
            <span>驾驶证右边示例</span>
          </div>
        </van-uploader>
      </div>
      <div>
        <van-cell-group>
          <van-field
            v-model="userName"
            clearable
            label="姓名"
            placeholder="请输入姓名"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="certNo" type="text" label="身份证号码" placeholder="请输入身份证号码" clearable />
          <van-button class="common-btn" type="info" size="large" @click="submitInfo">完善身份信息</van-button>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Uploader, Toast, Field, CellGroup, Button,
} from 'vant';

export default {
  components: {
    [Uploader.name]: Uploader,
    [Toast.name]: Toast,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
  },
  data() {
    return {
      maxSize: 50 * 1000 * 1000,
      from: this.$router.currentRoute.query.redirect || '',
      userName: '',
      certNo: '',
      idcardFrontPic: '', // 身份证正面
      idcardBackPic: '', // 身份证反面
      handerIdcardPic: '', // 手持身份证
      driverFrontPic: '', // 驾驶证左
      driverBackPic: '', // 驾驶证右
    };
  },
  methods: {
    onRead(file, detail) {
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const formData = new FormData();
      formData.append('file', file.file);
      this.$axios('common/upload', formData, {
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.$data[detail.name] = res.url
      }).finally(() => { this.$toast.clear() });
    },
    async submitInfo() {
      if (!this.idcardFrontPic) {
        this.$toast('请上传身份证正面')
        return
      }
      if (!this.idcardBackPic) {
        this.$toast('请上传身份证反面')
        return
      }
      if (!this.handerIdcardPic) {
        this.$toast('请上手持身份证')
        return
      }
      if (!this.driverFrontPic) {
        this.$toast('请上传驾驶证左面')
        return
      }
      if (!this.driverBackPic) {
        this.$toast('请上传驾驶证右面')
        return
      }
      if (!this.userName) {
        this.$toast('请输入姓名')
        return
      }
      if (!this.certNo) {
        this.$toast('请输入身份证号码')
        return
      }
      this.$toast.loading({
        duration: 0,
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '加载中',
      });
      const res = await this.$postData('user/upload/auth/data', {
        memberNo: this.$store.state.user.memberNo,
        userName: this.userName,
        certNo: this.certNo,
        idcardFrontPic: this.idcardFrontPic, // 身份证正面
        idcardBackPic: this.idcardBackPic, // 身份证反面
        handerIdcardPic: this.handerIdcardPic, // 手持身份证
        driverFrontPic: this.driverFrontPic, // 驾驶证左
        driverBackPic: this.driverBackPic, // 驾驶证右
      })
      this.$toast.clear()
      if (typeof res === 'string') {
        if (res === '/logout') {
          this.$store.dispatch('outLogin')
          return
        }
        this.$toast(res || '请求失败')
        return
      }
      this.$store.dispatch('setUserState')
      this.$router.push(this.from ? this.from : '/main/mine')
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  .item {
    width: 240px;
    height: 152px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
    &.idcardFrontPic {
      background: url("../assets/id_1.png");
      background-size: cover;
    }
    &.idcardBackPic {
      background: url("../assets/id_2.png");
      background-size: cover;
    }
    &.handerIdcardPic {
      height: 176px;
      background: url("../assets/id_3.png");
      background-size: cover;
    }
    &.driverFrontPic {
      background: url("../assets/js_1.png");
      background-size: cover;
    }
    &.driverBackPic {
      background: url("../assets/js_2.png");
      background-size: cover;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    >img{
      position: absolute;
      left: 0;
      top: 0;
      width: 240px;
      height: 152px;
      z-index: 2;
    }
    >img.handerIdcardPic{
      height: 176px;
    }
  }
}
</style>
