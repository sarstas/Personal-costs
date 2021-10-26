<template>
  <div class="dashboard-page main">
    <div>
      <PaymentsDisplay :items="curentElements" />
    </div>
    <div>
      <PieChart />
    </div>
  </div>


</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay";
import { mapMutations, mapGetters } from 'vuex'
import PieChart from "@/components/PieChart";

export default {
  name: "Dashboard",
  components: { PieChart, PaymentsDisplay },
  data() {
    return {
      cur: 1,
      n: 5,
    }
  },
  computed: {
    ...mapGetters([
      'getPaymentList',
      'getPaymentListFullPrice',
      'getCategoryList'
    ]),
    curentElements() {
      const { n, cur } = this
      return this.getPaymentList.slice(n * (cur - 1), n * (cur - 1) + n)
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentList',
      'setPaymentListData'
    ]),
    addPayment() {
      this.$modal.show({
        title: "Add Payment form",
        content: "AddPaymentForm",
        action: "Add"
      })
    },
    changePage (p) {
      this.cur = p
    },
  },
  created () {
    if (this.$route.params.page){
      this.cur = +this.$route.params.page
    }

    if (this.$route.params.action === 'add') {
      this.$modal.show({title: "Add Payment form", content: "AddPaymentForm" })

    }
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