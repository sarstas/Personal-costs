<template>
  <div id="app" class="page">
    <Header />
    <main class="payment container">
      <transition name="fade">
        <!--
         очень странно видеть в разметке модалку,
        обычно она создаётся один раз ниже всего контента,
         в неё передаётся кастомный контент
         -->
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
// здесь у строк импортов есть ; а в других файлах встречается без них. Добавь в линтер чтобы были обязательными и пофикси везде
// по хорошему каждая строка в js заканчивается точкой с запятой
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

      // лучше так
      // this.modalSettings = {
      //   ...settings,
      //   modalIsShow: true
      // }
    },
    onHide() {
      this.modalSettings.modalIsShow = false // зачем эта строка? ты синхронно уничтожаешь объект следующей
      this.modalSettings = {}
    },
  },
  created () {
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
