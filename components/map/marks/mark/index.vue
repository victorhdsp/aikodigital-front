<template>
    <div>
        <LMarker
            :icon="icon"
            :lat-lng="[props.lat, props.lon]"
        >
            <LPopup>
                <p>{{ props.title }}</p>
            </LPopup>
        </LMarker>
    </div>
</template>

<script setup lang="ts">
import L from 'leaflet';
import { LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import type { MarkProps } from './type';

const props = defineProps<MarkProps>();

const icon = L.icon({
    iconUrl: 'http://localhost:3000/_nuxt/node_modules/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: [`mark-item-${props.id}`, "mark-item"].join(' '),
});
</script>

<style lang="scss">
    .mark-item {
        @apply transition;
    }
    .mark-item-unselected {
        @apply opacity-30;
    }
</style>