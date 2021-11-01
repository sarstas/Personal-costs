<template>
  <div id="app" class="page">
    <Header />
    <main class="payment container">
      <transition name="fade">
        <modal-window-add v-bind="modalSettings" v-if="modalSettings.modalIsShow"/>
      </transition>
      <transition name="fade">
        <context-menu />
      </transition>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContextMenu from "@/components/ContextMenu";

export default {
  name: 'App',
  components: {
    ContextMenu,
    Header,
    Footer,
    ModalWindowAdd: () => import(/*webpackChunkName: "ModalWindow"*/ '@/components/ModalWindowAdd')
  },
  data() {
    return {
      modalSettings: {
        modalIsShow: false,
        action: ''
      },
    }
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
    // this.$store.dispatch('fetchData')
    // this.$store.dispatch('fetchCategoryList')
  },

  mounted() {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)
  }
}
</script>

<style lang="scss">
@import "assets/normalize.css";
@import "assets/styles/main.scss";

#app {
  font-family: Arial, sans-serif;
}
.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */{
  opacity: 0
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
}


</style>
