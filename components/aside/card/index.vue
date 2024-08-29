<template>
    <Card
        class="card"
        :onmouseenter="() => onMouseEnter(props.mark_id)"
        :onmouseleave="() => onMouseLeave()"
    >
        <slot />
    </Card>
</template>

<script setup lang="ts">
    import type { CardProps } from './type';
    import { Card } from "@/components/ui/card";
    import { onMouseEnter, onMouseLeave } from './useCard';

    const props = defineProps<CardProps>();
</script>

<style lang="scss">
    .card {
        @apply w-full;
    }
</style>