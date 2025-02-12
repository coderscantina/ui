---
title: Reveal Text
description: A text reveal component for Vue that can be used to display text.
---

# Reveal Text

A text reveal component for Vue that can be used to display text.

<script setup>
import { ref } from 'vue'

import ScrollReveal from '../../components/ScrollReveal.vue'
</script>

## Installation

#### 1. Install component dependency by running the following command:

<InstallDependency
  :packages="['@vueuse/core']"
  :dev="true"
/>

#### 2. Copy and paste the following code into your project:

Create a new Vue component file called `RevealWord.vue` in your `components` directory and paste the following code:

<CodeFile title="RevealWord.vue" :collapsed>

```vue
<!-- @include: ../../components/RevealWord.vue -->
```

</CodeFile>

Create a new Vue component file called `ScrollReveal.vue` in your `components` directory and paste the following code:

<CodeFile title="ScrollReveal.vue" :collapsed>

```vue
<!-- @include: ../../components/ScrollReveal.vue -->
```

</CodeFile>

## Example

### Simple Example

<ComponentPreview>
<ScrollReveal text="Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying."/>

<template #code>

```vue
<template>
  <ScrollReveal
    text="Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying."
  />
</template>
```

</template>

</ComponentPreview>

## Props

| Prop           | Type   | Default                                                                             | Description                                                   |
| -------------- | ------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `text`         | String | `''`                                                                                | The text to reveal.                                           |
| `size`         | Number | `2`                                                                                 | The height of the element based on the visible screen height. |
| `minOpacity`   | Number | `0.1`                                                                               | The minimum opacity of the text.                              |
| `maxOpacity`   | Number | `1`                                                                                 | The maximum opacity of the text.                              |
| `wrapperClass` | String | `mx-auto flex max-w-4xl items-center`                                               | The class to apply to the wrapper element.                    |
| `textClass`    | String | `p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl gap-y-4` | The class to apply to the text element.                       |
