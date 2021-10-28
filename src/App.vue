<template>
  <div id="app" class="page">
    <Header />
    <main class="payment center">
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

import ContextMenu from "@/components/ContextMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ContextMenu,
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
    this.$store.dispatch('fetchData')
    this.$store.dispatch('fetchCategoryList')
  },

  mounted() {
    this.$modal.EventBus.$on('onShown', this.onShown)
    this.$modal.EventBus.$on('onHide', this.onHide)
  }
}
</script>

<style lang="sass">
@import "assets/style/main.css" // не понял такого импорта, у тебя же есть main.scss

//@import "assets/style/main.css"

#app
  font-family: Arial, sans-serif

.center
  padding-left: calc(50% - 570px)
  padding-right: calc(50% - 570px)


.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  opacity: 0
//много лишних отступов




</style>
