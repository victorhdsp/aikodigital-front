<template>
    <CardFooter class="footer">
        <Button
            text="Ver equipamento"
            variant="secondary"
            :to="'/equipamento/' + props.equipament_id"
            :icon="ScanEye"
        />
    </CardFooter>
</template>

<script setup lang="ts">
import type { ActionsProps } from './type';
import { CardFooter } from "@/components/ui/card";
import Button from "@/components/common/button/index.vue";
import { ScanEye } from "lucide-vue-next"

const props = defineProps<ActionsProps>();
</script>

<style scoped lang="scss">
    .footer {
        @apply flex items-center justify-between;
    }
</style>