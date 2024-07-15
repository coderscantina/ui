<script setup>
import { ref } from "vue";

const mode = ref("preview");
</script>

<template>
  <div class="not-docs group relative flex flex-col space-y-4">
    <Tabs :tabs="['Preview', 'Code']">
      <TabContent
        :index="0"
        class="relative rounded-md border dark:border-border"
      >
        <div class="min-h-[350px] flex w-full justify-center items-center">
          <slot />
        </div>
      </TabContent>
      <TabContent :index="1">
        <div class="mt-4">
          <slot name="code" />
        </div>
      </TabContent>
    </Tabs>
  </div>
</template>
