<template>
    <main id="main">
        <Header class="header" />
        <Aside class="aside">
            <Filters />
            <Equipaments />
        </Aside>
        <Map class="map">
            <Marker 
                v-for="mark in marks"
                :id="mark.id"
                :key="mark.id"
                :lat="mark.lat"
                :lon="mark.lon"
            >
                <Popup v-bind="mark" />
                <Effect />
            </Marker>
        </Map>
    </main>
</template>

<script setup lang="ts">
    import Filters from '~/components/aside/equipaments/filters/index.vue';
    import Equipaments from '@/components/aside/equipaments/index.vue';
    import Map from '@/components/common/map/index.vue';
    import Marker from '@/components/common/map/marker/index.vue';
    import Aside from '@/components/common/aside/index.vue';
    import Popup from '~/components/map/popup/equipaments/index.vue';
    import type { MarkProps } from '~/components/map/popup/equipaments/type';
    import Effect from '~/components/map/effect/equipaments/index.vue';
    import Header from '~/components/header/index.vue';

    const map = useMapStore();
    const equipaments = useEquipamentsStore();
    const marks = ref<MarkProps[]>([]);

    watch(equipaments, ({list}) => {
        marks.value = list.map<MarkProps>((equipament) => ({
            id: equipament.id,
            lat: equipament.lat,
            lon: equipament.lon,
            options: {
                title: equipament.name,
                state: equipament.state,
                url: `/equipamento/${equipament.id}`,
            }
        }))
        
        if (list[0]) {
            map.setCenter(list[0].lat, list[0].lon);
        }
    });

    onMounted(() => {
        equipaments.fetchList();
    });
</script>

<style scoped lang="scss">
    #main {
        @apply grid grid-cols-3 grid-rows-[auto,1fr];
        @apply h-screen;

        .header {
            @apply col-span-1;
        }
        .aside {
            @apply col-span-1;
            @apply col-start-1;
        }
        .map {
            @apply col-span-2 row-span-2;
            @apply col-start-2 row-start-1;
        }
    }

    @media screen and (max-width: 768px) {
        #main {
            @apply grid-cols-1 grid-rows-[auto,30vh,1fr];

            .header {
                @apply col-span-1;
            }
            .aside {
                @apply col-span-1;
            }
            .map {
                @apply col-span-1 row-span-1;
                @apply row-start-2;
            }
        }
    }
</style>