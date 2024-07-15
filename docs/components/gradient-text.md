---
title: Gradient Text
description: A Vue component that animates text with a gradient background effect.
---

<script setup>
import { ref } from 'vue'

import GradientText from '../../components/GradientText.vue'
</script>

# Gradient Text

This Vue component creates an animated gradient text effect, allowing you to add a dynamic and visually appealing look to your text content.

## Installation

#### 1. Copy and paste the following code into your project:

Create a new Vue component file called `GradientText.vue` in your `components` directory and paste the following code:

<CodeFile title="GradientText.vue" :collapsed>

```vue
<!-- @include: ../../components/GradientText.vue -->
```

</CodeFile>

## Examples

### Simple Gradient Text

<ComponentPreview>
<GradientText 
    class="text-6xl font-semibold"
    :colors="['#CD7F32', '#FFD700', '#4682B4']"
>Mos Eisley</GradientText>
<template #code>

```vue
<template>
  <GradientText
    class="text-6xl font-semibold"
    :colors="['#CD7F32', '#FFD700', '#4682B4']"
    >Mos Eisley</GradientText
  >
</template>
```

</template>
</ComponentPreview>

### Multi-line Gradient Text

<ComponentPreview>
<GradientText 
    class="text-3xl lg:text-4xl font-semibold"
    :colors="['#E8B96F', '#C19A6B', '#F2D16D', '#A0522D', '#87CEEB', '#8B4513']"
>
    You will never find<br>
    a more wretched hive<br>
    of scum and villainy
</GradientText>
<template #code>

```vue
<template>
  <GradientText
    class="text-3xl lg:text-4xl font-semibold"
    :colors="['#E8B96F', '#C19A6B', '#F2D16D', '#A0522D', '#87CEEB', '#8B4513']"
  >
    You will never find<br />
    a more wretched hive<br />
    of scum and villainy
  </GradientText>
</template>
```

</template>
</ComponentPreview>

## Notes

- The animation runs continuously while the component is mounted.
- The component automatically adjusts if the color prop changes.
- The effect is applied using CSS `background-clip: text` and `text-transparent` classes.

## Props

| Name     | Type       | Default                    | Description                                  |
| -------- | ---------- | -------------------------- | -------------------------------------------- |
| `colors` | `string[]` | `['#f00', '#0f0', '#00f']` | An array of colors to use for the gradient.  |
| `speed`  | `Number`   | `10`                       | The speed of the animation (higher = faster) |
