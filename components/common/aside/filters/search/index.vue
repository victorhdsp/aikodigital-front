<template>
    <div class="root">
        <Input 
            id="search"
            type="text"
            placeholder="Pesquisar..."
            class="input"
            :oninput="props.oninput"
        />
        <Search
            class="icon"
        />
    </div>
</template>

<script setup lang="ts">
    import { Search } from 'lucide-vue-next'
    import { Input } from '@/components/ui/input'
    
    const props = defineProps<{
        oninput: (event: Event) => void
    }>()
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