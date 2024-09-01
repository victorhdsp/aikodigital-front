<template>
    <div class="body">
        <NuxtPage/>
    </div>
</template>

<style lang="scss" scoped>
    .body {
        @apply flex flex-col;
        @apply w-full h-screen;
        @apply relative;
        @apply bg-gray-50;
    }

    @media screen and (max-width: 768px) {
        .body {
            @apply h-auto;
        }
    }
</style>