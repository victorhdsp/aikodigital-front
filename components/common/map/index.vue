<template>
    <div id="map">
      <ClientOnly>
        <template #default>
          <LMap 
            :zoom="zoom"
            :center="map.center"
            :use-global-leaflet="true"
            @ready="ready"
            @update:center="update"
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
  const zoom = 10;

  function ready (useMap: typeof LMap) {
    useMap.setView(map.center, zoom);
    map.bounce ++;
  }
  function update () {
    map.bounce ++;
  }
</script>

<style scoped lang="scss">
#map {
    @apply w-full h-full;
}
</style>