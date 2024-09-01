<template>
    <aside id="aside">
        <div class="main">
            <slot />
        </div>
    </aside>
</template>

<style scoped lang="scss">
    #aside {
        @apply p-4;

        .main {
            @apply flex flex-col gap-4;
            @apply h-full;
        }
    }
</style>