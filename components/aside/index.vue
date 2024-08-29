<template>
    <aside id="aside">
        <slot />
    </aside>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    #aside {
        @apply bg-secondary;
        @apply p-4;
        @apply flex flex-col items-center gap-4;
        @apply w-full h-full;
        @apply overflow-auto;
    }
</style>