<script setup lang="ts">
import { ref, defineProps, computed, provide } from "vue";

const props = defineProps<{
  tabs: string[];
}>();

const activeTab = ref(0);
provide("activeTab", activeTab);
</script>

<template>
  <div class="group flex flex-col mt-4">
    <div class="flex items-center">
      <div class="flex w-full justify-start border-b dark:border-border">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            activeTab === index
              ? 'border-b-primary-background text-primary-background dark:text-primary-foreground dark:border-b-primary-foreground'
              : 'border-b-transparent text-muted-foreground',
          ]"
          class="cursor-pointer relative h-9 border-b-2 px-4 pb-3 pt-2 font-semibold"
          @click="activeTab = index"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>
