<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    reverse?: boolean
    pauseOnHover?: boolean
    vertical?: boolean
    repeat?: number
    duration?: number
    gap?: number
  }>(),
  {
    reverse: false,
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
    duration: 60,
    gap: 3,
  }
)
</script>

<template>
  <div
    :class="['group flex [gap:var(--gap)] overflow-clip', vertical ? 'flex-col' : 'flex-row']"
    :style="`--duration:${duration}s; --gap:${gap}rem`"
    v-bind="$attrs"
  >
    <div
      v-for="i in repeat"
      :key="i"
      :class="[
        'flex shrink-0 justify-around [gap:var(--gap)] transition-transform',
        {
          'animate-marquee flex-row': !vertical,
          'animate-marquee-vertical flex-col': vertical,
          'group-hover:[animation-play-state:paused]': pauseOnHover,
          '![animation-direction:reverse]': reverse,
        },
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marqueeVertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}

.animate-marquee {
  animation: marquee var(--duration) linear infinite;
}

.animate-marquee-vertical {
  animation: marqueeVertical var(--duration) linear infinite;
}
</style>
