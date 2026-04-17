<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="tw-fixed tw-bottom-4 tw-right-4 tw-z-50 tw-bg-gradient-to-r tw-from-primary tw-to-pink-500 tw-text-white tw-rounded-full tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center tw-text-xl tw-cursor-pointer tw-transition-opacity tw-duration-300 hover:tw-bg-blue-600"
  >
    ↥
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
