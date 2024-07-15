<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { useElementBounding } from "@vueuse/core";
import { useWindowSize } from "@vueuse/core";

const targetRef = ref<HTMLElement | null>(null);
const { top } = useElementBounding(targetRef);
const { height: windowHeight } = useWindowSize();

withDefaults(
  defineProps<{
    overlayClass: string;
  }>(),
  {
    overlayClass: "bg-white/70 dark:bg-black/70",
  }
);

const overlayOpacity = computed(() => {
  return Math.max(0, Math.min(1, -(top.value / windowHeight.value) * 1.5));
});
</script>

<template>
  <div
    ref="targetRef"
    class="relative z-0 w-full"
  >
    <div class="sticky top-0 h-[100vh]">
      <slot name="static" />
      <div
        :class="['inset-0 absolute z-10', overlayClass]"
        :style="{ opacity: overlayOpacity }"
      ></div>
    </div>
    <div
      class="pt-[50vh] pb-[70vh] relative z-20"
      style="transform: translateZ(0.01px)"
    >
      <slot />
    </div>
  </div>
</template>
