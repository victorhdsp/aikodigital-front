<template>
    <LPopup class="marker-popup">
        <p class="title">
            {{ props.options.title }}
        </p>
        <Status
            :id="props.options.state"
        />
        <Button
            text="Ver"
            :to="props.options.url"
            :icon="ScanEye"
        />
    </LPopup>
</template>

<script setup lang="ts">
    import { LPopup } from '@vue-leaflet/vue-leaflet';
    import { ScanEye } from "lucide-vue-next";
    import type { MarkProps } from './type';
    import Status from '@/components/common/status/index.vue';
    import Button from '@/components/common/button/index.vue';

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