<template>
    <div class="loader" />
</template>

<style scoped lang="scss">
    .loader {
        @apply w-12 h-7 relative;
        --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
        background: var(--_g) 50%  0, var(--_g) 100% 0;
        background-size: 12px 12px;
        animation: l23-0 1.5s linear infinite;

        &::before {
            content: "";
            @apply absolute left-0 top-0;
            @apply h-3 aspect-square rounded-full;
            @apply bg-black;
            animation: 
                l23-1 1.5s linear infinite,
                l23-2 0.5s cubic-bezier(0,200,.8,200) infinite;
        }
    }
      
    @keyframes l23-0 {
        0%,31%  {background-position: 50% 0   ,100% 0}
        33%     {background-position: 50% 100%,100% 0}
        43%,64% {background-position: 50% 0   ,100% 0}
        66%     {background-position: 50% 0   ,100% 100%}
        79%     {background-position: 50% 0   ,100% 0}
        100%    {transform:translateX(calc(-100%/3))}
    }
    @keyframes l23-1 {
        100% {left:calc(100% + 7px)}
    }
    @keyframes l23-2 {
        100% {top:-0.1px}
    }
</style>
