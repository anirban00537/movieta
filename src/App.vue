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
