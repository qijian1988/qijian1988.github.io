import Vue from 'vue'
import vueRouter from 'vue-router'
import find from '../components/find/find'
import myMusic from '../components/myMusic/myMusic.vue'
import friends from '../components/friends/friends.vue'
import account from '../components/account/account.vue'
import personalAdvice from '../components/find/personalAdvice.vue'
import songsList from '../components/find/songsList.vue'
import radio from '../components/find/radio.vue'
import rankingList from '../components/find/rankingList.vue'

Vue.use(vueRouter)

const routes = [
  {path: '/', redirect: '/find'},
  {
    path: '/find',
    component: find,
    children:[
      {path:'/',redirect:'/personalAdvice'},
      {path:'/personalAdvice',component:personalAdvice},
      {path:'/songsList',component:songsList},
      {path:'/radio',component:radio},
      {path:'/rankingList',component:rankingList},
    ]
  },
  {path: '/myMusic', component: myMusic},
  {path: '/friends', component: friends},
  {path: '/account', component: account}
];

export default new vueRouter({
  routes,
  linkActiveClass: 'active'
})
