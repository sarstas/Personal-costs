<template>
  <footer class="footer">
    <div class="icons">
<!--      некорретно, это ссылки, а не div-->
<!--      более того, если это заглушки (не будут выполнять что либо), то им не место в проекте-->
      <div class="icons__item pointer"><i class="fas fa-home"></i></div>
      <div class="icons__item pointer"><i class="far fa-envelope"></i></div>
      <div class="icons__item pointer"><i class="far fa-calendar-alt"></i></div>
      <div class="icons__item pointer"><i class="fas fa-trash-alt"></i></div>
    </div>
    <div class="copyright">
      <span>Saraikin Stanislav - 2021</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
//где стили футера
</style>
