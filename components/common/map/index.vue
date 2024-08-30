<template>
    <div id="map">
      <ClientOnly>
        <template #default>
          <LMap 
            :zoom="6"
            :center="map.center"
            :use-global-leaflet="true"
            @ready="(_map) => _map.setView(map.center, 6)"
          >
            <Head />
            <slot />
          </LMap>
        </template>

        <template #fallback>
          <Loading />
        </template>
      </ClientOnly>
    </div>
</template>

<script setup lang="ts">
  import { LMap } from "@vue-leaflet/vue-leaflet";
  import Head from "@/components/common/map/head/index.vue";
  import Loading from "@/components/common/loading/index.vue";
  
  const map = useMapStore();
</script>

<style scoped lang="scss">
#map {
    @apply w-full h-full;
}
</style>