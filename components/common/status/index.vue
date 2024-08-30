<template>
    <div class="status">
        <div :style="`--color: ${props.color};`" class="icon" />
        <p>{{ props.name }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        name: string;
        color: string;
    }>();
</script>

<style lang="scss">
    .status {
        @apply flex items-center gap-2;
        @apply text-sm;

        .icon {
            @apply w-2 h-2 rounded-full;
            background-color: var(--color);
        }
    }
</style>