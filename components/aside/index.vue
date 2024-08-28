<template>
    <aside id="header">
        <Search />
    </aside>
</template>

<script setup lang="ts">
import Search from '@/components/aside/search/index.vue';
</script>

<style scoped lang="scss">
    #header {
        @apply bg-secondary;
        @apply flex flex-col items-center p-4;
        @apply w-full;
    }
</style>