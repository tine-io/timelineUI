<template>
  <div
    id="scrolling-techniques-6"
    :style="{ height: '100vh', width: '100vw', margin: 0, padding: 0 }"
  >
    <v-row id="row1" justify="space-between">
      <v-col cols="1"> </v-col>
      <v-col id="rangeDatepicker" cols="10">
        <rangeDatepicker @dateChange="getDates"> </rangeDatepicker>
      </v-col>
      <v-col id="slider" cols="1">
        <v-card style="max-width: 50px" >
          <v-slider vertical thumb-label hint="point intensity" step="0.1" max="2" min="0.1" v-model="intensity" @end="sliderEvent"></v-slider>
        </v-card>
      </v-col>
    </v-row>

    <l-map id="map" :zoom="10" :center="[52.54765, 13.446625]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <Vue2LeafletHeatmap
        :lat-lng="latlngs"
        :radius="20"
        :min-opacity="0.5"
        :max-zoom="15"
        :blur="40"
        ref="heatmapComp"
      ></Vue2LeafletHeatmap>
    </l-map>
  </div>
</template>

<script>
import Vue from "vue";
import { LMap, LTileLayer } from "vue2-leaflet";
import RangeDatepicker from "../components/RangeDatepicker";
import Vue2LeafletHeatmap from "../components/Vue2LeafletHeatmap.vue";
import { updateToken } from "../services/updateToken";
import { getLocationsByTimerange } from "../services/location";

export default {
  name: "Heatmap",
  components: {
    RangeDatepicker,
    LMap,
    LTileLayer,
    Vue2LeafletHeatmap,
  },
  data: () => ({
    intensity: 0.1,
    latlngs: [
      [52.547627, 13.446561, 0.1]
    ],
  }),
  methods: {
    async sliderEvent(event){
      this.latlngs.forEach(
        element => element[2] = event
      )
      this.$refs.heatmapComp.setLatLngs(this.latlngs)
    },
    async getDates(event) {
      console.log(event)
      var startDate = new Date(event[0]);
      var endDate = new Date(event[1]);
      startDate.setHours(0,0,0,0);
      endDate.setHours(23,59,59,999);
      updateToken();
      var locations;
      await getLocationsByTimerange(
        startDate.getTime(),
        endDate.getTime(),
        Vue.$keycloak.token
      ).then(function (result) {
        locations = JSON.parse(result)["locations"];
      });
      this.latlngs = [];
      console.log(locations)
      locations.forEach((element) => {
        this.latlngs.push([
          element["point"]["coordinates"][0] / 10000000,
          element["point"]["coordinates"][1] / 10000000,
          this.intensity,
        ]);
      });
    },
  },
};
</script>

<style>
#slider {
  z-index: 2;
}
#rangeDatepicker {
  max-height: 20px;
  max-width: 310px;
  z-index: 2;
}
#row1 {
  z-index: 0;
  padding: 10px;
  margin-bottom: -200px;
}
#map {
  height: 100%;
  z-index: 1;
}
</style>
