<template>
    <main class="main">
        <Map class="map" />
        <Aside class="aside">
            <Equipament
                v-if="equipament.item"
                v-bind="equipament.item"
            />
        </Aside>
    </main>
</template>

<script setup lang="ts">
    import Map from '@/components/map/index.vue';
    import Aside from '@/components/aside/index.vue';
    import Equipament from '@/components/aside/equipament/index.vue';

    const equipament = useEquipamentStore();
    const marks = useMarksStore();
    const route = useRoute()
    const id = route.params.id;

    if (typeof id === 'string') {
        equipament.fetchById(id).then((data) => {
            const positions = data.positionHistory.map((position) => {
                return {
                    id: `${new Date(position.date).getTime()}`,
                    lat: position.lat,
                    lon: position.lon,
                    title: position.date,
                };
            });

            marks.set(positions);
        });
    }
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