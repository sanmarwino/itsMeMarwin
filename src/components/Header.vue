<template>
  <header class="tw-flex tw-justify-between tw-items-center tw-p-6 tw-bg-opacity-50 tw-relative tw-z-20">
    <div class="tw-text-white tw-text-3xl tw-font-bold">Marwin.dev</div>

    <!-- Mobile Toggle Button -->
    <div class="md:tw-hidden tw-z-30">
      <button type="button" class="tw-block focus:tw-outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50" />
        </span>

        <span v-else>
          <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50" />
        </span>
      </button>
    </div>

    <!-- Navbar -->
    <nav
      :class="[
        'tw-fixed tw-inset-0 tw-z-20 tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-[#111827] md:tw-relative md:tw-bg-transparent md:tw-flex md:tw-justify-between md:tw-flex-row',
        isMenuOpen ? 'tw-block' : 'tw-hidden',
      ]"
    >
      <ul class="tw-flex tw-flex-col tw-items-center tw-space-y-5 md:tw-flex-row md:tw-space-x-5 md:tw-space-y-0">
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="nav-link tw-block tw-text-white tw-text-2xl md:tw-text-lg"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const Menu = ref([
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievement", href: "#achievement" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;

  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
/* Underline Hover Effect */
.nav-link {
  position: relative;
  width: fit-content;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: linear-gradient(to right, #f59e0b, #ec4899);
  transition: width 0.3s ease;
  border-radius: 999px;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
