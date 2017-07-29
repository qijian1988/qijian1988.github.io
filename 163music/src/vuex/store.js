import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ERROK = 0
const state = {
  data:'',
  url:'/api/data',
  dataIsOk:false
}

const getters = {}

const mutations = {}

const actions = {
  getData({state}){
    Vue.http.get(state.url).then(res=>{
      // console.log(res.body)
      if(res.body.errno != ERROK)return;
      state.data = res.body.data;
      state.dataIsOk = true
    })
  }
}

export default new Vuex.Store({
  state, getters, mutations, actions
})
