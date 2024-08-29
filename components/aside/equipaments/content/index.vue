<template>
    <CardHeader class="header">
        <div class="top">
            <CardTitle>{{ props.name }}</CardTitle>
            <CardDescription>{{ props.vehicle.name }}</CardDescription>
        </div>
        <div class="bottom">
            <p class="text-sm">
                {{ new Date(props.lastUpdate).toLocaleString() }}
            </p>
            <div :style="`--color: ${props.state.color};`" class="status" />
        </div>
    </CardHeader>
</template>

<script setup lang="ts">
import type { EquipamentSimple } from '@/assets/types/equipament';
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const props = defineProps<EquipamentSimple>();
</script>

<style lang="scss">
    .header {
        .top {
            @apply flex items-center justify-between;
        }
        
        .bottom {
            @apply flex items-center justify-between;

            .status {
                @apply w-2 h-2 rounded-full;
                background-color: var(--color);
            }
        }
    }
</style>