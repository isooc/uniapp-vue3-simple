import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import api from '@/api/index'
import * as utils from '@/utils/utils'
import { reToFixed } from '@/utils/reTofixed'

reToFixed()
uni.api = api
uni.utils = utils

export function createApp () {

	const app = createSSRApp(App);
	return {
		app,
	};
}
