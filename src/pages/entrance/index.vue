<template>
  <view class="page"></view>
</template>

<script setup>
// import { ref, reactive, defineComponent, watch } from "vue";
import { defineComponent } from 'vue'
import { onShow, onReady } from '@dcloudio/uni-app'

defineComponent({
  name: 'entrance',
})

onReady(() => {
  uni.navigateTo({ url: '/pages/index/index' })
})
</script>
