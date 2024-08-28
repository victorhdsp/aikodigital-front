<template>
    <div class="equipaments">
        <Item 
            v-for="equipament in data.equipaments"
            :key="equipament.id"
            v-bind="equipament"
        />
    </div>
</template>

<script setup lang="ts">
    import Item from "@/components/aside/equipaments/item/index.vue";
    const data = useStore();
</script>

<style scoped lang="scss">
    .equipaments {
        @apply flex flex-col gap-2;
        @apply w-full;
    }
</style>