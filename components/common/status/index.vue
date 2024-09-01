<template>
    <div v-if="state" class="status">
        <div :style="`--color: ${state.color};`" class="icon" />
        <p>{{ state.name }}</p>
        <p v-if="props.date">- {{ props.date }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        id:string,
        date?:string
    }>();

    const { ui } = useApplicationStore();
    const state = ref(ui.states[props.id]);
</script>

<style scoped lang="scss">
    .status {
        @apply flex items-center gap-2;
        @apply text-sm;

        .icon {
            @apply w-2 h-2 rounded-full;
            background-color: var(--color);
        }
    }
</style>