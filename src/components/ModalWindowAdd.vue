<template>
  <div class="wrapper" v-if="modalIsShow">
    <div class="wrapper__overlay" @click.self="onCloseClick">
      <div class="wrapper__form">
        <div class="header">{{ title }}</div>
        <div class="content">
          <component :is="content" :action="action" :idEdit="idEdit"/>
        </div>
        <div class="footer">
          <button class="btn" type="button" @click="onCloseClick">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ModalWindowAdd",
  components: {
    Auth: () => import(/*webpackChunkName: "ModalAuth"*/ '@/components/Auth'),
    AddPaymentForm: () => import(/*webpackChunkName: "ModalAddPaymentForm"*/ '@/components/AddPaymentForm'),
  },
  props: {
    content: String,
    title: String,
    modalIsShow: Boolean,
    action: String,
    idEdit: Number
  },
  methods: {
    onCloseClick() {
      this.$modal.hide()
    }
  }
}
</script>

<style lang="sass" scoped>

</style>