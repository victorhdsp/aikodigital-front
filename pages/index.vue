<template>
    <main class="main">
        <Map class="map" />
        <Aside />
    </main>
</template>

<script setup lang="ts">
import Map from '@/components/map/index.vue';
import Aside from '@/components/aside/index.vue';
</script>

<style scoped lang="scss">
.main {
    @apply grid grid-cols-3;
    @apply container;
    @apply h-screen;
    @apply p-8;

    .map {
        @apply col-span-2;
    }
}
</style>