<template>
  <form className="form">
    <input class="form__input" v-model="date" placeholder="date" />
    <select class="form__input" name="category" v-model="category">
      <option
          v-for="option in categoryList"
          :key="option"
          :value="option"
      >
        {{ option }}
      </option>
    </select>
    <input class="form__input" placeholder="Value" v-model="value" type="number" required />
    <button @click.prevent="onSaveClick" @click="onCloseClick" >Save!</button>
    <p>{{ error }}</p>
  </form>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "AddPaymentForm",
  data () {
    return {
      id: '',
      date: '',
      category: '',
      value: '',
      error: '',
    }
  },
  props: {
    action: String,
    idEdit: Number
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    categoryList() {
      return  this.$store.getters.getCategoryList
    },
  },
  methods: {
    ...mapMutations([
        'addDataToPaymentList',
        'setEditItem',
    ]),
    onSaveClick () {
      this.error=''
      if(this.value === '' || this.category === ''){
        return this.error = 'Вы не ввели ничего в поля category или value'
      } else {
        const data = {
          id: this.id = Date.now(),
          date: this.date || this.getCurrentDate,
          category: this.category,
          value: +this.value,
        }
        if (this.action === 'Add') {
          this.addNewPayment(data)
        } else if (this.action === 'Edit') {
          data.id = this.idEdit
          this.setEditItem(data)
        }
      }
    },
    addNewPayment (data) {
      this.addDataToPaymentList(data)
    },
    onCloseClick() {
      this.$modal.hide()
    }
  },
  created() {
    if (this.$route.path.split("/")[1] === "add") {
      this.id = Date.now()
      this.category = this.$route.params.category || ""
      this.value = +this.$route.query?.value || ""
      this.date = this.getCurrentDate
    }
  }

}
</script>

<style lang="sass" scoped>
.form
  &__input
    width: 150px
    height: 30px


</style>