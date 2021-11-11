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
// самое время начать писать тесты, начни с пагинации
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

}
</script>

<style lang="sass" scoped>
.pagination
  display: flex
  justify-content: center
  //margin-top: 30px
  font-size: 1.6rem
  &__btn
    padding: 10px
    margin: 10px
    cursor: pointer
    border: none
    background-color: var(--greyLight)
    transition: .3s
    border-radius: 4px
    &:hover
      background-color: var(--greyLight-2)

.active
  background-color: var(--base-color)
  color: #fff
</style>
