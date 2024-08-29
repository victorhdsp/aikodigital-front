<template>
    <main class="main">
        <Map class="map" />
        <Aside class="aside">
            <Equipaments />
        </Aside>
    </main>
</template>

<script setup lang="ts">
    import Map from '@/components/map/index.vue';
    import Aside from '@/components/aside/index.vue';
    import Equipaments from '@/components/aside/equipaments/index.vue';

    const equipaments = useEquipamentsStore();
    const marks = useMarksStore();

    equipaments.fetchList().then((data) => {
        marks.set(data.map((equipament) => ({
            id: equipament.id,
            lat: equipament.lat,
            lon: equipament.lon,
            title: equipament.name,
        })));
    });

</script>

<style scoped lang="scss">
.main {
    @apply grid grid-cols-8;
    @apply container;
    @apply h-screen;
    @apply p-8;

    .map {
        @apply col-span-5;
    }
    .aside {
        @apply col-span-3;
    }
}
</style>