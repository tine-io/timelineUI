<template>
<v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
    >
    <datepicker/>
      <v-container style="height: 1000px;"></v-container>
      <div>Heatmap</div>
    </v-sheet>
</template>

<script>
import Datepicker from "../components/Datepicker"
export default {
  name: "Heatmap",
    components: {
    Datepicker,
  },
};
</script>
