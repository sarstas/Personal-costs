<template>
  <v-container>
    <chartjs-doughnut
        class="mt-16"
        v-bind:labels="labels"
        v-bind:datasets="datasets"
        v-bind:option="option"
    ></chartjs-doughnut>
  </v-container>
</template>

<script>

export default {
  name: "Diagram",
  components: {  },
  data() {
    return {
      labels: ['Food', 'Education', 'Transport', 'Clothing', 'Housing'],
      datasets: [
        {
          data: [30, 30, 10, 20, 40],
          backgroundColor: ["#F06292", "#DCE775", "#448AFF", "#FFF176", "#4DB6AC"]
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