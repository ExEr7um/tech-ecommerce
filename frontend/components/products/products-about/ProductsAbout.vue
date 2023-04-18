<script setup lang="ts">
defineProps<{
  /** Информация о продукте */
  aboutList: ProductAbout[]
}>()
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <h2>О продукте</h2>
    <div
      class="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductsAboutCard
        v-for="about in aboutList"
        :key="about.title"
        :about="about"
      />
    </div>
  </div>
</template>
