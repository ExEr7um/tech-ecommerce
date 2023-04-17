<script setup lang="ts">
defineProps<{
  /** Информация о товаре */
  about: ProductAbout
}>()
</script>

<template>
  <div class="flex flex-col gap-y-3 rounded-lg bg-neutral-900 p-5">
    <div class="w-max rounded bg-neutral-800 p-3">
      <Icon class="text-lime-300" :name="about.icon" />
    </div>
    <h3>{{ about.title }}</h3>
    <p>{{ about.description }}</p>
  </div>
</template>
