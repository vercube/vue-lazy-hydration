<template>
  <button type="button" @click="count++">
    <template v-if="isHydrated">count is {{ count }}</template>
    <template v-else>Component not hydrated.</template>
  </button>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  const count = ref(0);
  const isHydrated = ref(false);

  withDefaults(defineProps<{
    size?: number
  }>(), {
    size: 3,
  })

  onMounted(() => {
    isHydrated.value = true
  });
</script>