<template>
    <aside id="aside">
        <Search />
        <div class="box">
            <slot />
        </div>
    </aside>
</template>

<script setup lang="ts">
    import Search from '@/components/aside/search/index.vue';
</script>

<style scoped lang="scss">
    #aside {
        @apply bg-secondary;
        @apply p-4;
        @apply flex flex-col items-center gap-4;
        @apply w-full h-full;
        @apply overflow-auto;

        .box {
            @apply w-full h-full;
            @apply overflow-auto;
        }
    }
</style>