<template>
  <v-app :style="themeStyle">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        ThomasKenyeres
      </div>

      <v-spacer></v-spacer>

      
      github.io
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data() {
    return {
      themeStyle: {
        background: this.$vuetify.theme.themes[this.$vuetify.theme.dark ? "dark": "light"].background,
      },
    };
  },
};
</script>

