<template>
  <div>
    <template>
      <v-container>
        <v-row>
          <v-col sm="12" md="6" >
            <h1 class="text-h5 text-sm-h3 py-8">My personal costs</h1>
            <payment-display :items="getPaymentList" :categoryList="getCategoryList" />
          </v-col>

          <v-col sm="12" md="6" class="d-flex align-center">
            <ChartDoughnut />
          </v-col>
        </v-row>
      </v-container>
    </template>

  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import PaymentDisplay from "@/components/PaymentsDisplay"
import ChartDoughnut from "@/components/ChartDoughnut"

export default {
  name: "Dashboard",
  components: { PaymentDisplay, ChartDoughnut },
  data() {
    return {
      cur: 1,
      n: 10,
      dialog: false,
      activePicker: null,
      date: '',
      menu: false,
      category: '',
      amount: ''
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentList',
      'setPaymentListData'
    ]),
    addPayment() {
      console.log('AddPayment')
    },
    changePage (p) {
      this.cur = p
    },
    save (date) {
      this.$refs.menu.save(date)
    },
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
      'getPaymentListFullPrice',
      'getCategoryList'
    ]),
  }
}
</script>

<style lang="sass" scoped>
.payment
.btn
  color: aliceblue
  background-color: #09a954
  padding: 5px 10px
  margin: 5px
  border: none

  display: inline

.links
  display: flex

  &__item
    text-decoration: none
    color: black
    display: block
    margin: 10px 0
    cursor: pointer
    margin-right: 50px
    font-weight: bold
    color: #09a954
    &:hover
      color: #008b8b

</style>