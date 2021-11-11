<template>
  <div class="dashboard">
    <div class="dashboard__table">
      <button class="btn" type="button" @click="addPayment">{{ $t('btnAddPayment') }} <i class="fas fa-plus my-plus"></i></button>
      <template v-if="this.getLoading" >
        <div class="load__wrap">
          <scroll-loader :loader-method="()=>{}" class="load" />
        </div>
      </template>
      <template v-else >
        <PaymentsDisplay :items="curentElements" />
        <Pagination
            :cur="this.cur"
            :n="this.n"
            :length="getPaymentList.length"
            @paginate="changePage"
        />
      </template>
    </div>
    <div class="dashboard__diagram">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay";
import Pagination from "@/components/UI/Pagination";
import { Pie } from "vue-chartjs";
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: "Dashboard",
  extends: Pie,
  components: { PaymentsDisplay, Pagination },
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
      'getCategoryList',
      'getLoading',
      'getDateForPie'
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
    newDiagram(payments, categories){
      this.renderChart({
        labels: categories,
        datasets: [{
          label: 'Payments',
          data: payments,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      })
    }
  },
  async mounted() {
    this.$store.commit('resetDataState')  //временное кривое решение, что бы запросы не дублировались
    await this.$store.dispatch('fetchCategoryList')
    await this.$store.dispatch('fetchData')

    await this.newDiagram(this.getDateForPie, this.getCategoryList)
  }
}
</script>

<style lang="scss" scoped>
.payment
.my-plus {
  margin-left: 10px;
}
.btn {
  font-size: 2rem;
  color: #fff;
  background-color: var(--primary);
  padding: 10px 10px;
  margin: 2rem 2rem 0;
  border: none;
  max-width: 300px;
  box-sizing: border-box;
  border-radius: 4px;
  text-transform: uppercase;
  max-height: 43px;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  &__table {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  &__diagram {
    display: grid;
    grid-column-start: 4;
    grid-column-end: 6;
    align-items: center;
  }
}

.load__wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-left: 45%;
}

.load {
}

@media screen and (max-width: 1023px) {
  .dashboard {
    &__table {
      grid-column-start: 1;
      grid-column-end: 6;
    }
    &__diagram {
      margin: 2rem;
      grid-column-start: 1;
      grid-column-end: 6;
    }
  }
  .load__wrap {
    margin-left: 0;
  }
}

</style>