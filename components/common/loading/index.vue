<template>
    <div class="loading">
        <Loader />
    </div>
</template>

<script setup lang="ts">
    import Loader from '@/components/common/loading/loader/index.vue';
</script>

<style scoped lang="scss">
    .loading {
        @apply flex justify-center items-center;
        @apply w-full h-full;
        @apply bg-slate-200;
    }
</style>
