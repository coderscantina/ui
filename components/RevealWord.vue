<script setup lang="ts">
import { ref, withDefaults, defineProps, computed } from "vue";

const props = withDefaults(
  defineProps<{
    progress: number;
    range: [number, number];
    minOpacity?: number;
    maxOpacity?: number;
  }>(),
  {
    minOpacity: 0.2,
    maxOpacity: 1,
  }
);

const el = ref<HTMLElement | null>(null);

const opacity = computed(() => {
  const [start, end] = props.range;
  return Math.max(
    props.minOpacity,
    Math.min(props.maxOpacity, (props.progress - start) / (end - start))
  );
});
</script>

<template>
  <span class="mx-1 lg:mx-2">
    <span
      ref="el"
      class="transition-opacity duration-300"
      :style="`opacity: ${opacity}`"
      ><slot
    /></span>
  </span>
</template>
