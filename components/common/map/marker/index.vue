<template>
    <LMarker
        v-if="props.id"
        :icon="icon"
        :lat-lng="[props.lat, props.lon]"
    >
        <slot />
    </LMarker>
</template>

<script setup lang="ts">
import type { Icon } from 'leaflet';
import { LMarker } from '@vue-leaflet/vue-leaflet';

const props = defineProps<{
    lat: number;
    lon: number;
    id: string;
}>();

const icon = ref<Icon|undefined>();
onMounted(async () => {
    const L = await import('leaflet');

    icon.value = L.icon({
        iconUrl: '/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        className: [
            `mark-item-${props.id}`,
            "mark-item"
        ].join(' '),
    });

    const map = useMapStore();
    map.bounce ++;
});
</script>

<style lang="scss">
    .mark-item {
        @apply transition;
    }
    .mark-item-unselected {
        @apply opacity-30;
    }
    .marker-popup {
        @apply flex flex-col gap-2;
        @apply max-w-max;

        p { @apply m-0; }
        .title {
            @apply text-lg font-bold;
        }
    }
</style>