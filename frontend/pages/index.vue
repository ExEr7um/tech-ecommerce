<script setup lang="ts">
const categories = await useStrapi().find<Category>("categories")

useSeoMeta({
  description: "ВКР на тему «Интернет-магазин компьютерной техники».",
  title: "Главная",
})
</script>

<template>
  <div>
    <TheHero />
    <Products
      v-for="category in categories.data"
      :key="category.id"
      :category="category.attributes"
      :category-id="category.id"
    />
  </div>
</template>
