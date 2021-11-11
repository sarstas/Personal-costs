<template>
  <footer class="footer">
    <div>
      <button class="locale-btn" type="button" @click="setLocale('en')"><flag iso="us"></flag></button>
      <button class="locale-btn" type="button" @click="setLocale('ru')"><flag iso="ru"></flag></button>
    </div>
    <div class="copyright">
      <span>&copy; {{ $t('copyright') }} 2021</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    setLocale(locale) {
      // в целом пойдёт, но лучше будет чтобы футер об этом не знал
      // 1) через redux паттерн
      // 2) отдельный компонент внутри футера по смене языка
      import(`@/langs/${locale}.json`)
      .then(res => {
        this.$i18n.setLocaleMessage(locale, res)
        this.$i18n.locale = locale
      })
    }
  }
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

.locale-btn {
  cursor: pointer;
  background: transparent;
  border: none;
  text-decoration: none;
  font-size: 2rem;
}
</style>
