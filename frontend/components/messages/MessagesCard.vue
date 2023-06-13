<script setup lang="ts">
defineProps<{
  /** Является ли сообщение пользовательским */
  isUserMessage?: boolean
  /** Текст сообщения */
  text: string
}>()
</script>

<template>
  <div class="flex w-full even:justify-end">
    <div
      class="w-max max-w-md rounded-2xl p-4"
      :class="[
        isUserMessage
          ? 'border-lime-200 bg-lime-300 text-black'
          : 'border-neutral-800 bg-neutral-900',
      ]"
      v-text="text"
    />
  </div>
</template>
