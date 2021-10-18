<!--TODO при маленьком экране график слезает за футер и его не видно. Нужно рефакторить основной темплейт, чтобы такого не было-->
<template>
<!--TODO пустой стиль-->
  <v-container class="" >
    <chartjs-doughnut
        class="mt-16"
        v-bind:labels="labels"
        v-bind:datasets="datasets"
        v-bind:option="option"
    ></chartjs-doughnut>
  </v-container>
</template>

<!--TODO аналогично, лучше сделать импорт скрипта и стилей отдельно-->
<script>

export default {
  name: "Diagram",
  components: {  },
  data() {
    return {
      labels: ['Food', 'Education', 'Transport', 'Clothing', 'Housing'], // TODO во эти данные хоть и для заглушки, но их лучше тоже выносить отдельно
      datasets: [
        {
          data: [30, 30, 10, 20, 40],
          backgroundColor: ["#F06292", "#DCE775", "#448AFF", "#FFF176", "#4DB6AC"] // TODO вынести отдельно в какую-нибудь enum-ку
        }
      ],
      option: {
        title: {
          display: true,
          position: "bottom",
          text: 'Costs'
        }
      }
    };
  },
  mounted() {
  },
  methods: {
  }
}

</script>

<style scoped>

</style>