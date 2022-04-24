<template>
      <v-menu :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            solo
            v-model="dateRangeText"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          range
          v-on:change="emitDates"
          v-model="dates"
          :allowed-dates="allowedDates"
        ></v-date-picker>
      </v-menu>
</template>

<script>
export default {
  name: "Datepicker",
  data: () => ({
    dates: [new Date(Date.now()).toISOString().substr(0, 10), new Date(Date.now()).toISOString().substr(0, 10)],
  }),
  methods: {
    allowedDates(val) {
      var dates = new Date(val.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
      var today = new Date(Date.now());
      return dates <= today;
    },
    emitDates () {
      this.checkDatesSequenz();
      this.$emit("dateChange", this.dates);
    },
    checkDatesSequenz() {
      if (this.dates.length == 2 && this.dates[0] > this.dates[1]) {
        this.dates = [this.dates[1], this.dates[0]];
      }
    },
  },
  computed: {
    dateRangeText() {
      return "from " + this.dates[0] + " to " + this.dates[1];
    },
  },
};
</script>
