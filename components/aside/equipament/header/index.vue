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
        <div class="bottom">
            <span
                v-for="earning in props.vehicle.hourlyEarnings"
                :key="`${earning.state}-${props.id}`"
                class="earning"
            >
                <div :style="`--color: ${ui.states[earning.state].color};`" class="icon" />
                <p>R$ {{ currency(earning.value) }}</p>
            </span>
        </div>
        <Status :id="lastStatus.state" :date="lastStatus.date"/>
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import { getLastData, getProductivity, getProfitByEquipament } from "./useEquipament/index";
    import Status from "@/components/common/status/index.vue";

    const currency = (value: number) => {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }
    
    const props = defineProps<EquipamentComplete>();
    const { lastStatus } = getLastData(props);

    const { productivity } = getProductivity(props);
    const { profit, cost } = getProfitByEquipament(props);
    
    const price = currency(profit + cost);

    const { ui } = useApplicationStore();
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

        .bottom {
            @apply grid grid-cols-3 gap-4;
            @apply text-sm;
    
            .earning {
                @apply flex items-center justify-center gap-2;
                @apply bg-gray-100 rounded-md;
                @apply p-2;

                .icon {
                    @apply w-2 h-2 rounded-full;
                    background-color: var(--color);
                }
            }
        }
    }
</style>