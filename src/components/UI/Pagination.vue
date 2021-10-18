<template>
  <div class="text-center">
    <v-pagination
        v-model="curPage"
        :length="amount"
        @click="onClick(cur)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<!--TODO аналогично, лучше сделать импорт скрипта и стилей отдельно-->
<script>
export default {
  name: "Pagination",
  data () {
    return {
      curPage: 1,
    }
  },
  props: {
    n: Number,
    cur: {
      type: Number,
      default() {
        return 1
      }
    } ,
    length: Number
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick(p) {
      if(p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }

}
</script>

<style scoped>

</style>