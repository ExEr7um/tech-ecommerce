<script setup lang="ts">
/** Массив сообщений */
const messages: string[] = [
  "Какая бюджет Вас интересует?",
  "Средний",
  "Какой срок доставки Вас интересует?",
  "Быстрая",
  "Какой вид подсветки Вас интересует?",
  "RGB",
  "Для какой цели Вам нужны комплектующие?",
  "Для игр",
  "Пожалуйста выберите игры, для которых вы подбираете комплектующие",
]

const botMessages = [
  {
    text: "Для какой цели Вам нужны комплектующие?",
    variantsEndpoint: "purposes",
  },
]

const games = [
  "Counter-Strike 2",
  "Dota 2",
  "Red Dead Redemption 2",
  "Control",
  "Call of Duty: Modern Warfare II",
  "Team Fortress 2",
  "Overwatch 2",
  "Fortnite",
  "Grand Theft Auto V",
]
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <MessagesCard
      v-for="(message, index) in messages"
      :key="message"
      :is-user-message="index % 2 === 1"
      :text="message"
    />
  </div>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="game in games"
      :key="game"
      class="flex gap-x-2 bg-neutral-900 p-4"
    >
      <Icon name="heroicons:plus" />
      {{ game }}
    </div>
  </div>
</template>
