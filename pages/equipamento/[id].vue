<template>
    <Layout>
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
        <Aside class="aside">
            <Equipament
                v-if="equipament.item"
                v-bind="equipament.item"
            />
        </Aside>
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '~/components/layout/default.vue';
    import Equipament from '@/components/aside/equipament/index.vue';
    import Map from '@/components/common/map/index.vue';
    import Marker from '@/components/common/map/marker/index.vue';
    import Aside from '@/components/common/aside/index.vue';
    import Popup from '~/components/map/popup/equipament/index.vue';
    import type { MarkProps } from '~/components/map/popup/equipament/type';
    import { organizeStateHistory } from '~/components/aside/equipament/history/useHistory';

    const equipament = useEquipamentStore();
    const route = useRoute()
    const id = route.params.id;
    const marks = ref<MarkProps[]>();
    const map = useMapStore();

    if (typeof id === 'string') {
        watch(equipament, ({item}) => {
            if (!item) return;

            const stateHistory =  organizeStateHistory(
                item.stateHistory, 
                item.positionHistory
            );
            
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

        equipament.fetchById(id)
    }
</script>

<style scoped lang="scss">

</style>