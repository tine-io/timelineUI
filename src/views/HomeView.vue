<template>
  <div class="btn-horizontal-center">
    <v-btn primary @click="onClick"> test </v-btn>
  </div>
</template>

<script>
import Vue from "vue";
import { updateToken } from "../services/updateToken";
import { getLocationsByTimerange } from "../services/location";
export default {
  name: "Home",
  methods: {
    onClick() {
      updateToken();
      getLocationsByTimerange(1643699308000, 1646118508000, Vue.$keycloak.token).then(
          result => console.log(result)
        );
    },
  },
};
</script>
<style>
.btn-horizontal-center {
  position: absolute;
  left: 50%;
}
</style>
