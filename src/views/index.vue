<template>
  <div>
    <Swipe :autoplay="3000" indicator-color="#808080" :height="580">
      <SwipeItem v-for="(image, index) in images" :key="index"></SwipeItem>
    </Swipe>

    <div class="content">
      <div class="card"></div>
    </div>

    <Popup v-model="showStartPopup" position="bottom">
      <DatetimePicker v-model="startTime"></DatetimePicker>
    </Popup>
    <Popup v-model="showEndPopup" position="bottom">
      <DatetimePicker v-model="endTime"></DatetimePicker>
    </Popup>
  </div>
</template>
<script>
import {
  Swipe,
  SwipeItem,
  Popup,
  DatetimePicker,
} from 'vant'

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker,
  },
  data() {
    return {
      images: [],
      showStartPopup: false,
      showEndPopup: false,
      startTime: '',
      endTime: '',
    }
  },
}
</script>
<style lang="less" scoped>
.content {
  position: absolute;
  top: 477px;
  left: 0;
  right: 0;
  padding: 0 22px;
  .card {
    background-color: #fff;
    border-radius: 10px;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;

  }
}
</style>
