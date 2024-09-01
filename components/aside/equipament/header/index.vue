<template>
    <div class="header">
        <h2>Equipamento: {{ props.name }}</h2>
        <Status 
            :name="`${lastStatus.state.name}, ${lastUpdate}`" 
            :color="lastStatus.state.color"
        />
        <h3>Veículo: {{ props.vehicle.name }}</h3>
        <p>Produtividade geral: {{ productivity }}%</p>
        <p>Lucro: R$ {{ price }}</p>
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import { getLastData, getProductivity, getProfitByEquipament } from "./useEquipament/index";
    import Status from "@/components/common/status/index.vue";
    
    const props = defineProps<EquipamentComplete>();
    const { lastStatus, lastUpdate } = getLastData(props);

    const { productivity } = getProductivity(props);
    const { profit, cost } = getProfitByEquipament(props);
    
    const price = (profit + cost).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
</script>

<style scoped lang="scss">
    .header {
        @apply flex flex-col items-center gap-2;
        @apply w-full;
    }
</style>