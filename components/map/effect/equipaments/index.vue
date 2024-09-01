<template>
    <span/>
</template>
<script setup lang="ts">
    const hue: { id:string, hue:string }[] = []
    
    const equipaments = useEquipamentsStore();
    const length = equipaments.list.length;
    equipaments.list.forEach((equipament, index) => {
        hue.push({
            id: equipament.id,
            hue: `hue-rotate(${(360/length) * index}deg)`
        });
    });
    
    const map = useMapStore();
    
    watch(map, () => {
        hue.forEach((item) => {
            const className = `.mark-item-${item.id}`;
            const element = document.querySelector<HTMLElement>(className);
            if (element) element.style.filter = item.hue;
        });
    });
</script>