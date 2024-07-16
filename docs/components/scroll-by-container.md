---
title: Scroll By Container
description: A Vue component that scrolls content above a static container.
---

<script setup>
import { ref } from 'vue'

import ScrollByContainer from '../../components/ScrollByContainer.vue'
</script>

# Scroll By Container

A Vue component that scrolls content above a static container.

## Installation

#### 1. Install component dependency by running the following command:

<InstallDependency
  :packages="['@vueuse/core']"
  :dev="true"
/>

#### 2. Copy and paste the following code into your project:

Create a new Vue component file called `ScrollByContainer.vue` in your `components` directory and paste the following code:

<CodeFile title="ScrollByContainer.vue" :collapsed>

```vue
<!-- @include: ../../components/ScrollByContainer.vue -->
```

</CodeFile>

## Example

### Image Example

<ComponentPreview>

<ScrollByContainer>
  <template #static>
    <img
     src="https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     class="w-full h-full object-cover"
    >
  </template>
  <div class="mx-auto max-w-prose px-6">
    <p class="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">How we escaped Hoth</p>
    <p class="text-2xl !leading-relaxed">As Imperial forces attacked Echo Base on Hoth, the Rebels launched a desperate evacuation. Under heavy fire, transports fled while ground troops bought time. Luke Skywalker's Rogue Squadron provided air support, allowing the last ships to escape. Despite losses, the Rebels' quick action preserved their fight against the Empire.</p>
  </div> 
</ScrollByContainer>

<template #code>

```vue
<template>
  <ScrollByContainer>
    <template #static>
      <img
        src="https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      />
    </template>
    <div class="mx-auto max-w-prose px-6">
      <p
        class="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold"
      >
        How we escaped Hoth
      </p>
      <p class="text-2xl">
        As Imperial forces attacked Echo Base on Hoth, the Rebels launched a
        desperate evacuation. Under heavy fire, transports fled while ground
        troops bought time. Luke Skywalker's Rogue Squadron provided air
        support, allowing the last ships to escape. Despite losses, the Rebels'
        quick action preserved their fight against the Empire.
      </p>
    </div>
  </ScrollByContainer>
</template>
```

</template>
</ComponentPreview>

### Video Example

<ComponentPreview>

<ScrollByContainer>
  <template #static>
    <video
        crossorigin 
        loop 
        playsinline 
        muted 
        autoplay
        src="https://videos.pexels.com/video-files/856528/856528-uhd_1440_1440_24fps.mp4" preload="metadata"
        class="w-full h-full object-cover"
    />
  </template>
  <div class="mx-auto max-w-prose px-6">
    <p class="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">How we escaped Hoth</p>
    <p class="text-2xl !leading-relaxed">As Imperial forces attacked Echo Base on Hoth, the Rebels launched a desperate evacuation. Under heavy fire, transports fled while ground troops bought time. Luke Skywalker's Rogue Squadron provided air support, allowing the last ships to escape. Despite losses, the Rebels' quick action preserved their fight against the Empire.</p>
  </div>
</ScrollByContainer>

<template #code>

```vue
<template>
  <ScrollByContainer>
    <template #static>
      <video
        crossorigin
        loop
        playsinline
        muted
        autoplay
        src="https://videos.pexels.com/video-files/856528/856528-uhd_1440_1440_24fps.mp4"
        preload="metadata"
        class="w-full h-full object-cover"
      />
    </template>
    <div class="mx-auto max-w-prose px-6">
      <p
        class="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold"
      >
        How we escaped Hoth
      </p>
      <p class="text-2xl !leading-relaxed">
        As Imperial forces attacked Echo Base on Hoth, the Rebels launched a
        desperate evacuation. Under heavy fire, transports fled while ground
        troops bought time. Luke Skywalker's Rogue Squadron provided air
        support, allowing the last ships to escape. Despite losses, the Rebels'
        quick action preserved their fight against the Empire.
      </p>
    </div>
  </ScrollByContainer>
</template>
```

</template>

</ComponentPreview>

## Props

| Name           | Type   | Default                        | Description                                |
| -------------- | ------ | ------------------------------ | ------------------------------------------ |
| `overlayClass` | String | `bg-white/70 dark:bg-black/70` | The class to apply to the overlay element. |
