<script setup lang="ts">
import Info from '@/components/Info.vue'
</script>

<template>
  <div id="app">
    <a href="#" target="_blank">
      <img src="~/assets/logo.png" class="logo" alt="Cube logo" />
    </a>

    <Info/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
