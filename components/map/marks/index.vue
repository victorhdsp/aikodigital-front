<template>
    <Mark 
        v-for="mark in marks.list"
        :key="mark.id"
        v-bind="mark"
    />
</template>

<script setup lang="ts">
    import Mark from "@/components/map/marks/mark/index.vue";
    const marks = useMarksStore();
</script>