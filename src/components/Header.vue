<template>
  <!--TODO стили в html не надо, лучше вынести если возможно color в класс"-->
  <v-app-bar
      app
      color="teal lighten-2"
      dense
      dark
      flat
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <!--TODO пустой класс у тайтла-->
    <v-toolbar-title class="">MyLogo</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/dashboard" plain :ripple="true">Dashboard</v-btn>
    <v-btn to="/about" plain :ripple="true">About</v-btn>

  </v-app-bar>
</template>

<!--TODO аналогично, лучше сделать импорт скрипта и стилей отдельно-->
<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>