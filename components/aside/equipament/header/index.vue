<template>
    <div class="header">
        <h2>Equipamento: {{ props.name }}</h2>
        <h3>Veículo: {{ props.vehicle.name }}</h3>
        
        <div class="lastUpdate">
            <h4>Última atualização:</h4>
            <div class="status">
                <div :style="`--color: ${lastStatus.state.color};`" class="icon" />
                <p>{{ lastStatus.state.name }}</p>
            </div>
            <p>{{ new Date(lastUpdate).toLocaleString() }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
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
            @apply flex flex-col gap-1;

            .status {
                @apply flex gap-2 items-center;
                .icon {
                    @apply w-2 h-2 rounded-full;
                    background-color: var(--color);
                }
            }
        }
    }
</style>