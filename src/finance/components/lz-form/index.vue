<template>
    <view class="page">
        <uni-card>
            <text>{{ text }}</text>
        </uni-card>
    </view>
</template>

<script>


// onShow(() => {
//     fetchData();
// });
import { ref, defineComponent } from "vue";
import { onShow } from "@dcloudio/uni-app";
defineComponent({
    name: "lzForm"
});

export default {
    props: {
        data: {
            type: Number
        }
    },
    setup(props, context) {
        
        const text = ref("这里是子组件的text");
        const fetchData = () => {
            console.log('这里是子组件的fetchData');
            context.emit('succeses', text)
        };

        return {
            text,
            fetchData
        }

    }
}

</script>
