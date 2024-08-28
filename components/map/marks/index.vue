<template>
    <Mark 
        v-for="mark in data.marks"
        :key="mark.id"
        v-bind="mark"
    />
</template>

<script setup lang="ts">
    import Mark from "@/components/map/marks/mark/index.vue";
    const data = useStore();
</script>