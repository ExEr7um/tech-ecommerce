<script setup lang="ts">
defineProps<{
  /** Цена продукта */
  price: number
}>()
</script>

<template>
  <div class="flex w-max flex-col gap-y-1 rounded-lg bg-neutral-900 px-5 py-3">
    <p>Стоимость</p>
    <h2>{{ usePriceFormatter(price) }}</h2>
  </div>
</template>
