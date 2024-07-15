<script setup lang="ts">
import { ref, defineProps } from "vue";
import FileIcon from "../assets/FileIcon.vue";

const props = defineProps<{
  title: string;
  description: string;
  collapsed: boolean | undefined;
}>();

const isCollapsed = ref(true);
</script>

<template>
  <div class="relative">
    <div
      v-if="title"
      class="flex gap-3 items-center font-mono text-sm px-2"
    >
      <FileIcon class="h-4 w-4" />
      {{ title }}
    </div>
    <div
      :class="[
        'mt-4 rounded-lg',
        isCollapsed
          ? 'max-h-32 overflow-hidden relative z-0'
          : 'max-h-[48rem] overflow-scroll',
      ]"
    >
      <div class="-my-4">
        <slot />
      </div>
    </div>
    <div
      v-if="isCollapsed"
      class="bg-gradient-to-t from-[var(--vp-c-bg)] inset-0 z-2 absolute pointer-events-none"
    ></div>
    <button
      class="bg-[var(--vp-button-alt-bg)] text-[var(--vp-button-alt-text)] py-1.5 px-4 rounded-full bottom-6 left-1/2 -translate-x-1/2 absolute z-10 mx-auto block text-sm font-semibold hover:bg-[var(--vp-button-alt-hover-bg)]"
      @click="isCollapsed = !isCollapsed"
    >
      {{ isCollapsed ? "Expand" : "Collapse" }}
    </button>
  </div>
</template>
