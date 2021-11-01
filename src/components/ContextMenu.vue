<template>
  <div class="context" v-if="shown" :style="styles">
    <div
        class="context__item"
        v-for="item in items"
        :key="item.text"
        @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      items: [],
      shown: false,
      xPos: 0,
      yPos: 0
    }
  },
  methods: {
    onClick(item) {
      item.action()
    },
    onClose() {
      this.items = []
      this.shown = false
    },
    onShown({ items, caller }) {
      this.items = items
      this.shown = true
      this.setPosition(caller)
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect()
      this.xPos = pos.left
      this.yPos = pos.top
    }
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`,
        left: `${this.xPos +20}px`
      }
    }
  },
  mounted() {
    this.$context.EventBus.$on('shown', this.onShown)
    this.$context.EventBus.$on('close', this.onClose)
  },
  beforeDestroy() {
    this.$context.EventBus.$off('shown', this.onShown)
    this.$context.EventBus.$off('close', this.onClose)
  }
}
</script>

<style lang="sass" scoped>
.overlay
    z-index: 0
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    display: flex
    justify-content: center
.context
  font-size: 1.6rem
  position: relative
  z-index: 1
  position: absolute
  background: #eee
  cursor: pointer
  &__item
    color: #09a954
    margin: 8px
</style>