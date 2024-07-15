<script setup lang="ts">
import { defineProps, withDefaults, ref } from "vue";
import { useClipboard } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    packages: string[];
    packageManagers: string[];
    dev: boolean;
  }>(),
  {
    packages: [],
    packageManagers: ["bun", "npm", "pnpm", "yarn"],
    dev: false,
  }
);

function buildInstallString(manager) {
  const managerString = {
    bun: "bun add",
    npm: "npm install",
    pnpm: "pnpm install",
    yarn: "yarn add",
  }[manager];

  return `${managerString}${props.dev ? " -D " : " "}${props.packages.join(
    " "
  )}`;
}

function copyText(source) {
  const { copy } = useClipboard();
  copy(source);
}
</script>

<template>
  <div class="py-4">
    <Tabs :tabs="packageManagers">
      <TabContent
        v-for="(manager, index) in packageManagers"
        :key="manager"
        :index="index"
        class="-mt-4"
      >
        <div class="language-bash vp-adaptive-theme">
          <span class="lang">bash</span>
          <button
            title="Copy Code"
            class="copy"
            @click="copyText(buildInstallString(manager))"
          ></button>
          <pre
            class="shiki shiki-themes github-light github-dark vp-code"
          ><code>{{
            buildInstallString(manager)
          }}</code></pre>
        </div>
      </TabContent>
    </Tabs>
  </div>
</template>
