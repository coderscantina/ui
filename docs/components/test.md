---
title: Marquee
description: An infinite scrolling marquee component for Vue that can be used to display text or images.
---

<script setup>
import { ref } from 'vue'

import Marquee from '../../components/marquee.vue'
const duration = ref(50)
</script>

# Marquee

An infinite scrolling marquee component for Vue that can be used to display text or images.

<Marquee :duration="duration" :repeat="5">
    <p>This is a test of the marquee component.</p>
</Marquee>
