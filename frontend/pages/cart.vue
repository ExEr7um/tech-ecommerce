<script setup lang="ts">
/** Корзина */
const cart: Ref<number[]> = useCookie("cart", {
  default: () => [],
})

/** Суммарная цена */
const totalPrice = ref(0)

provide("totalPrice", totalPrice)
provide("cart", cart)
</script>

<template>
  <div>
    <div class="flex items-end gap-x-3">
      <h1>Ваша корзина</h1>
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-lime-300"
      >
        {{ cart.length }}
      </div>
    </div>
    <CartList :cart="cart" />
    <div
      v-if="cart.length"
      class="flex flex-col-reverse gap-x-8 gap-y-4 sm:mt-12 sm:flex-row"
    >
      <button class="button primary w-full px-12 sm:w-max">
        Оформить заказ
      </button>
      <div class="flex w-max items-end gap-x-3 rounded-lg bg-neutral-900 p-4">
        <h3 class="text-neutral-500">Сумма</h3>
        <h2 class="text-lime-300">{{ usePriceFormatter(totalPrice) }}</h2>
      </div>
    </div>
  </div>
</template>
