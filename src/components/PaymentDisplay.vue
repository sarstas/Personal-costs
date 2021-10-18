<!--TODO надо добавить min-width таблице, на маленьком дисплее ею невозможно пользоваться-->
<template>
  <v-container>
    <v-row>
      <v-col :cols="1" class="teal lighten-5 text-center text-subtitle-2">#</v-col>
      <v-col :cols="3" class="teal lighten-5 text-center text-subtitle-2">Date</v-col>
      <v-col :cols="4" class="teal lighten-5 text-center text-subtitle-2">Category</v-col>
      <v-col :cols="2" class="teal lighten-5 text-center text-subtitle-2">Value</v-col>
      <v-col :cols="2" class="teal lighten-5 text-center text-subtitle-2">Action</v-col>
    </v-row>
    <v-row v-for="(pay, index) in items" :key="index">
      <v-col :cols="1" class="text-center">{{ index + 1}}</v-col>
      <v-col :cols="3" class="text-center">{{ pay.date }}</v-col>
      <v-col :cols="4" class="text-center">{{ pay.category }}</v-col>
      <v-col :cols="2" class="text-center">{{ pay.value }}</v-col>
      <v-col :cols="2" class="text-center">
        <!--TODO ошибки в консоли при нажатии на кнопки-->
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </v-col>

    </v-row>
  </v-container>
</template>

<!--TODO аналогично, лучше сделать импорт скрипта и стилей отдельно-->
<script>

import { mapMutations } from "vuex"

export default {
  name: "PaymentDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    ...mapMutations(["setEditItem", "deleteElementFromPaymentList"]),
  }
}
</script>

<style scoped>

</style>