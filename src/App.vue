<template>
  <div id="app">
    <Header v-if="ifHeader"></Header>
    <router-view v-on="{switchHeader:switchHeader, switchFooter:switchHeader}" />
    <Footer v-if="ifFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      ifHeader: true,
      ifFooter: true,
    };
  },
  // mounted() {
  //   document.title = 'Dondio.LTD'
  // },
  methods: {
    switchHeader: function (bool) {
      this.ifHeader = bool;
    },
    switchFooter: function (bool) {
      this.ifFooter = bool;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
