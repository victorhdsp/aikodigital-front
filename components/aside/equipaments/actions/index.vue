<template>
    <CardFooter class="footer">
        <NuxtLink :to="`/equipamento/${props.equipament_id}`">
            <Button variant="secondary" class="flex gap-2">
                <ScanEye />
                <p>Ver equipamento</p>
            </Button>
        </NuxtLink>
        <NuxtLink :to="`/veiculo/${props.vehicle_id}`">
            <Button size="icon">
                <Bus />
            </Button>
        </NuxtLink>
    </CardFooter>
</template>

<script setup lang="ts">
import type { ActionsProps } from './type';
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanEye, Bus } from "lucide-vue-next"

const props = defineProps<ActionsProps>();
</script>

<style lang="scss">
    .footer {
        @apply flex items-center justify-between;
    }
</style>