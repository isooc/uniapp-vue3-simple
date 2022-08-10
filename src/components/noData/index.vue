<template>
  <view class="no-data">
    <slot name="image">			
			<image class="img" :src="imgUrl"></image>
		</slot>
		<view class="tip">
			<slot name="tips">{{tips}}</slot>
		</view>
  </view>
</template>

<script>
import { ref, defineComponent } from "vue";
import "./index.scss";
defineComponent({
    name: "noData"
});

export default {
    props: {
        imgUrl: {
            default: '/static/common/noData.png',
            type: String
        },
        tips: {
          default: '暂无数据',
          type: String
        }
    },
    setup(props, context) {
    }
}

</script>
