<template>
    <Card
        class="card"
        :onmouseenter="onMouseEnter"
        :onmouseleave="onMouseLeave"
    >
        <slot />
    </Card>
</template>

<script setup lang="ts">
import type { CardProps } from './type';
import { Card } from "@/components/ui/card";

const props = defineProps<CardProps>();

function onMouseEnter() {
    const marks = document.querySelectorAll(`.mark-item`);
    const selectedMark = document.querySelector(`.mark-item-${props.id}`);

    marks.forEach((mark) => {
        if (mark !== selectedMark) {
            mark.classList.add('mark-item-unselected');
        }
    });
}

function onMouseLeave() {
    const marks = document.querySelectorAll(`.mark-item`);
    marks.forEach((mark) => mark.classList.remove('mark-item-unselected'));
}
</script>

<style lang="scss">
    .card {
        @apply w-full;
    }
</style>