<template>
    <div class="equipament">
        <Header v-bind="props" />
        <History v-bind="props" />
    </div>
</template>

<script setup lang="ts">    
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import Header from "@/components/aside/equipament/header/index.vue";
    import History from "@/components/aside/equipament/history/index.vue";

    const props = defineProps<EquipamentComplete>();
</script>

<style scoped lang="scss">
    .equipament {
        @apply flex flex-col gap-4;
        @apply w-full h-full;
        @apply overflow-auto;
    }
</style>