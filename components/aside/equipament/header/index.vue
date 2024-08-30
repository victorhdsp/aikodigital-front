<template>
    <div class="header">
        <h2>Equipamento: {{ props.name }}</h2>
        <div class="lastUpdate">
            <Status 
                :name="lastStatus.state.name" 
                :color="lastStatus.state.color"
            />
            <p>{{ new Date(lastUpdate).toLocaleString() }}</p>
        </div>
        <h3>Veículo: {{ props.vehicle.name }}</h3>
        
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import Status from "@/components/common/status/index.vue";
    const props = defineProps<EquipamentComplete>();

    const lastStatus = props.stateHistory[
        props.stateHistory.length - 1
    ];
    const lastPosition = props.positionHistory[
        props.positionHistory.length - 1
    ];
    const lastUpdate = lastStatus.date > lastPosition.date
        ? lastStatus.date
        : lastPosition.date;
</script>

<style scoped lang="scss">
    .header {
        @apply flex flex-col gap-2;
        @apply w-full;

        .lastUpdate {
            @apply flex justify-between;
        }
    }
</style>