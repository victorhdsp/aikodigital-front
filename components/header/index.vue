<template>
    <header class="header">
        <NuxtLink class="logo" to="/">
            <img
                src="/images/aiko.png"
                alt="Logo Aiko"
                width="50"
                height="24"
            >
        </NuxtLink>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .header {
        @apply flex items-center justify-center;
        @apply w-full;
        @apply px-8 py-3;
        @apply bg-white;
        @apply rounded-t-lg;
    }
</style>