<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="items"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        sort-by="date"
        class="elevation-1"
        @page-count="pageCount = $event"
    >
      <template
          #item.idx = "{ item, index }"
      >
        {{ index + 1 }}
      </template>
      <template v-slot:top>
        <v-toolbar
            flat
        >

          <v-dialog
              v-model="dialog"
              max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="teal"
                  dark
                  class="my-2"
                  v-bind="attrs"
                  v-on="on"
                  :ripple="false"
              >
                Add new costs <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <DatePicker
                          @getDate="setDate"
                          v-model="editedItem.date"
                      />

                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-select
                          v-model="editedItem.category"
                          :items="categoryList"
                          label="Category"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          v-model="editedItem.value"
                          label="Value"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="teal"
                    text
                    @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                    color="teal"
                    text
                    @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="teal" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="teal" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
            @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template  v-slot:no-data>
        <v-btn
            color="teal"
            dark
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
          v-model="page"
          :length="pageCount"
          color="teal"
      ></v-pagination>
    </div>
  </div>
</template>

<script>

import DatePicker from "@/components/UI/DatePicker";

export default {
  name: "PaymentsDisplay",
  components: { DatePicker },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '#',
          align: 'center',
          sortable: false,
          value: 'idx',
        },
        { text: 'Date', value: 'date', sortable: false },
        { text: 'Category', value: 'category', sortable: false },
        { text: 'Value', value: 'value' },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      editedIndex: -1,
      editedItem: {
        idx: '',
        date: 0,
        category: 0,
        value: 0,
      },
      defaultItem: {
        idx: '',
        date: 0,
        category: 0,
        value: 0,
      },
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },

  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created () {

  },
  methods: {
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.$store.commit('setEditItem', item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.$store.commit('deleteElementFromPaymentList', this.editedIndex)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
        console.log('изменил' + this.items[this.editedIndex].idx + ' на ' + this.editedItem.idx)
      } else {
        this.$store.commit('addDataToPaymentList', this.editedItem)
        console.log('добавил')
      }
      this.close()
    },

    setDate (data) {
      this.editedItem.date = data.date
      // debugger
    }

  },

}
</script>

<style lang="sass" scoped>
.table
  display: flex
  font-weight: bold
  width: 50%
  justify-content: space-around
  margin-top: 20px
  padding-bottom: 10px
  border-bottom: 1px solid rgba(148, 143, 143, 0.69)

  &__item
    text-align: center
    width: 25%
.list
  display: flex
  width: 50%
  justify-content: space-around
  list-style: none
  padding-bottom: 10px
  border-bottom: 1px solid rgba(148, 143, 143, 0.69)
  &__item
    width: 25%
</style>