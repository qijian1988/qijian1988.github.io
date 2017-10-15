import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  shareId:'shareid',
  url:'api/data'
}

const getters = {
  postData(){
    return JSON.stringify({
      shareId:state.shareId
    })
  }
}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
