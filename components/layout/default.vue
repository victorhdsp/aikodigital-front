<template>
    <main class="main">
        <slot />
    </main>
</template>

<style scoped lang="scss">
.main {
    @apply flex;
    @apply h-full overflow-hidden;
    @apply rounded-b-lg;
}
</style>