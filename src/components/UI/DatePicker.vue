<template>
  <div>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            :value="formattedDate"
            label="Date"
            clearable
            readonly
            v-bind="attrs"
            v-on="on"
            @click:clear="date = null"

        ></v-text-field>
      </template>
      <v-date-picker
          no-title
          v-model="date"
          @input="menu = false"
          @change="getDate"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  name: "DatePicker",
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  computed: {
    formattedDate () {
      return this.date ? format(parseISO(this.date), 'dd.MM.yyyy') : ''
    }
  },
  methods: {
    getDate () {
      this.$emit('getDate', {
        date: format(parseISO(this.date), 'dd.MM.yyyy')
      })
    }
  },
}
</script>

<style scoped>

</style>