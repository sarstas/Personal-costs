<template>
  <v-app>
    <Header />
    <v-main class="mb-20">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<!--TODO скрипты лучше писать в отдельных файлах и импортить-->
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Header},
  data: () => ({
    modalSettings: {
      modalIsShow: false,
      action: ''
    },
    info: null,

  }),
  computed: {

  },
  methods: {
    onShown(settings) {
      this.modalSettings = settings
      this.modalSettings.modalIsShow = true
    },
    onHide() {
      this.modalSettings.modalIsShow = false
      this.modalSettings = {}
    },
  },
  created () {
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  },

};
</script>
