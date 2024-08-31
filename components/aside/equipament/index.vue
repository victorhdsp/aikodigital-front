<template>
    <div class="equipament">
        <Header
            v-if="equipament.item"
            v-bind="equipament.item"
        />
        <Filters />
        <History />
    </div>
</template>

<script setup lang="ts">    
    import Header from "@/components/aside/equipament/header/index.vue";
    import History from "@/components/aside/equipament/history/index.vue";
    import Filters from "@/components/aside/equipament/filters/index.vue";

    const equipament = useEquipamentStore();
</script>

<style scoped lang="scss">
    .equipament {
        @apply flex flex-col gap-4;
        @apply w-full h-full;
        @apply overflow-hidden;
    }
</style>