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
</script>

# Marquee

An infinite scrolling marquee component for Vue that can be used to display text or images.

## Installation

### Nuxt

Create a new Vue component file called `marquee.vue` in your `components` directory and paste the following code:

```vue
<!-- @include: ../../components/marquee.vue -->
```

## Props

| Prop         | Type    | Default | Description                                  |
| ------------ | ------- | ------- | -------------------------------------------- |
| duration     | Number  | 120     | The duration of the animation in seconds.    |
| repeat       | Number  | 4       | The number of times the animation repeats.   |
| gap          | Number  | 1       | The gap between each repeated animation.     |
| reverse      | Boolean | false   | Whether the animation should reverse.        |
| pauseOnHover | Boolean | false   | Whether the animation should pause on hover. |
| vertical     | Boolean | false   | Whether the animation should be vertical.    |

## Examples

### Simple Text Marquee

<ComponentPreview>
<Marquee>
    <p>This is a test of the marquee component.</p>
</Marquee>

<template #code>

```vue
<template>
  <Marquee>
    <p>This is a test of the marquee component.</p>
  </Marquee>
</template>
```

</template>
</ComponentPreview>

### Vertical Text Marquee

<ComponentPreview>
<Marquee vertical duration="2" gap="1">
    <p>This is a test of the marquee component.</p>
</Marquee>

<template #code>

```vue
<template>
  <Marquee vertical duration="2" gap="1">
    <p>This is a test of the marquee component.</p>
  </Marquee>
</template>
```

</template>
</ComponentPreview>
