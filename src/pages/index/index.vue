<template>
    <web-view :src="src" @onPostMessage="handlePostMessage" />
</template>

<script setup>
import { ref, defineComponent, watch } from "vue";
import "./index.scss";

defineComponent({
    name: "uniapp"
})

let src = ref('http://uat.eco.lingzhuyun.com:7080/chamber/#/chamber/chamberHome?uri=0a9b4fd3839444118a864007e2755447')

// webview向外部发送消息,APP接收并处理
const handlePostMessage = () => {
    console.log("接收到消息：");
}

</script>
