<template>
  <div class="wrapper">
    <select class="langs" v-model="lang" @change="setLocale(lang)">
      <option class="langs__item" v-for="(select, index) in languages" :key="index">{{ select }} </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Multylang",
  data() {
    return {
      languages: ['en', 'ru'],
      lang: 'en'
    };
  },
  methods: {
    setLocale(locale) {
      import(`@/langs/${locale}.json`)
          .then(res => {
            this.$i18n.setLocaleMessage(locale, res);
            this.$i18n.locale = locale;
          });
    }
  },
};
</script>

<style lang="scss" scoped>
.langs {
  padding: 3px;
  font-size: 1.5rem;
  border: none;
}
</style>