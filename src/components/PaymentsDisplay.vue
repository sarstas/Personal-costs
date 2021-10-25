<template>
  <div class="dashboard">
    <h1 class="dashboard__title">My personal Costs</h1>
    <button class="dashboard__btn add-btn" type="button">Add new costs <i class="fas fa-plus my-plus"></i></button>
    <div class="dashboard__table table-wrap">
      <table class="table">
        <thead class="table__header">
        <tr class="table__row">
          <th class="table__header-item">#</th>
          <th class="table__header-item">Date</th>
          <th class="table__header-item">Category</th>
          <th class="table__header-item">Value</th>
          <th class="table__header-item">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table__row">
          <td class="table__column" data-label="idx">1</td>
          <td class="table__column" data-label="date">28.03.2020</td>
          <td class="table__column" data-label="category">Food</td>
          <td class="table__column" data-label="amount">169</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v"></i>
          </td>
        </tr>
        <tr class="table__row">
          <td class="table__column" data-label="idx">2</td>
          <td class="table__column" data-label="date">28.03.2020</td>
          <td class="table__column" data-label="category">Food</td>
          <td class="table__column" data-label="amount">169</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v"></i>
          </td>
        </tr>
        <tr class="table__row">
          <td class="table__column" data-label="idx">3</td>
          <td class="table__column" data-label="date">28.03.2020</td>
          <td class="table__column" data-label="category">Food</td>
          <td class="table__column" data-label="amount">169</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v"></i>
          </td>
        </tr>
        <tr class="table__row">
          <td class="table__column" data-label="idx">4</td>
          <td class="table__column" data-label="date">28.03.2020</td>
          <td class="table__column" data-label="category">Food</td>
          <td class="table__column" data-label="amount">169</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v"></i>
          </td>
        </tr>
        <tr class="table__row">
          <td class="table__column" data-label="idx">5</td>
          <td class="table__column" data-label="date">28.03.2020</td>
          <td class="table__column" data-label="category">Food</td>
          <td class="table__column" data-label="amount">169</td>
          <td class="table__column table__action" data-label="action">
            <i class="fas fa-ellipsis-v"></i>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="pagination" class="pagination-wrapper">
        <ul class="pages">
          <li class="pages__btn"><i class="fas fa-arrow-left"></i></li>
          <li class="pages__numbers"> 1</li>
          <li class="pages__numbers active">2</li>
          <li class="pages__numbers">3</li>
          <li class="pages__numbers">4</li>
          <li class="pages__numbers">5</li>
          <li class="pages__numbers">6</li>
          <li class="pages__numbers">...</li>
          <li class="pages__numbers"> 10</li>
          <li class="pages__btn">
            <i class="fas fa-arrow-right"></i>
          </li>
        </ul>
      </div>
    </div>
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
          text: 'Edit',
          action: () => {
            this.actionEdit(item)
          }
        },
        {
          text: 'Delete',
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

</style>