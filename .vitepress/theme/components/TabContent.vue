<script setup lang="ts">
import { computed, defineProps, inject } from "vue";

const props = defineProps<{
  index: number;
}>();

const activeTab = inject("activeTab");
const isActive = computed(() => {
  return props.index === activeTab.value;
});
</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
