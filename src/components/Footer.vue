<template>
  <!--TODO ненужная пустая 6-я строка в v-footer-->
  <v-footer
      v-bind="localAttrs"
      :padless="padless"

  >
    <!--TODO стили в html не надо, лучше вынести в класс с width="100%"-->
    <v-card
        flat
        tile
        width="100%"
        class="teal lighten-2 text-center"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
        >
          <!--TODO стили в html такое себе, почему бы не сделать класс с size="24px"?-->
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<!--TODO аналогично, лучше сделать импорт скрипта и стилей отдельно-->
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'default',
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  }
}
</script>

<style scoped>

</style>