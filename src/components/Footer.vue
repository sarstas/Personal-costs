<template>
  <footer class="footer">
    <Multylang />
    <div class="copyright">
      <span>&copy; {{ $t('copyright') }} 2021</span>
    </div>
  </footer>
</template>

<script>
import Multylang from "@/components/Multylang";
export default {
  name: "Footer",
  components: {Multylang},
};
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
