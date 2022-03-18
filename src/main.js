import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; // /index.js 자동생략
import store from './store';
import loadImage from './plugins/loadImage'

createApp(App)
    .use(router) //플러그인 연동 use
    .use(store) //플러그인 연동 use
    .use(loadImage) //플러그인 연동 use
    .mount('#app');