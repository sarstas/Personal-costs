<template>
  <form class="form">
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

<!--    Все лейблы надо унести в переводы, без исключений-->

<!--    type?-->
    <button @click.prevent="onSaveClick" @click="onCloseClick" class="form__btn">Save!</button>
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
    // в чём профит конкретно для формы юзать redux паттерн? тебе надо подтянуть общую теорию зачем оно надо
    ...mapMutations([
        'addDataToPaymentList',
        'setEditItem',
    ]),
    onSaveClick () {
      this.error=''
      if(this.value === '' || this.category === ''){
        // есть смысл добавить библиотеку форм, текущий подход далёк от прода
        return this.error = 'Вы не ввели ничего в поля category или value' // перевод?
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

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  //flex: 1 auto;
  &__input {
    border: none;
    margin-top: 15px;
    padding: 5px;
    //width: 150px;
    //height: 30px;
  }
  &__btn {
    margin-top: 15px;
  }
}

</style>
