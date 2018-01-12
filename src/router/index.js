import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/index/Home.vue'
import MovieDetail from '../components/movie/MovieDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/movie/:id', name: 'Detail', component: MovieDetail}
  ]
})
