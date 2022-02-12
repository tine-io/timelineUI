<template>
  <v-row>
    <v-col> </v-col>
    <v-col style="max-width: 170px">
      <v-menu :close-on-content-click="false" offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            solo
            v-model="date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            width="50"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
          :allowed-dates="allowedDates"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-col> </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Datepicker",
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods: {
    allowedDates(val) {
      var date = new Date(val.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
      var today = new Date(Date.now());
      return date <= today;
    },
  },
};
</script>
