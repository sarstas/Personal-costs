<template>
  <v-app-bar
      app
      color="teal lighten-2 "
      dense
      dark
      flat
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title class="">MyLogo</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/dashboard" plain :ripple="true">Dashboard</v-btn>
    <v-btn to="/about" plain :ripple="true">About</v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>