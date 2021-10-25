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
.btn
  color: aliceblue
  background-color: #09a954
  padding: 5px 10px
  margin: 5px
  border: none
  margin-top: 60px

.wrapper
  border: 1px solid #09a954
  position: absolute
  width: 100%
  height: 100%
  top: 0
  bottom: 0
  left: 0
  right: 0

  &__overlay
    z-index: 0
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(147, 144, 144, 0.8)
    display: flex
    justify-content: center
  &__form
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    align-items: center
    width: 45%
    border: 1px solid #eee
    border-radius: 5px
    height: fit-content
  & .content

    position: relative
    z-index: 100

.header
  display: flex
  justify-content: center

</style>