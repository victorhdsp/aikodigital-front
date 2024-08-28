<template>
    <div id="map">
      <LMap 
        :zoom="5" 
        :center="[-15.793889, -47.882778]"
        :use-global-leaflet="true"
      >
        <LTileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          layerType="base"
          name="OpenStreetMap"
        />
      </LMap>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
#map {
    @apply w-full h-[80vh];
}
</style>