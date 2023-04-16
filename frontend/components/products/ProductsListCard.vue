<script setup lang="ts">
defineProps<{
  /** Продукт */
  product: Product
  /** `ID` продукта */
  productId: number
}>()
</script>

<template>
  <NuxtLink class="group flex flex-col gap-y-6" :to="`/products/${productId}/`">
    <img
      :alt="product.title"
      class="aspect-square rounded-lg bg-neutral-900 object-contain transition-colors group-hover:bg-neutral-800"
      :src="useRuntimeConfig().strapi.url + product.image?.data.attributes.url"
    />
    <div class="flex flex-col gap-y-3">
      <div class="flex flex-col gap-y-1">
        <p>{{ product.brand?.data.attributes.title }}</p>
        <h4 class="group-hover:text-lime-300">{{ product.title }}</h4>
      </div>
      <p class="line-clamp-4 text-sm">{{ product.description }}</p>
      <h3 class="mt-4">{{ usePriceFormatter(product.price) }}</h3>
    </div>
  </NuxtLink>
</template>
