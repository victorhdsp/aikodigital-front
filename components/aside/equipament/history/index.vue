<template>
    <div class="history">
        <Card 
            v-for="item in stateHistory" 
            :id="`${item.date.getTime()}`"
            :key="item.date.getTime()"
        >
            <CardHeader>
                <CardDescription>
                    <ul class="states">
                        <li 
                            v-for="state in item.states"
                            :key="state.time"
                            class="status"
                        >
                            <div :style="`--color: ${state.color};`" class="icon" />
                            <p>{{ state.name }}, {{ state.time }}</p>
                        </li>
                    </ul>
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import type { EquipamentComplete } from "~/assets/types/equipament";
    import { CardHeader, CardTitle } from "@/components/ui/card";
    import type { StateHistory } from "./type";
    import Card from "@/components/aside/card/index.vue";

    const props = defineProps<EquipamentComplete>();
    const bruteStateHistory: StateHistory[] = props.positionHistory.map((position, index) => {
        const positionDate = new Date(position.date);

        const filteredStates = props.stateHistory.filter((state) => {
            const stateDate = new Date(state.date);
            if(stateDate.getTime() < positionDate.getTime()) return false;
            if(index + 1 < props.positionHistory.length) {
                const nextPosition = new Date(props.positionHistory[index + 1].date);
                if(stateDate.getTime() >= nextPosition.getTime()) return false;
            }
            return state;
        });

        return {
            date: positionDate,
            states: filteredStates.map((state) => {
                const stateDate = new Date(state.date);
                return {
                    name: state.state.name,
                    color: state.state.color,
                    time: stateDate.toLocaleString(),
                };
            })
        }
    })

    const stateHistory = bruteStateHistory.filter((state) => state.states.length > 0);
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