<template>
    <view class="page">
        <text class="example-info">可以同时选择日期和时间的选择器</text>
        <view class="example-body">
            <uni-datetime-picker type="date" :value="single" start="2021-3-20" end="2021-6-20" @change="change" />
        </view>
        <view class="example-body">
            <uni-datetime-picker returnType="timestamp" @change="changeLog($event)" start="2021-3-20" end="2021-5-20" />
        </view>
        <view class="example-body">
            <uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="single" />
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="single">我是一个插槽，点击我</uni-datetime-picker>
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="single" :border="false" />
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="single" disabled />
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="range" type="daterange" start="2021-3-20" end="2021-5-20" rangeSeparator="至" />
        </view>
        <view class="example-body">
            <uni-datetime-picker v-model="datetimerange" type="datetimerange" start="2021-3-20 12:00:00" end="2021-6-20 20:00:00" rangeSeparator="至" />
        </view>
    </view>
</template>

<script setup>
import { ref, defineComponent, watch } from "vue";
import { onShow } from "@dcloudio/uni-app";
import "./index.scss";

defineComponent({
    name: "uniapp"
});

let single = ref("2021-04-3");
let datetimesingle = ref("2021-04-3");
let range = ref(["2021-03-8", "2021-4-20"]);
let datetimerange = ref(["2021-03-20 20:10:10", "2021-05-10 10:10:10"]);

watch(datetimesingle, (newValue, oldValue) => {
    console.log("单选:", datetimesingle);
});

watch(range, (newValue, oldValue) => {
    console.log("范围选:", range);
});

watch(datetimerange, (newValue, oldValue) => {
    console.log("范围选:", datetimerange);
});

onShow(() => {
    console.log("---- uni", uni);
    console.log("---- globalData", getApp().globalData.text);
    fetchData();
    // setTimeout(() => {
    //     datetimesingle.value = "2021-5-1";
    //     single.value = "2021-5-1";
    // }, 5000);
});
const fetchData = () => {
    uni.api.commonApi.fetchUserInfo({ params: "abcd" }).then(res => {
        console.log("fetchData", res);
    });
};

const change = e => {
    single = e;
    console.log("change事件:", e);
};
const changeLog = e => {
    console.log("change事件:", e);
};

const maskClick = e => {
    console.log("maskClick事件:", e);
};
</script>
