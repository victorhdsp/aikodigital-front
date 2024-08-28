<template>
    <div>
        <LMarker
            :icon="icon"
            :lat-lng="[props.lat, props.lng]"
        >
            <LPopup>
                <p>{{ props.title }}</p>
            </LPopup>
        </LMarker>
    </div>
</template>

<script setup lang="ts">
import L from 'leaflet';
import type { MarkProps } from './type';
import { LMarker, LPopup } from '@vue-leaflet/vue-leaflet';

const props = defineProps<MarkProps>();

const icon = L.icon({
    iconUrl: 'http://localhost:3000/_nuxt/node_modules/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
</script>

<style lang="scss">
</style>