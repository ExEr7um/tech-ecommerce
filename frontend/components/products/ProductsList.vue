<script setup lang="ts">
const props = defineProps<{
  /** `ID` категории для фильтрации */
  category: number
}>()

const products = await useStrapi().find<Product>("products", {
  filters: {
    category: props.category,
  },
  populate: ["image", "brand"],
})
</script>

<template>
  <div
    class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <ProductsListCard
      v-for="product in products.data"
      :key="product.id"
      :product="product.attributes"
      :product-id="product.id"
    />
  </div>
</template>
