<template>
    <div id="map">
      <ClientOnly>
        <template #default>
          <Body>
            <Head />
            <Marks />
          </Body>
        </template>

        <template #fallback>
          <Loading />
        </template>
      </ClientOnly>
    </div>
</template>

<script setup lang="ts">
  import Body from "@/components/map/body/index.vue";
  import Head from "@/components/map/head/index.vue";
  import Marks from "@/components/map/marks/index.vue";
  import Loading from "@/components/map/loading.vue";
</script>

<style scoped lang="scss">
#map {
    @apply w-full h-full;
}
</style>