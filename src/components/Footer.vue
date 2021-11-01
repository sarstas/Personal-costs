<template>
  <footer class="footer">
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
.footer {
  background-color: var(--base-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icons {
  display: flex;
  &__item {
    font-size: 2rem;
    width: 30px;
    opacity: .6;
    transition: opacity .3s;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 2rem;
    }
    &:hover {
      opacity: .8;
    }
  }
}

.copyright {
  font-size: 1.8rem;
  color: #fff;
  margin-top: 15px;
}
</style>