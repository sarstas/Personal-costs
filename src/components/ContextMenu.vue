<!--идея компонента понятная, но реализация не очень.-->
<!--На самом деле из опыта могу подсказать что между модалками/попапами/контекстными меню/нотификациями и т.д.-->
<!--очень много общего, это всё называется overlay-->
<!--оно всё умеет позиционироваться поверх контента на экране и имеет общий код закрытия/открытия/динамический zIndex и т.д.-->
<!--в этом плане, angular cdk очень далеко ушёл и предлагает метакод, без UI-->
<!--https://material.angular.io/cdk/overlay/overview-->
<!--альтернативу сходу не подскажу где лучше посмотреть как такие вещи делаются-->

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
    };
  },
  methods: {
    onClick(item) {
      item.action();
    },
    onClose() {
      this.items = [];
      this.shown = false;
    },
    onShown({ items, caller }) {
      this.items = items;
      this.shown = true;
      this.setPosition(caller);
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect();
      this.xPos = pos.left;
      this.yPos = pos.top;
    }
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 10}px`, // не обязательно хардкодить offset
        left: `${this.xPos +20}px` // что будет если будет кнопка открытия меню справа+внизу? меню откроется за пределы экрана, это обычно обрабатывают
      };
    }
  },
  mounted() {
    this.$context.EventBus.$on('shown', this.onShown);
    this.$context.EventBus.$on('close', this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off('shown', this.onShown);
    this.$context.EventBus.$off('close', this.onClose);
  }
};
</script>

<!--а здесь sass, хотя вроде на scss перешёл-->
<style lang="scss" scoped>
.overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
}

.context {
    font-size: 1.6rem;
    z-index: 1;
    position: absolute;
    background: #eee;
    cursor: pointer;
    &__item {
        color: #09a954;
        margin: 8px;
    }
}
</style>
