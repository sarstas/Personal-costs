<template>
  <div>
    <template>
      <v-container>
        <h1 class="text-h5 text-sm-h3 py-8">My personal costs</h1>
        <v-row>
          <v-col sm="12" md="6" class="">
            <v-dialog width="600">
              <template v-slot:activator="{ on }">
                <v-btn color="teal"
                       dark
                       class="mb-8 text-uppercase"
                       v-on="on"
                       @click="dialog=!dialog"
                >
                  Add new costs <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card class="text-center pa-8">
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Cost date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="date"
                      :active-picker.sync="activePicker"
                      :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                      min="1950-01-01"
                      @change="save"
                  ></v-date-picker>
                </v-menu>
                <v-select v-model="category" label="Category" :items="getCategoryList"></v-select>
                <v-text-field v-model.number="amount" label="Value" type="number"></v-text-field>
                <v-btn color="teal" dark @click="dialog = !dialog" class="mt-8 text-uppercase">Add <v-icon>mdi-plus</v-icon></v-btn>
              </v-card>
            </v-dialog>

            <PaymentDisplay class="mb-8" :items="curentElements"/>
            <Pagination
                :cur="this.cur"
                :n="this.n"
                :length="getPaymentList.length"
                @paginate="changePage"
            />
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
import PaymentDisplay from "@/components/PaymentDisplay"
import Pagination from "@/components/UI/Pagination"
import ChartDoughnut from "@/components/ChartDoughnut"



export default {
  name: "Dashboard",
  components: { PaymentDisplay, Pagination, ChartDoughnut },
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
    ...mapGetters([               //если мы вызвали геттеры таким способом через проксирование, то обращаться к ни
      'getPaymentList',           //можно уже как будто они в этом файле как к обычному компьтед
      'getPaymentListFullPrice',  //например мы вызвали ее в верстке - {{ getPaymentFullPrice }}
      'getCategoryList'
    ]),
    curentElements() {
      const { n, cur } = this
      return this.getPaymentList.slice(n * (cur - 1), n * (cur - 1) + n)
    },
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