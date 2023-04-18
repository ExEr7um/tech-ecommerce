<script setup lang="ts">
const product = await useStrapi().findOne<Product>(
  "products",
  useRoute().params.id as string,
  {
    populate: "*",
  }
)

const about: ProductAbout[] = [
  {
    description: product.data.attributes.budget,
    icon: "heroicons:currency-dollar",
    title: "Бюджет",
  },
  {
    description: product.data.attributes.delivery,
    icon: "heroicons:truck",
    title: "Доставка",
  },
  {
    description: product.data.attributes.purpose,
    icon: "heroicons:user",
    title: "Назначение",
  },
  {
    description: product.data.attributes.rgb,
    icon: "heroicons:fire",
    title: "Подсветка",
  },
]

/** Корзина */
const cart: Ref<number[]> = useCookie("cart", {
  default: () => [],
})
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-10">
      <img
        :alt="product.data.attributes.title"
        class="aspect-square w-full rounded-2xl bg-neutral-900 object-contain"
        :src="
          useRuntimeConfig().public.strapi.url +
          product.data.attributes.image?.data.attributes.url
        "
      />
      <div class="flex flex-col gap-y-10 py-8">
        <ProductsCategory
          :icon="product.data.attributes.category?.data.attributes.icon ?? ''"
          :title="product.data.attributes.category?.data.attributes.title ?? ''"
        />
        <div class="flex flex-col gap-y-1">
          <h3 class="text-neutral-500">
            {{ product.data.attributes.brand?.data.attributes.title }}
          </h3>
          <h1>{{ product.data.attributes.title }}</h1>
        </div>
        <p>{{ product.data.attributes.description }}</p>
        <ProductsPrice :price="product.data.attributes.price" />
        <button
          v-if="cart.includes(product.data.id)"
          class="button secondary px-6"
          @click="cart.splice(cart.indexOf(product.data.id), 1)"
        >
          Удалить из корзины
        </button>
        <button
          v-else
          class="button primary px-6"
          @click="cart.push(product.data.id)"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
    <ProductsAbout :about-list="about" />
  </div>
</template>
