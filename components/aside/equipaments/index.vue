<template>
    <ScrollArea>
        <div class="equipaments">
            <Card 
                v-for="equipament in equipaments.list" 
                :key="equipament.id"
                :mark_id="equipament.id"
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
    </ScrollArea>
</template>

<script setup lang="ts">
    import Content from "~/components/aside/equipaments/content/index.vue";
    import Actions from "@/components/aside/equipaments/actions/index.vue";
    import Card from "@/components/common/aside/card/index.vue";
    import ScrollArea from "~/components/common/scroll-area/index.vue";
    
    const equipaments = useEquipamentsStore();
</script>

<style scoped lang="scss">
    .equipaments {
        @apply flex flex-col gap-2;
        @apply w-full;
        @apply p-2;
    }
</style>