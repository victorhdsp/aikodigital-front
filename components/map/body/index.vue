<template>
    <LMap 
      :zoom="zoom" 
      :center="center"
      :use-global-leaflet="false"
    >
      <slot />
    </LMap>
</template>

<script setup lang="ts">
  import { LMap } from '@vue-leaflet/vue-leaflet';
  const marks = useMarksStore();

  const zoom = 6;
  const center = marks.center;
</script>

<style scoped lang="scss">
#map {
    @apply w-full h-full;
}
</style>