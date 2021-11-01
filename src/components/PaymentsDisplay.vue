<template>
  <div class="dashboard__table table-wrap">
    <table class="table">
      <thead class="table__header">
      <tr class="table__row">
        <th class="table__header-item">#</th>
        <th class="table__header-item">{{ $t('tableHeadDate') }}</th>
        <th class="table__header-item">{{ $t('tableHeadCategory') }}</th>
        <th class="table__header-item">{{ $t('tableHeadValue') }}</th>
        <th class="table__header-item">{{ $t('tableHeadAction') }}</th>
      </tr>
      </thead>
      <tbody>
        <tr class="table__row" v-for="(item, idx) in items" :key="idx">
          <td class="table__column" data-label="idx">{{ idx + 1 }}</td>
          <td class="table__column" data-label="date">{{ item.date }}</td>
          <td class="table__column" data-label="category">{{ $t(`category${item.category}`)  }}</td>
          <td class="table__column" data-label="amount">{{ item.value }}</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v context-menu" @click="onclickContextItem($event, item)"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "PaymentsDisplay",
  components: {},
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(["setEditItem", "deleteElementFromPaymentList"]),
    onclickContextItem(event, item) {
      const items = [
        {
          text: this.$t('actionEdit'),
          action: () => {
            this.actionEdit(item)
          }
        },
        {
          text: this.$t('actionDelete'),
          action: () => {
            this.actionDelete(item.id)
          }
        }
      ]
      this.$context.show({event, items})
    },
    actionDelete(id) {
      this.deleteElementFromPaymentList(id)
      this.$context.close()
    },
    actionEdit(item) {
      this.$context.close()
      this.$modal.show({
        title: "Add Payment Form",
        content: "AddPaymentForm",
        action: "Edit",
        idEdit: item.id
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.context-menu {
  padding: 5px;
  cursor: pointer;
}
.dashboard__title {
  font-weight: 400;
  font-size: 4rem;
  opacity: .7;
  margin: 2rem 2rem 0;
}

.my-plus {
  margin-left: 15px;
}

.table-wrap {
  text-align: center;
  display: inline-block;
  background-color: #fff;
  padding: 2rem 2rem;
  color: var(--greyDark);
}

.table {
  font-size: 1.6rem;
  border: 1px solid var(--darker-base-color);
  width: 100%;
  margin:0;
  padding:0;
  border-collapse: collapse;
  border-spacing: 0;
  &__header-item, &__column {
    color: var(--primary);
    padding: 10px;
    text-align: center;
    border-right: 1px solid var(--darker-base-color);
  }
  &__action {
    display: flex;
    justify-content: space-around;
  }
  &__row {
    border: 1px solid #ccc;
    padding: 5px;
    border-bottom: 2px solid #ccc;
  }
  &__header-item {
    background-color: var(--primary);
    color: #ccc;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
  }
}

.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--greyDark);
  cursor: pointer;

  span {
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
    border-radius: 0.6rem;
    padding: 2rem;
    font-size: 3rem;
    transition: all 0.3s ease;
  }

  &:hover {
    span {
      transform: scale(1.2);
      color: var(--primary);
    }
  }
}

.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  &__numbers,
  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 0.4rem;
    &:hover {
      color: var(--primary);
    }

    &.active {
      color: #ffffff;
      background: var(--primary);
      font-weight: 600;
      border: 1px solid var(--primary);
    }
  }
}

//adaptive table
@media screen and (max-width: 600px) {
  .table {
    border: 0;
    &__header {
      display: none;
    }
    &__row {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ccc;
    }
    &__column {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
      border-right: 1px solid transparent;
      &:last-child {
        border-bottom: 0;
      }
      &:before {
        content: attr(data-label);
        float: left;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
}




</style>