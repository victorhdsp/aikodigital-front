<template>
    <NuxtLink :to="props.to">
        <Button 
            :variant="variant"
            class="flex gap-2"
            :size="size"
        >
            <component :is="props.icon" />
            <p v-if="props.text">{{ props.text }}</p>
        </Button>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { FunctionalComponent } from 'vue';
import type { ButtonVariants } from '~/components/ui/button';
import Button from '~/components/ui/button/Button.vue';

const props = defineProps<{
    to: string;
    icon: FunctionalComponent;
    text?: string;
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
}>();

const size = (props.text ? props.size : 'icon') || "default";
const variant = props.variant || "default";
</script>