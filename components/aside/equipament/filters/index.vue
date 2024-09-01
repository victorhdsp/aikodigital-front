<template>
    <div class="filters">
        <Search class="search" :oninput="handleSearch" />
        <SelectByStatus class="status" :onchange="handleStatusChange" />
    </div>
</template>

<script setup lang="ts">
    import Search from "~/components/common/aside/filters/search/index.vue";
    import SelectByStatus from "~/components/common/aside/filters/select-by-status/index.vue";

    const search = ref<string>("");
    const useEquipament = useEquipamentStore();

    function handleSearch(event: Event) {
        search.value = (event.target as HTMLInputElement).value;
        useEquipament.filterBySearch(search.value);
    }

    function handleStatusChange(status: string) {
        useEquipament.filterByStatus(status);
    }
</script>

<style scoped lang="scss">
    .filters {
        @apply grid grid-cols-5 gap-2;
        @apply w-full;

        .search {
            @apply col-span-3;
        }
        .status {
            @apply col-span-2;
        }
    }
</style>