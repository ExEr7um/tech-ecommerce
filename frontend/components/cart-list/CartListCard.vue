<script setup lang="ts">
const props = defineProps<{
  /** `ID` товара в корзине */
  productId: number
}>()

const product = await useStrapi().findOne<
  Pick<Product, "title" | "price" | "image" | "brand">
>("products", props.productId, {
  fields: ["title", "price"],
  populate: ["image", "brand"],
})

/**
 * Суммарная цена
 *
 * @see `pages/cart.vue`
 */
const totalPrice = inject<Ref<number>>("totalPrice") ?? ref(0)
totalPrice.value += product.data.attributes.price

/**
 * Корзина
 *
 * @see `pages/cart.vue`
 */
const cart = inject<Ref<number[]>>("cart") ?? ref([])

onUnmounted(() => {
  totalPrice.value -= product.data.attributes.price
})
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-x-6 sm:gap-x-8">
      <img
        :alt="product.data.attributes.title"
        class="h-32 w-32 rounded-lg bg-neutral-900 object-contain sm:h-40 sm:w-40"
        :src="
          useRuntimeConfig().public.strapi.url +
          product.data.attributes.image?.data.attributes.url
        "
      />
      <div class="flex flex-col">
        <h4 class="text-neutral-500">
          {{ product.data.attributes.brand?.data.attributes.title }}
        </h4>
        <h3>{{ product.data.attributes.title }}</h3>
        <h2 class="mt-4">
          {{ usePriceFormatter(product.data.attributes.price) }}
        </h2>
      </div>
    </div>
    <button
      class="button secondary hover:text-red-400"
      @click="cart.splice(cart.indexOf(product.data.id), 1)"
    >
      <Icon name="heroicons:trash" />
    </button>
  </div>
</template>
