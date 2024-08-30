<template>
    <CardFooter class="footer">
        <Button
            text="Ver equipamento"
            variant="secondary"
            :to="'/equipamento/' + props.equipament_id"
            :icon="ScanEye"
        />
        <!-- <Button
            variant="default"
            :to="'/veiculo/' + props.vehicle_id"
            :icon="Bus"
        /> -->
    </CardFooter>
</template>

<script setup lang="ts">
import type { ActionsProps } from './type';
import { CardFooter } from "@/components/ui/card";
import Button from "@/components/common/button/index.vue";
import { ScanEye, Bus } from "lucide-vue-next"

const props = defineProps<ActionsProps>();
</script>

<style scoped lang="scss">
    .footer {
        @apply flex items-center justify-between;
    }
</style>