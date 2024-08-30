<template>
    <aside id="aside">
        <slot />
    </aside>
</template>

<style scoped lang="scss">
    #aside {
        @apply bg-secondary;
        @apply p-4;
        @apply flex flex-col items-center gap-4;
        @apply w-full max-w-sm;
        @apply h-full;
        @apply overflow-auto;
    }
</style>