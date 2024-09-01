<template>
    <CardHeader class="header">
        <div class="top">
            <CardTitle>{{ props.name }}</CardTitle>
            <CardDescription>{{ props.vehicle.name }}</CardDescription>
        </div>
        <div class="bottom">
            <Status :id="props.state"/>
            <p class="text-sm">
                {{ new Date(props.lastUpdateDate).toLocaleString() }}
            </p>
        </div>
    </CardHeader>
</template>

<script setup lang="ts">
import type { EquipamentSimple } from '@/assets/types/equipament';
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Status from "@/components/common/status/index.vue";

const props = defineProps<EquipamentSimple>();
</script>

<style scoped lang="scss">
    .header {
        .top {
            @apply flex items-center justify-between;
        }
        
        .bottom {
            @apply flex items-center justify-between;
        }
    }
</style>