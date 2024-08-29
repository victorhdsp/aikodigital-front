<template>
    <LTileLayer
        :url="url"
        :attribution="attribution"
        :layer-type="layerType"
        :name="name"
    />
</template>

<script setup lang="ts">
    import { LTileLayer } from '@vue-leaflet/vue-leaflet';

    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    const layerType = 'base';
    const name = 'OpenStreetMap';
</script>