import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 export default new Vuex.Store({
    state: {
        paymentList: [],
        categoryList: []
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
         }

     },
     getters: {
         getPaymentList: state => state.paymentList,
         getPaymentListFullPrice: state => {
            return state.paymentList.reduce((res, cur) => res + cur.value, 0)
        },
         getCategoryList: state => state.categoryList
     },
     actions: {
         fetchData ({ commit }) {
            return new Promise( resolve => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 1,
                            date: '28.03.2020',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            id: 2,
                            date: '24.03.2020',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            id: 3,
                            date: '24.03.2020',
                            category: 'Food',
                            value: 532,
                        },
                        {
                            id: 4,
                            date: '28.03.2020',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            id: 5,
                            date: '24.03.2020',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            id: 6,
                            date: '24.03.2020',
                            category: 'Food',
                            value: 532,
                        },
                        {
                            id: 7,
                            date: '28.03.2020',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            id: 8,
                            date: '24.03.2020',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            id: 9,
                            date: '24.03.2020',
                            category: 'Food',
                            value: 532,
                        },
                        {
                            id: 10,
                            date: '28.03.2020',
                            category: 'Education',
                            value: 1150,
                        },
                        {
                            id: 11,
                            date: '24.03.2020',
                            category: 'Education',
                            value: 2000,
                        },
                        {
                            id: 12,
                            date: '24.03.2020',
                            category: 'Food',
                            value: 532,
                        },
                        {
                            id: 13,
                            date: '28.03.2020',
                            category: 'Food',
                            value: 169,
                        },
                        {
                            id: 14,
                            date: '24.03.2020',
                            category: 'Transport',
                            value: 360,
                        },
                        {
                            id: 15,
                            date: '24.03.2020',
                            category: 'Sport',
                            value: 1800,
                        },
                    ])
                }, 500)
            }).then(res => {
                commit('setPaymentListData', res)
            })
        },
         fetchCategoryList ({ commit }) {
             return new Promise(resolve => {
                 setTimeout(() => {
                     resolve([
                         'Food',
                         'Transport',
                         'Education',
                         'Sport'
                     ])
                 }, 500)
             }).then(res => {
                 commit('setCategoryList', res)
             })
         }
     }
 })