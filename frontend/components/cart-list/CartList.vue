<script setup lang="ts">
defineProps<{
  /** Корзина */
  cart: number[]
}>()
</script>

<template>
  <div v-if="cart.length" class="flex flex-col gap-y-8 sm:gap-y-12">
    <LazyCartListCard
      v-for="productId in cart"
      :key="productId"
      :product-id="productId"
    />
  </div>
  <h3 v-else class="text-neutral-500">Нет товаров</h3>
</template>
