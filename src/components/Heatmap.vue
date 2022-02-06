<template>
  <div id="scrolling-techniques-6" :style="{ height: '90vh' }">
    <datepicker  style='z-index:20001;'>
    </datepicker>
    <l-map
      
      :zoom="zoom"
      :center="center"
      ref="mymap"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Datepicker from "../components/Datepicker";
export default {
  name: "Heatmap",
  components: {
    Datepicker,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
};
</script>
