<template>
	<view class="to-top"  @click="goTop()"></view>
</template>

<script>
import { ref, defineComponent } from "vue";
import "./index.scss";
defineComponent({
    name: "toTop"
});

export default {
    setup(props, context) {
      const goTop = () => {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 500
        })
      }

      return {
        goTop
      }

    }
}

</script>
