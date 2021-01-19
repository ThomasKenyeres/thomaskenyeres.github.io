<template>
  <v-container fluid>
    <v-row align="stretch" class="d-md-and-down">
      <v-col>
        <v-card color="dev" dark>
          <v-responsive :aspect-ratio="4 / 3">
            <v-card-title class="headline">
              <router-link to="/dev">DEV</router-link>
            </v-card-title>
            <v-card-subtitle>Development, libraries ...</v-card-subtitle>
            <v-card-text> Docs, library references, tutorials </v-card-text>
            <v-card-actions>
              <v-btn text> MORE </v-btn>
            </v-card-actions>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="music" dark>
          <v-responsive :aspect-ratio="4 / 3">
            <v-card-title class="headline">
              <router-link to="/music">MUSIC</router-link>
            </v-card-title>
            <v-card-subtitle>Music</v-card-subtitle>
            <v-card-text> Music topic </v-card-text>
            <v-card-actions>
              <v-btn text> MORE </v-btn>
            </v-card-actions>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="demo" dark>
          <v-responsive :aspect-ratio="4 / 3">
            <v-card-title class="headline">
              <router-link to="/demo">DEMO</router-link>
            </v-card-title>
            <v-card-subtitle>Simulators, etc.</v-card-subtitle>
            <v-card-text>
              Demo applications,
              <br />
              examples
            </v-card-text>
            <v-card-actions>
              <v-btn text> MORE </v-btn>
            </v-card-actions>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.v-card {
  height: 100%;
}

.v-card .v-card__text {
  background-color: #ffffff25;
  height: 20rem;
  padding: 1rem;
}

.v-card__title a {
  text-decoration: none;
  color: white;
}
</style>