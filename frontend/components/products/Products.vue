<script setup lang="ts">
defineProps<{
  /** Категория */
  category: Category
  /** `ID` категории для фильтрации */
  categoryId: number
}>()
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <ProductsCategory :icon="category.icon" :title="category.title" />
    <ProductsList :category="categoryId" />
  </div>
</template>
