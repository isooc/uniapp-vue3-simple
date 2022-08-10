<template>
  <view>{{ myPage }}</view>
</template>

<script setup>
import { ref, defineComponent, watch } from "vue";
import "./index.scss";

defineComponent({
    name: "my"
});

let myPage = ref('myPage')
</script>