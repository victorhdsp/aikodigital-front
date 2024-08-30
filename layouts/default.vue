<template>
    <div class="body">
        <Header />
        <NuxtPage/>
    </div>
</template>

<script setup lang="ts">
    import Header from '~/components/header/index.vue';
</script>

<style lang="scss" scoped>
    .body {
        @apply flex flex-col;
        @apply w-full h-screen;
        @apply relative;
        @apply bg-gray-50;
        @apply p-8;
    }
</style>