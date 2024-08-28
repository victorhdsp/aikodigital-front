<template>
    <div id="map">
      <ClientOnly fallback-tag="span" fallback="Loading map...">
        <LMap 
          :zoom="5" 
          :center="[-15.793889, -47.882778]"
          :use-global-leaflet="false"
        >
          <LTileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            layer-type="base"
            name="OpenStreetMap"
          />
          <Marks />
        </LMap>
      </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import Marks from "@/components/map/marks/index.vue";
</script>

<style scoped lang="scss">
#map {
    @apply w-full h-full;
}
</style>