<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { useElementBounding } from "@vueuse/core";
import RevealWord from "./RevealWord.vue";

const props = withDefaults(
  defineProps<{
    text: string;
    size?: number | undefined;
    wrapperClass?: string | string[] | undefined;
    textClass?: string | string[] | undefined;
    minOpacity?: number | undefined;
    maxOpacity?: number | undefined;
  }>(),
  {
    size: 2,
    minOpacity: 0.2,
    maxOpacity: 1,
    wrapperClass: "mx-auto flex max-w-4xl items-center",
    textClass:
      "p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl gap-y-4",
  }
);

const targetRef = ref<HTMLElement | null>(null);
const words = computed(() => props.text?.match(/\S+/g) ?? []);
const wordLength = computed(() => words.value.length);

const { top, height } = useElementBounding(targetRef);

const progress = computed(() => {
  return Math.max(
    0,
    Math.min(1, 1 - (top.value * props.size + height.value) / height.value)
  );
});
</script>

<template>
  <div
    ref="targetRef"
    class="relative z-0 w-full"
    :style="{ height: `${size * 100}vh` }"
  >
    <div
      :class="['sticky top-0', wrapperClass]"
      :style="{ height: `${100 / size}%` }"
    >
      <p :class="['flex flex-wrap', textClass]">
        <RevealWord
          v-for="(word, i) in words"
          :min-opacity="minOpacity"
          :max-opacity="maxOpacity"
          :key="i"
          :progress="progress"
          :range="[i / wordLength, (i + 1) / wordLength]"
        >
          {{ word }}
        </RevealWord>
      </p>
    </div>
  </div>
</template>
