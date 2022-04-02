<template>
  <div
    id="scrolling-techniques-6"
    :style="{ height: '100vh', width: '100vw', margin: 0, padding: 0 }"
  >
    <rangeDatepicker @dateChange="getDates" id="rangeDatepicker" style="z-index: 2">
    </rangeDatepicker>

    <l-map
      id="map"
      style="height: 100%; overflow: auto; z-index: 1"
      :zoom="10"
      :center="[52.54765, 13.446625]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <Vue2LeafletHeatmap
        :lat-lng="latlngs"
        :radius="30"
        :min-opacity="0.5"
        :max-zoom="15"
        :blur="40"
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
    latlngs: [
      [52.547627, 13.446561, 0.1],
      [52.547614, 13.446584, 0.1],
      [52.547615, 13.44658, 0.1],
      [52.547615, 13.446562, 0.1],
      [52.547608, 13.446563, 0.1],
      [52.547624, 13.446596, 0.1],
      [52.54765, 13.446614, 0.1],
      [52.547655, 13.446619, 0.1],
      [52.547654, 13.446622, 0.1],
      [52.547652, 13.446623, 0.1],
      [52.547651, 13.446623, 0.1],
      [52.547651, 13.446622, 0.1],
      [52.547649, 13.446624, 0.1],
      [52.54765, 13.446625, 0.1],
      [52.54765, 13.446625, 0.1],
      [52.547647, 13.446629, 0.1],
      [52.547647, 13.446629, 0.1],
      [52.547645, 13.446632, 0.1],
      [52.547646, 13.446633, 0.1],
      [52.547646, 13.446636, 0.1],
      [52.547643, 13.446633, 0.1],
      [52.547643, 13.446632, 0.1],
      [52.547641, 13.446635, 0.1],
      [52.547641, 13.446639, 0.1],
      [52.547641, 13.446639, 0.1],
      [52.547641, 13.446639, 0.1],
      [52.547641, 13.446638, 0.1],
      [52.547642, 13.446638, 0.1],
      [52.547643, 13.446638, 0.1],
      [52.547644, 13.446638, 0.1],
      [52.547643, 13.446637, 0.1],
      [52.547644, 13.446641, 0.1],
      [52.547646, 13.446642, 0.1],
      [52.547635, 13.446609, 0.1],
      [52.547621, 13.446597, 0.1],
      [52.547634, 13.44662, 0.1],
      [52.547628, 13.446608, 0.1],
      [52.547631, 13.446614, 0.1],
      [52.547612, 13.446597, 0.1],
      [52.547622, 13.44661, 0.1],
    ],
  }),
  methods: {
    async getDates(event) {
      var startDate = new Date(event[0]);
      var endDate = new Date(event[1]);
      console.log(startDate.getTime());
      console.log(endDate.getTime());
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
      locations.forEach(element => {
        this.latlngs.push([element['point']['coordinates'][1], element['point']['coordinates'][0], 0.1])
      });
    },
  },
};
</script>

<style>
#rangeDatepicker {
  position: relative;
  margin-bottom: -88px;
  z-index: 2;
}
</style>
