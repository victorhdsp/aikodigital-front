<template>
    <div class="root">
        <div class="area">
            <ScrollArea class="scroll">
                <slot />
            </ScrollArea>
        </div>
    </div>
</template>

<script setup lang="ts">    
    import ScrollArea from "@/components/ui/scroll-area/ScrollArea.vue";
</script>

<style scoped lang="scss">
    .root {
        @apply relative w-full h-full;
        
        .area {
            @apply absolute;
            @apply flex;
            @apply w-full h-full;
    
            .scroll {
                @apply flex flex-col;
                @apply w-full h-full;
            }
        }
    }
</style>