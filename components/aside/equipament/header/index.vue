<template>
    <div class="header">
        <span class="top">
            <div>
                <h2>{{ props.name }}</h2>
                <p>{{ props.vehicle.name }}</p>
            </div>
            <div>
                <p>Produtividade: {{ productivity }}%</p>
                <h3>Lucro: R$ {{ price }}</h3>
            </div>
        </span>
        <Status :id="lastStatus.state" :date="lastStatus.date"/>
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import { getLastData, getProductivity, getProfitByEquipament } from "./useEquipament/index";
    import Status from "@/components/common/status/index.vue";
    
    const props = defineProps<EquipamentComplete>();
    const { lastStatus } = getLastData(props);

    const { productivity } = getProductivity(props);
    const { profit, cost } = getProfitByEquipament(props);
    
    const price = (profit + cost).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
</script>

<style scoped lang="scss">
    .header {
        @apply flex flex-col gap-2;
        @apply w-full;

        .top {
            @apply flex justify-between items-center;
            @apply w-full;

            h2, h3, p {
                @apply text-base;
            }
        }
    }
</style>