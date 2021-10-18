<template>
  <div>
    <!--
TODO в темплейте неочень понятно что ты хотел показать,
"About" как наполнение страницы и кнопка рядом? Если так,
то нехватает стилей для кнопки + расположение основного контента "About" и кнопки неудачное.
К тому же "About" нужно завернуть в отдельный тег.
-->
    About
    <button type="button" @click="openModalAuth">Open Auth</button>
  </div>
</template>

<!--TODO отдельно-->
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