<template>
    <Card
        class="equipament"
        :onmouseenter="onMouseEnter"
        :onmouseleave="onMouseLeave"
    >
        <CardHeader class="header">
            <div class="top">
                <CardTitle>{{ props.name }}</CardTitle>
                <CardDescription>{{ props.veicule }}</CardDescription>
            </div>
            <div class="bottom">
                <p class="text-sm">
                    {{ new Date(props.lastUpdate).toLocaleString() }}
                </p>
                <div :style="`--color: ${props.state.color};`" class="status" />
            </div>
        </CardHeader>
        <CardFooter class="footer">
            <Button 
                variant="secondary" 
                class="flex gap-2"
            >
                <ScanEye />
                <p>Ver equipamento</p>
            </Button>
            <Button size="icon">
                <Bus />
            </Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
import type { EquipamentSimple } from '@/assets/types/equipament';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanEye, Bus } from "lucide-vue-next"

const props = defineProps<EquipamentSimple>();

function onMouseEnter() {
    const equipament = document.querySelector(`.mark_${props.id}`);
    equipament?.classList.add('mark-equipament-selected');
}

function onMouseLeave() {
    const equipament = document.querySelector(`.mark_${props.id}`);
    equipament?.classList.remove('mark-equipament-selected');
}
</script>

<style lang="scss">
    .equipament {
        @apply w-full;
        @apply cursor-pointer;

        .header {
            .top {
                @apply flex items-center justify-between;
            }
            
            .bottom {
                @apply flex items-center justify-between;

                .status {
                    @apply w-2 h-2 rounded-full;
                    background-color: var(--color);
                }
            }
        }

        .footer {
            @apply flex items-center justify-between;
        }
    }
</style>