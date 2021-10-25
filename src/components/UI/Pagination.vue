<template>
  <div class="pagination">
    <button class="pagination__btn" type="button" @click="onClick(cur-1)" >&lt;</button>
    <button class="pagination__btn" type="button"
        v-for="i in amount"
        :key="i"
        :class="{  active:  cur === i }"
        @click="onClick(i)"
    >
      {{ i }}
    </button>
    <button class="pagination__btn" type="button" @click="onClick(cur+1)" >&gt;</button>
  </div>
</template>

<script>
export default {
  name: "pagination",
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
  },
  mounted() {

  }

}
</script>

<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  margin-top: 30px
  &__btn
    padding: 10px
    margin: 10px
    cursor: pointer
    border: none
    background-color: rgba(148, 143, 143, 0.69)
    transition: .3s
    &:hover
      background-color: #09a954
    
.active
  background-color: #09a954
  color: #fff
</style>