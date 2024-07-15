---
title: Marquee
description: An infinite scrolling marquee component for Vue that can be used to display text or images.
---

<script setup>
import { ref } from 'vue'

import Marquee from '../../components/marquee.vue'
const duration = ref(120)
const repeat = ref(4)
const gap = ref(1)
const reverse = ref(false)
const pauseOnHover = ref(false)
const vertical = ref(false)

const texts = [
  [
    "Alderaan",
    "Bespin",
    "Coruscant",
    "Dagobah"
  ],
  [
    "Endor",
    "Felucia",
    "Geonosis",
    "Hoth"
  ],
  [
    "Jakku",
    "Kamino",
    "Kashyyyk",
    "Mustafar"
  ],
  [
    "Naboo",
    "Tatooine",
    "Utapau",
    "Yavin 4"
  ]
];

const texts2 = [[...texts[0], ...texts[1]], [...texts[2], ...texts[3]]];
</script>

# Marquee

An infinite scrolling marquee component for Vue that can be used to display text or images.

## Installation

Create a new Vue component file called `marquee.vue` in your `components` directory and paste the following code:

<CodeFile title="marquee.vue" :collapsed>

```vue
<!-- @include: ../../components/marquee.vue -->
```

</CodeFile>

## Examples

### Text Marquee

<ComponentPreview>
<div class="relative overflow-hidden space-y-4 py-4">
  <Marquee 
    v-for="(items, i) in texts"
    :key="i" 
    :reverse="i % 2 === 0"
  >
    <div
      v-for="(item, j) in items"
      :key="j"
      class="text-4xl"
    >
      {{ item }}
    </div>
  </Marquee>
  <div class="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--vp-c-bg)]"/>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--vp-c-bg)]"/>
</div>

<template #code>

```vue
<script setup lang="ts">
const texts = [
  ["Alderaan", "Bespin", "Coruscant", "Dagobah"],
  ["Endor", "Felucia", "Geonosis", "Hoth"],
  ["Jakku", "Kamino", "Kashyyyk", "Mustafar"],
  ["Naboo", "Tatooine", "Utapau", "Yavin 4"],
];
</script>

<template>
  <div class="relative overflow-hidden space-y-4 py-4">
    <Marquee
      v-for="(items, i) in texts"
      :key="i"
      :reverse="i % 2 === 0"
    >
      <div
        v-for="(item, j) in items"
        :key="j"
        class="text-4xl"
      >
        {{ item }}
      </div>
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--vp-c-bg)]"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--vp-c-bg)]"
    />
  </div>
</template>
```

</template>
</ComponentPreview>

### Vertical Card Marquee

<ComponentPreview>
<div class="relative overflow-hidden h-64 max-w-96">
  <Marquee vertical duration="40" gap="1">
    <p>
      It is a period of civil war. Rebel spaceships, striking from a hidden
      base, have won their first victory against the evil Galactic Empire.
    </p>
    <p>
      During the battle, Rebel spies managed to steal secret plans to the
      Empire's ultimate weapon, the DEATH STAR, an armored space station with
      enough power to destroy an entire planet.
    </p>
    <p>
      Pursued by the Empire's sinister agents, Princess Leia races home aboard
      her starship, custodian of the stolen plans that can save her people and
      restore freedom to the galaxy....
    </p>
  </Marquee>
  <div
    class="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[var(--vp-c-bg)]"
  />
</div>

<template #code>

```vue
<template>
  <Marquee
    vertical
    duration="2"
    gap="1"
  >
    <p>
      It is a period of civil war. Rebel spaceships, striking from a hidden
      base, have won their first victory against the evil Galactic Empire.
    </p>

    <p>
      During the battle, Rebel spies managed to steal secret plans to the
      Empire's ultimate weapon, the DEATH STAR, an armored space station with
      enough power to destroy an entire planet.
    </p>

    <p>
      Pursued by the Empire's sinister agents, Princess Leia races home aboard
      her starship, custodian of the stolen plans that can save her people and
      restore freedom to the galaxy....
    </p>
  </Marquee>
</template>
```

</template>
</ComponentPreview>

### Complex Marquee

<ComponentPreview>

<div class="relative overflow-hidden space-y-8 py-8">
  <Marquee
    v-for="(items, i) in texts2"
    :key="i"
    :reverse="i % 2 === 0"
    pause-on-hover
  >
    <div
      v-for="(item, j) in items"
      :key="j"
      class="border dark:border-border p-4 rounded-lg  bg-zinc-100 dark:bg-zinc-900 max-w-64"
    >
      <div class="flex text-2xl space-x-4">
        <i>🪐</i>
        <span class="font-bold">{{ item }}</span>
      </div>
      <p class="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>
  </Marquee>
  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--vp-c-bg)]"
  />
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--vp-c-bg)]"
  />
</div>

<template #code>

```vue
<script setup lang="ts">
const texts = [
  ["Alderaan", "Bespin", "Coruscant", "Dagobah"],
  ["Endor", "Felucia", "Geonosis", "Hoth"],
  ["Jakku", "Kamino", "Kashyyyk", "Mustafar"],
  ["Naboo", "Tatooine", "Utapau", "Yavin 4"],
];
</script>

<template>
  <div class="relative overflow-hidden space-y-8 py-8">
    <Marquee
      v-for="(items, i) in texts.splice(0, 2)"
      :key="i"
      :reverse="i % 2 === 0"
      pause-on-hover
    >
      <div
        v-for="(item, j) in items"
        :key="j"
        class="border dark:border-border p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 max-w-64"
      >
        <div class="flex text-2xl space-x-4">
          <i>🪐</i>
          <span class="font-bold">{{ item }}</span>
        </div>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--vp-c-bg)]"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[var(--vp-c-bg)]"
    />
  </div>
</template>
```

</template>
</ComponentPreview>

## Props

| Prop           | Type      | Default | Description                                                                        |
| -------------- | --------- | ------- | ---------------------------------------------------------------------------------- |
| `duration`     | `Number`  | `120`   | The duration of the animation in seconds.                                          |
| `repeat`       | `Number`  | `4`     | The number of times to repeat the content.                                         |
| `gap`          | `Number`  | `1`     | The gap between each repeated element.                                             |
| `reverse`      | `Boolean` | `false` | Whether or not the animation should be reversed.                                   |
| `pauseOnHover` | `Boolean` | `false` | Whether or not the animation should pause when the user hovers over the component. |
| `vertical`     | `Boolean` | `false` | Whether or not the animation should be vertical.                                   |
