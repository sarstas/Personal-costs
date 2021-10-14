<template>
  <div>
    About
    <button type="button" @click="openModalAuth">Open Auth</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    openModalAuth() {
      // this.$modal.show( {title: 'Auth Form', content: 'Auth'})
    }
  }
}
</script>

<style scoped>

</style>