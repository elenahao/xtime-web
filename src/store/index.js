import Vue from 'vue'
import Vuex from 'vuex'
import commom from './modules/commom'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        commom,
        user
    }
})