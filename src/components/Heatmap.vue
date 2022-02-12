<template>
  <div
    id="scrolling-techniques-6"
    :style="{ height: '100vh', width: '100vw', margin: 0, padding: 0 }"
  >
    <datepicker id="datepicker" style="z-index: 200010"> </datepicker>

    <l-map
      id="map"
      style="height: 100%; overflow: auto"
      :zoom="10"
      :center="[47.334852, -1.509485]"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"></l-tile-layer>
      <Vue2LeafletHeatmap
        :lat-lng="latlngs"
        :radius="60"
        :min-opacity="0.75"
        :max-zoom="10"
        :blur="60"
      ></Vue2LeafletHeatmap>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Datepicker from "../components/Datepicker";
import Vue2LeafletHeatmap from "../components/Vue2LeafletHeatmap.vue";
export default {
  name: "Heatmap",
  components: {
    Datepicker,
    LMap,
    LTileLayer,
    Vue2LeafletHeatmap,
  },
  data() {
    return {
      latlngs: [
        [47.334852, -1.509485, 0.1],
        [47.342596, -1.328731, 0.1],
        [47.342596, -1.329731, 0.1],
        [47.342596, -1.329731, 0.1],
        [47.342596, -1.329731, 0.1],
        [47.241487, -1.190568,0.1],
        [47.234787, -1.358337, 0.1],
        [47.234787, -1.380440, 0.01],
        [47.234787, -1.370440, 0.01],
        [47.224787, -1.370440, 0.01],
      ],
    };
  },
};
</script>

<style>
#datepicker {
  position: relative;
  margin-bottom: -88px;
  z-index: 2;
}
</style>
