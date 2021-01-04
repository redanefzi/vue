<template>
  <v-app>
    <v-app-bar>
      <v-tabs>
        <v-tab to="/">Products</v-tab>
        <v-tab to="/create">New</v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data () {
   return {
      //
    }
  },

};
</script>


<style scoped>

</style>