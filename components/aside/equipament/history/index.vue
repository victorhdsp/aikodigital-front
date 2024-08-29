<template>
    <div class="history">
        <Card 
            v-for="item in stateHistory" 
            :key="item.date.getTime()"
            :mark_id="`${item.date.getTime()}`"
        >
            <CardHeader>
                <CardDescription>
                    <ul class="states">
                        <li 
                            v-for="state in item.states"
                            :key="state.time"
                            class="status"
                        >
                            <div
                                :style="`--color: ${state.color};`"
                                class="icon"
                            />
                            <p>
                                {{ state.name }}, {{ state.time }}
                            </p>
                        </li>
                    </ul>
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import { CardHeader } from "@/components/ui/card";
    import Card from "@/components/aside/card/index.vue";
    import { organizeStateHistory } from "./useHistory";

    const props = defineProps<EquipamentComplete>();
    
    const stateHistory =  organizeStateHistory(
        props.stateHistory, 
        props.positionHistory
    );
</script>

<style scoped lang="scss">
    .history {
        @apply flex flex-col gap-2;
        @apply w-full h-full;
        @apply overflow-auto;

        .states {
            @apply flex flex-col;

            .status {
                @apply flex items-center gap-2;
    
                .icon {
                    @apply w-2 h-2 rounded-full;
                    background-color: var(--color);
                }
            }
        }
    }
</style>