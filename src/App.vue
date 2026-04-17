<template>
  <div class="bg-[#030303] min-h-screen lg:tw-mx-10 md:tw-mx-0 xs:tw-mx-0">
    <Header />
    <HeroSection />
    <!-- <AboutSection /> -->
    <Skill />
    <Experience />
    <SeminarSection />
    <ProjectSection />
    <ContactSection />
    <BackToTop />
    <Footer />
  </div>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const Header = defineAsyncComponent(() => import("@/components/Header.vue"));
const HeroSection = defineAsyncComponent(() => import("@/components/HeroSection.vue"));
// const AboutSection = defineAsyncComponent(() => import("@/components/AboutSection.vue"));
const Skill = defineAsyncComponent(() => import("@/components/Skill.vue"));
const Experience = defineAsyncComponent(() => import("@/components/Experience.vue"));
const SeminarSection = defineAsyncComponent(() => import("@/components/SeminarSection.vue"));
const ProjectSection = defineAsyncComponent(() => import("@/components/ProjectSection.vue"));
const ContactSection = defineAsyncComponent(() => import("@/components/ContactSection.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const BackToTop = defineAsyncComponent(() => import("@/components/BackToTop.vue"));
</script>
