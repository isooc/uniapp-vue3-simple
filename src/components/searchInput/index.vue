<template>
	<view class="search">
		<icon class="icon" type="search" size="16" color="#C7C7C7"></icon>
		<input
			class="input-content"
			id='searchInput'
			v-model.trim="inputVal"
			@input="changeVal"
			@focus="focus()"
			@keyup.enter="searchBtn" 
			@confirm="searchBtn"
			maxlength="30"
			:placeholder="placeholder"
			type="text"
		/>
		<icon class="icon" type="clear" v-if="inputVal" @click="clear" size="16" color="#C7C7C7"></icon>
	</view>
</template>

<script>
import { ref, defineComponent } from "vue";
import "./index.scss";
defineComponent({
    name: "searchInput"
});

export default {
    props: {
        placeholder: {
          default: '搜索',
          type: String
        }
    },
    setup(props, context) {
      let inputVal = ref('')

      const focus = () => {}

      // 改变父组件的绑定的值
      const changeVal = () => {
        context.emit('input', inputVal.value)
      }

      // 搜索事件
      const searchBtn = () => {
        if (inputVal) {
          context.emit('search', inputVal.value)
        }
      }

      // 清空input的值
      const clear = () => {
        inputVal.value = ''
      }

      return {
        inputVal,
        focus,
        changeVal,
        searchBtn,
        clear
      }

    }
}

</script>
