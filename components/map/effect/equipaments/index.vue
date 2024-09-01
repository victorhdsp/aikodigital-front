<script setup lang="ts">
    const map = useMapStore();

    function activeEffect() {
        if (map.bounce) {
            const marks = document.querySelectorAll<HTMLImageElement>(".mark-item");

            marks.forEach((mark, index) => {
                const percent = (360/marks.length) * index;
                mark.style.filter = `hue-rotate(${percent}deg)`;
            });
        }
    }

    watch(map, () => activeEffect());
</script>