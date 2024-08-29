<template>
    <div class="equipaments">
        <Card 
            v-for="equipament in equipaments.list" 
            :id="equipament.id"
            :key="equipament.id"
        >
            <Content 
                v-bind="equipament"
            />
            <Actions
                :equipament_id="equipament.id"
                :vehicle_id="equipament.vehicle.id"
            />
        </Card>
    </div>
</template>

<script setup lang="ts">
    import Content from "@/components/aside/equipaments/content/index.vue";
    import Actions from "@/components/aside/equipaments/actions/index.vue";
    import Card from "@/components/aside/card/index.vue";
    const equipaments = useEquipamentsStore();
</script>

<style scoped lang="scss">
    .equipaments {
        @apply flex flex-col gap-2;
        @apply w-full h-full;
        @apply overflow-auto;
    }
</style>