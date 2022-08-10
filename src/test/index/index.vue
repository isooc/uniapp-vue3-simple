<template>
    <!-- 父子组件测试 -->
    <view class="page">
        <uni-card>
            <text>{{ text }}</text>
            <lzForm ref='form' :data="111" @succeses="handleSuccess" />
            <button @click="handleClick">点击调用子组件方法</button>
        </uni-card>
    </view>
    <!-- 搜索框组件 -->
    <view class="search-content">
        <searchInput placeholder="请输入姓名或手机号" @search="search"></searchInput>
    </view>
</template>

<script setup>
import { ref, reactive, defineComponent, watch } from "vue";
import { onShow } from "@dcloudio/uni-app";
import lzForm from "../components/lz-form/index"
import searchInput from '@/components/searchInput/index'

defineComponent({
    name: "test"
});

let text = ref("这里是父组件的text");

const fetchData = () => {
    // uni.api.commonApi.fetchUserInfo({ params: "abcd" }).then(res => {
    //     console.log("fetchData", res);
    //     text.value = "11";
    //     console.log("text", text);
    // });
    console.log('这里是父组件的fetchData方法')
};

onShow(() => {
    fetchData();
});

const form = ref()
const handleClick = () => {
    console.log('父组件click');
    form.value.fetchData()
    form.value.text = '222'
}

const handleSuccess = (data) => {
    console.log('子组件向父组件传递的值', data.value);
   
}

const search = (val) => {
    console.log('val', val);
}

</script>

<style scoped lang="scss">
</style>

