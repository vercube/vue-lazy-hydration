<template>
  <h1>Vue Lazy Hydration</h1>

  <div class="cards">
    <Child class="card" />

    <NuxtLazyHydrate ssrOnly>
      <Child class="card"/>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup lang="ts">
  import Child from './Child.vue';
</script>

<style scoped>
  .cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>