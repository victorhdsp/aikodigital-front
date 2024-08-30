<template>
    <Layout>
        <Map
            :c-ref="map"
            class="map"
        >
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
        <Aside class="aside">
            <Filters />
            <Equipaments />
        </Aside>
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '~/components/layout/default.vue';
    import Filters from '~/components/aside/equipaments/filters/index.vue';
    import Equipaments from '@/components/aside/equipaments/index.vue';
    import Map from '@/components/common/map/index.vue';
    import Marker from '@/components/common/map/marker/index.vue';
    import Aside from '@/components/common/aside/index.vue';
    import Popup from '~/components/map/popup/equipaments/index.vue';
    import type { MarkProps } from '~/components/map/popup/equipaments/type';

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

    equipaments.fetchList();
</script>