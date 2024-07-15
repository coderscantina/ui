<template>
  <div
    ref="textRef"
    class="bg-clip-text text-transparent bg-center py-1"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  withDefaults,
  ref,
  onMounted,
  watch,
  onUnmounted,
} from "vue";

interface GradientPosition {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const props = withDefaults(
  defineProps<{
    colors?: string[];
    speed: number;
  }>(),
  {
    speed: 10,
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  }
);

const textRef = ref<HTMLElement | null>(null);
const gradientPositions = ref<GradientPosition[]>([]);
let animationFrameId: number;

const initGradientPositions = () => {
  gradientPositions.value = props.colors.map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    dx: ((Math.random() - 0.5) * props.speed) / 10,
    dy: ((Math.random() - 0.5) * props.speed) / 10,
  }));
};

const updateGradient = () => {
  if (!textRef.value) return;

  const element = textRef.value;
  const gradients = gradientPositions.value
    .map(
      (pos, index) =>
        `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${props.colors[index]} 0%, transparent 50%)`
    )
    .join(", ");

  element.style.backgroundImage = gradients;
  element.style.backgroundSize = "200% 200%";
  element.style.backgroundColor = props.colors[0];
};

const animateGradients = () => {
  gradientPositions.value = gradientPositions.value.map((pos) => {
    pos.x += pos.dx;
    pos.y += pos.dy;

    if (pos.x <= 0 || pos.x >= 100) pos.dx *= -1;
    if (pos.y <= 0 || pos.y >= 100) pos.dy *= -1;

    return pos;
  });

  updateGradient();
  animationFrameId = requestAnimationFrame(animateGradients);
};

onMounted(() => {
  initGradientPositions();
  updateGradient();
  animateGradients();
});

watch(
  () => props.colors,
  () => {
    initGradientPositions();
    updateGradient();
  }
);

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>
