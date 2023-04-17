<script setup lang="ts">
defineProps<{
  /** Иконка категории из Iconify */
  icon: string
  /** Заголовок категории */
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-x-4">
    <Icon :name="icon" />
    <h2>{{ title }}</h2>
  </div>
</template>
