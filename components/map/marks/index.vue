<template>
    <Mark 
        v-for="mark in marks" 
        :id="mark.id"
        :key="mark.id"
        :lat="mark.lat"
        :lng="mark.lng"
        :title="mark.title"
    />
</template>

<script setup lang="ts">
import Mark from "@/components/map/marks/mark/index.vue";
import equipaments from "@/data/equipment.json";
import equipamentsPositions from "@/data/equipmentPositionHistory.json";

import type { MarkProps } from "./mark/type";

const marks:MarkProps[] = [];

equipaments.forEach((equipament) => {
    const position = equipamentsPositions.find(
        (position) => position.equipmentId === equipament.id
    );

    if (position) {
        marks.push({
            id: equipament.id,
            lat: position.positions.reverse()[0].lat,
            lng: position.positions.reverse()[0].lon,
            title: equipament.name
        });
    }
});
</script>