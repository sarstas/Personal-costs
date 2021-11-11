import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 export default new Vuex.Store({
    state: {
        paymentList: [],
        categoryList: [],
        loading: true
    },
     mutations: {
        setPaymentListData (state, payload) {
            state.paymentList = payload
        },
        addDataToPaymentList (state, payload) {
            state.paymentList.push(payload)
        },
        setCategoryList (state, payload) {
            state.categoryList.push(...payload)
        },
         deleteElementFromPaymentList(state, payload) {
             const paymentList = [...state.paymentList]
             const i = paymentList.map(item => item.id).indexOf(payload)
             paymentList.splice(i, 1)
             state.paymentList = [...paymentList]
         },
         setEditItem (state, payload) {
             const paymentList = [...state.paymentList]
             const i = paymentList.map(item => item.id).indexOf(payload.id)
             paymentList.splice(i, 1, payload)
             state.paymentList = [...paymentList]

         },
         resetDataState (state) {
             state.paymentList = []
             state.categoryList = []
         },
         setLoading (state) {
            state.loading = !state.loading
         }

     },
     getters: {
         getPaymentList: state => state.paymentList,
         getPaymentListFullPrice: state => {
            return state.paymentList.reduce((res, cur) => res + cur.value, 0)
        },
         getCategoryList: state => state.categoryList,
         getLoading: state => state.loading,
         getDateForPie: state =>
             state.categoryList.map(c => {
                 return state.paymentList.reduce((total, r) => {
                     if (r.category === c) {
                         total += Number(r.value)
                     }
                     return total
                 }, 0)
             }),
     },
     actions: {
         async fetchData ({ commit }) {
            await fetch("http://localhost:3000/paymentList")
                .then((res) => res.json())
                .then((res) => {
                    commit('setPaymentListData', res );
                    commit('setLoading');
                })
        },
         async fetchCategoryList ({ commit }) {
             await fetch('http://localhost:3000/categories')
                 .then((res) => res.json())
                 .then((res) => {
                     commit('setCategoryList', res)
                 })
         }
     }
 })