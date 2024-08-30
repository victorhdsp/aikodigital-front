<template>
    <div class="filters">
        <Search :oninput="handleSearch" />
    </div>
</template>

<script setup lang="ts">
    import Search from "~/components/common/aside/filters/search/index.vue";

    const search = ref<string>("");
    const useEquipaments = useEquipamentsStore();

    function handleSearch(event: Event) {
        search.value = (event.target as HTMLInputElement).value;
        useEquipaments.filterBySearch(search.value);
    }
</script>

<style scoped lang="scss">
    .filters {
        @apply flex flex-col gap-4;
        @apply w-full;
    }
</style>