<template>
  <header class="header container">
<!--    логотип это отдельный компонент, ассет картинки должен быть в той же папке что и компонент Logo-->
    <div class="logo">
      <img class="logo__img" src="../assets/img/logo.png" alt="logo costs">

    </div>
    <nav class="menu">
      неверная разметка по w3c, li может быть только в ul
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>

</style>
