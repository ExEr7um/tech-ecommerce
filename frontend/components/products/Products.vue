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
    <div class="flex items-center gap-x-4">
      <Icon :name="category.icon" />
      <h2>{{ category.title }}</h2>
    </div>
    <ProductsList :category="categoryId" />
  </div>
</template>
