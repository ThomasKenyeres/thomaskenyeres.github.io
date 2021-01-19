<template>
  <v-app :style="themeStyle">
    <v-app-bar app :color="currentPart" dark>
      <div class="d-flex align-center">
        <router-link to="/">ThomasKenyeres</router-link>
        <h1 v-if="currentPart !== 'primary'">
          / {{ currentPart.toUpperCase() }}
        </h1>
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
    currentPart() {
      switch (this.$route.path) {
        case "/dev":
          return "dev";
        case "/music":
          return "music";
        case "/demo":
          return "demo";
        default:
          return "primary";
      }
    },
  },
  data() {
    return {
      themeStyle: {
        background: this.$vuetify.theme.themes[
          this.$vuetify.theme.dark ? "dark" : "light"
        ].background,
      },
    };
  },
};
</script>

<style scoped>
.v-app-bar div div a {
  color: white;
  text-decoration: none;
}

.v-app-bar div h1 {
  margin: 20px;
}
</style>