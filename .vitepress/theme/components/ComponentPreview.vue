<script setup>
import { ref } from 'vue'

const mode = ref('preview')
</script>

<template>
  <div class="not-docs groupd relative flex flex-col space-y-4">
    <div class="flex items-center">
      <div class="flex w-full justify-start border-b border-border">
        <div
          :class="[
            'cursor-pointer relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-semibold',
            mode === 'preview'
              ? 'border-b-primary-foreground text-primary-foreground'
              : 'border-b-transparent text-muted-foreground',
          ]"
          @click="mode = 'preview'"
        >
          Preview
        </div>
        <div
          :class="[
            'cursor-pointer relative h-9 rounded-none border-b-2 px-4 pb-3 pt-2 font-semibold',
            mode === 'code'
              ? 'border-b-primary-foreground text-primary-foreground'
              : 'border-b-transparent text-muted-foreground',
          ]"
          @click="mode = 'code'"
        >
          Code
        </div>
      </div>
    </div>
    <div class="relative rounded-md border border-border" v-show="mode === 'preview'">
      <div class="min-h-[350px] flex w-full justify-center items-center">
        <slot />
      </div>
    </div>
    <div class="rounded-lg" v-show="mode === 'code'">
      <div class="-my-4">
        <slot name="code" />
      </div>
    </div>
  </div>
</template>
