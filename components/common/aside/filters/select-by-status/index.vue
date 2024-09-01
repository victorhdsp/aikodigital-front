<template>
    <div class="root">
        <Select @update:model-value="props.onchange">
            <SelectTrigger>
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem 
                    v-for="id, key in ui.states"
                    :key="key"
                    :value="`${key}`"
                >
                    <Status :id="`${key}`"/>
                </SelectItem>
            </SelectContent>
        </Select>
    </div>
</template>

<script setup lang="ts">
    import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
    import Status from '@/components/common/status/index.vue';
    const props = defineProps<{
        onchange: (status: string) => void;
    }>();
    
    const { ui } = useApplicationStore();
</script>

<style scoped lang="scss">
    .root {
        @apply relative;
        @apply w-full;
        @apply flex items-center;

        .input {
            @apply pl-9;
        }

        .icon {
            @apply absolute top-1/2 left-2;
            @apply transform -translate-y-1/2;
        }
    }
</style>