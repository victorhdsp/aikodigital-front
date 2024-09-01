<template>
    <LPopup class="marker-popup">
        <Status
            v-for="state, index in props.options.states"
            :id="state.id"
            :key="`${props.id}-${index}`"
            :data="state.time"
        />
    </LPopup>
</template>

<script setup lang="ts">
    import { LPopup } from '@vue-leaflet/vue-leaflet';
    import type { MarkProps } from './type';
    import Status from '@/components/common/status/index.vue';

    const props = defineProps<MarkProps>();
</script>

<style lang="scss">
    .marker-popup {
        @apply flex flex-col gap-2;
        @apply max-w-max;

        p { @apply m-0; }
        .title {
            @apply text-lg font-bold;
        }
    }
</style>