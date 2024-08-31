<template>
    <ScrollArea>
        <div class="history">
            <Card 
                v-for="item in equipament.stateHistory" 
                :key="item.date.getTime()"
                :mark_id="`${item.date.getTime()}`"
            >
                <CardHeader>
                    <CardDescription>
                        <ul class="states">
                            <li 
                                v-for="state in item.states"
                                :key="state.time"
                            >
                                <Status 
                                    :name="`${state.name}, ${state.time}`" 
                                    :color="state.color"
                                />
                            </li>
                        </ul>
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    </ScrollArea>
</template>

<script setup lang="ts">
    import { CardHeader } from "@/components/ui/card";
    import Card from "@/components/common/aside/card/index.vue";
    import Status from "@/components/common/status/index.vue";
    import ScrollArea from "@/components/common/scroll-area/index.vue";
    
    const equipament = useEquipamentStore();
</script>

<style scoped lang="scss">
    .history {
        @apply flex flex-col gap-2;
        @apply w-full h-full;
        @apply overflow-auto;

        .states {
            @apply flex flex-col;
        }
    }
</style>