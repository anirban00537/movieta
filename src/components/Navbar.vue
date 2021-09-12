<template>
  <el-menu
    background-color="#23272a"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link
        to="/"
        class="navbar-brand"
      >Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link
        to="/about"
        class="navbar-brand"
      >About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import Vue from "vue";
export default class Navbar extends Vue {
  private activeIndex = "1";
}
</script>

<style></style>
