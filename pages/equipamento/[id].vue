<template>
    <main id="main">
        <Header class="header" />
        <Aside class="aside">
            <Equipament />
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
            </Marker>
        </Map>
    </main>
</template>

<script setup lang="ts">
    import Equipament from '@/components/aside/equipament/index.vue';
    import Map from '@/components/common/map/index.vue';
    import Marker from '@/components/common/map/marker/index.vue';
    import Aside from '@/components/common/aside/index.vue';
    import Popup from '~/components/map/popup/equipament/index.vue';
    import type { MarkProps } from '~/components/map/popup/equipament/type';

    const equipament = useEquipamentStore();
    const route = useRoute()

    const id = route.params.id;
    const marks = ref<MarkProps[]>();

    const map = useMapStore();

    watch(equipament, ({stateHistory}) => {
        const positions = stateHistory.map<MarkProps>((item) => {
            return {
                id: `${new Date(item.date).getTime()}`,
                lat: item.position.lat,
                lon: item.position.lon,
                options: {
                    states: item.states
                },
            };
        });
        
        marks.value = positions;

        if (positions[0]) {
            map.setCenter(positions[0].lat, positions[0].lon);
        }
    });

    onMounted(() => {
        if (typeof id === 'string') {
            equipament.fetchById(id);
        }
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