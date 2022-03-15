import {createRouter, createWebHashHistory} from 'vue-router'; // 구조분해할당
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'

//페이지 구성을 관리함
export default createRouter({
    //hash, history
    // https://google.com/#/search
    history: createWebHashHistory(),
    // pages
    routes:[
        {
            path: '/',// https://google.com/
            component: Home
        },
        {
            path: '/movie/:id',// https://google.com/
            component: Movie
        },
        {
            path: '/about',
            component: About
        }

    ]
});