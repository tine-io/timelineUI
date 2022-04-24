<template>
  <v-app>
    <!-- app-bar -->
    <v-app-bar
      app
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="#6A76AB"
      dark
      src="@/assets/triangles.svg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="collapse"></v-app-bar-nav-icon>

      <div>Tine</div>

      <v-spacer></v-spacer>

      <v-btn v-if="collapseOnScroll" @click="logout"> logout </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="$router.push('/')">Home</v-tab>
          <v-tab @click="$router.push('timeline')">Timeline</v-tab>
          <v-tab @click="$router.push('heatmap')">Heatmap</v-tab>
          <v-tab @click="$router.push('places')">Places</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid id="main-container">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";

export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    collapseOnScroll: true,
  }),
  methods: {
    collapse() {
      if (this.collapseOnScroll) {
        this.collapseOnScroll = false;
      } else {
        this.collapseOnScroll = true;
      }
    },
    isAuthenticated() {
      if (!Vue.$keycloak.authenticated) {
        this.login();
      }
    },
    login() {
      Vue.$keycloak.login({ redirectUri: window.location.origin });
    },
    logout() {
      Vue.$keycloak.logout({ redirectUri: window.location.origin });
    },
  },
  beforeMount() {
    this.isAuthenticated();
  },
  mounted: function () {
    window.setInterval(() => {
      Vue.$keycloak.updateToken(100);
    }, 30000);
  },
};
</script>
<style>
#main-container{
padding: 0px;
}
</style>
