---
title: Marquee
description: An infinite scrolling marquee component for Vue that can be used to display text or images.
---

<script setup>
import { ref } from 'vue'

import Marquee from '../../components/marquee.vue'
const duration = ref(50)
const repeat = ref(5)
const gap = ref(1)
const reverse = ref(false)
const pauseOnHover = ref(false)
</script>

# Marquee

An infinite scrolling marquee component for Vue that can be used to display text or images.

<Marquee :duration :repeat :gap :reverse :pauseOnHover>
    <p>This is a test of the marquee component.</p>
</Marquee>

```vue
<script setup>
const duration = ref(50)
const repeat = ref(5)
const gap = ref(1)
const reverse = ref(false)
const pauseOnHover = ref(false)
</script>

<template>
  <Marquee :duration :repeat :gap :reverse :pauseOnHover>
    <p>This is a test of the marquee component.</p>
  </Marquee>
</template>
```
