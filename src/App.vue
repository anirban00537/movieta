<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script lang="ts">
import Navbar from "./components/Navbar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>


<style lang="css">
body {
  background-color: #23272a;
}

h1,
h2,
h3,
h4,
h5,
p,
h6,
i {
  color: white;
}
</style>
