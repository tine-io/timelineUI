<template>
  <div id="scrolling-techniques-6">
    <v-row id="row1" dense>
      <v-col cols="3" id="rangeDatepicker">
        <datepicker @dateChange="setDate"></datepicker>
        <v-timeline dense   :style="{ height: '90vh' }">
          <v-timeline-item small>timeline item</v-timeline-item>
          <v-timeline-item small> timeline item </v-timeline-item>
          <v-timeline-item small>timeline item</v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="9" :style="{ height: '100vh' }">
        <l-map id="map" :zoom="10" :center="[52.54765, 13.446625]">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          ></l-tile-layer>
        </l-map>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Datepicker from "../components/Datepicker";

export default {
  name: "Timeline",
  components: {
    Datepicker,
    LMap,
    LTileLayer,
  },
  data: () => ({
     date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
  }),
  methods: {
    setDate(date) {
      console.log(date);
    },
  },
};
</script>

<style>
#rangeDatepicker {
  z-index: 2;
}
#row1 {
  z-index: 0;
}
#map {
  height: 100%;
  z-index: 1;
}
</style>
