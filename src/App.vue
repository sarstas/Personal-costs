<template>
  <v-app>
    <header class="header">
      <template>
        <div>
          <v-app-bar
              color="teal lighten-2 "
              dense
              dark
              flat
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title class="">MyLogo</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn to="/dashboard" plain :ripple="true">Dashboard</v-btn>
            <v-btn to="/about" plain :ripple="true">About</v-btn>

            <v-menu
                left
                bottom
            >

            </v-menu>
          </v-app-bar>
        </div>
      </template>
    </header>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <footer class="footer">
      <template>
        <v-card height="200px">
          <v-footer
              v-bind="localAttrs"
              :padless="padless"
          >
            <v-card
                flat
                tile
                width="100%"
                class="teal lighten-2 text-center"
            >
              <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-card>
      </template>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
    items: [
    'default',
    'absolute',
    'fixed',
    ],
    padless: true,
    variant: 'default',
    modalSettings: {
      modalIsShow: false,
      action: ''
    },
    info: null,

  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = true
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
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

};
</script>
