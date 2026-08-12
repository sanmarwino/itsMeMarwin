<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import profileImage from "../assets/profile_pic.jpg";
import profileImage2 from "../assets/profile_pic2.jpg";
import profileImage3 from "../assets/profile_pic3.jpg";
import profileImage4 from "../assets/profile_pic4.jpg";

import About from "./About.vue";
import Experience from "./Experience.vue";
import Certifications from "./Certifications.vue";
import HireMe from "./HireMe.vue";

const activeSection = ref("about");

const mouseX = ref(50);
const mouseY = ref(50);

const showGoTop = ref(false);

const showSection = (section) => {
  activeSection.value = section;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleMouseMove = (event) => {
  mouseX.value = (event.clientX / window.innerWidth) * 100;
  mouseY.value = (event.clientY / window.innerHeight) * 100;
};

const handleScroll = () => {
  showGoTop.value = window.scrollY > 400;
};

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);

  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="portfolio-page relative min-h-screen overflow-hidden bg-black text-white">
    <!-- ================================= -->
    <!-- GALAXY BACKGROUND -->
    <!-- ================================= -->

    <div class="galaxy-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <!-- Deep Space -->
      <div class="absolute inset-0 bg-[#010104]"></div>

      <!-- Small Stars -->
      <div class="stars stars-small"></div>

      <!-- Medium Stars -->
      <div class="stars stars-medium"></div>

      <!-- Large Stars -->
      <div class="stars stars-large"></div>

      <!-- Nebula -->
      <div class="nebula nebula-one"></div>
      <div class="nebula nebula-two"></div>
      <div class="nebula nebula-three"></div>

      <!-- Shooting Stars -->
      <div class="shooting-star shooting-star-1"></div>
      <div class="shooting-star shooting-star-2"></div>
      <div class="shooting-star shooting-star-3"></div>

      <!-- Mouse Glow -->
      <div
        class="cosmic-cursor"
        :style="{
          left: `${mouseX}%`,
          top: `${mouseY}%`,
        }"
      ></div>

      <!-- Vignette -->
      <div class="galaxy-vignette"></div>
    </div>

    <!-- ================================= -->
    <!-- MAIN -->
    <!-- ================================= -->

    <main class="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
      <!-- ================================= -->
      <!-- HERO -->
      <!-- ================================= -->

      <section class="flex items-center justify-center py-5 text-center">
        <div class="w-full max-w-3xl">
          <!-- Profile Image -->
          <!-- Profile Hover Gallery -->
          <div class="mb-8 flex justify-center">
            <figure
              class="hover-gallery profile-gallery overflow-hidden rounded-full border border-white/15 p-1 shadow-[0_0_50px_rgba(255,255,255,0.08)] transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_70px_rgba(255,255,255,0.15)]"
            >
              <img :src="profileImage" alt="Marwin Joseph" />
              <img :src="profileImage2" alt="Marwin Joseph" />
              <img :src="profileImage3" alt="Marwin Joseph" />
              <img :src="profileImage4" alt="Marwin Joseph" />
            </figure>
          </div>

          <!-- Greeting -->
          <p class="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm">Hello, I'm</p>

          <!-- Name -->
          <h1 class="text-3xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-6xl">
            Marwin Joseph Medado
          </h1>

          <!-- Job -->
          <h2 class="mt-4 text-md font-medium text-gray-400 sm:text-2xl md:text-2xl">Front-End Web Developer</h2>

          <!-- ================================= -->
          <!-- NAVIGATION -->
          <!-- ================================= -->

          <div
            class="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-7"
          >
            <!-- About -->
            <button
              type="button"
              @click="showSection('about')"
              :class="activeSection === 'about' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button text-sm font-medium transition-colors sm:text-base"
            >
              About
            </button>

            <span class="text-white/10">/</span>

            <!-- Experience -->
            <button
              type="button"
              @click="showSection('experience')"
              :class="activeSection === 'experience' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button text-sm font-medium transition-colors sm:text-base"
            >
              Experience
            </button>

            <span class="text-white/10">/</span>

            <!-- Certifications -->
            <button
              type="button"
              @click="showSection('certifications')"
              :class="activeSection === 'certifications' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button text-sm font-medium transition-colors sm:text-base"
            >
              Certifications
            </button>

            <span class="text-white/10">/</span>

            <!-- Hire Me -->
            <button
              type="button"
              @click="showSection('hire-me')"
              :class="activeSection === 'hire-me' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button text-sm font-medium transition-colors sm:text-base"
            >
              Hire Me
            </button>
          </div>
        </div>
      </section>

      <!-- ================================= -->
      <!-- DYNAMIC CONTENT -->
      <!-- ================================= -->

      <div class="border-t border-white/5">
        <!-- ABOUT -->
        <div v-show="activeSection === 'about'" class="section-content">
          <About />
        </div>

        <!-- EXPERIENCE -->
        <div v-show="activeSection === 'experience'" class="section-content">
          <Experience />
        </div>

        <!-- CERTIFICATIONS -->
        <div v-show="activeSection === 'certifications'" class="section-content">
          <Certifications />
        </div>

        <!-- HIRE ME -->
        <div v-show="activeSection === 'hire-me'" class="section-content">
          <HireMe />
        </div>
      </div>
    </main>

    <!-- ================================= -->
    <!-- FOOTER -->
    <!-- ================================= -->

    <footer class="relative z-10 border-t border-white/5 px-5 py-8 text-center sm:px-6">
      <!-- Resume Button -->
      <div class="mb-6 flex justify-center">
        <div class="aura aura-dual">
          <a
            href="/MarwinCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 rounded-lg border border-white/10 bg-black px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span>View My Resume</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5 19.5 4.5m0 0H9m10.5 0V15" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <span class="text-xs text-gray-700 sm:text-sm"> © 2026 Marwin Joseph. All rights reserved. </span>
    </footer>

    <!-- ================================= -->
    <!-- GO TO TOP -->
    <!-- ================================= -->

    <Transition name="go-top">
      <button
        v-if="showGoTop"
        type="button"
        @click="goToTop"
        aria-label="Go to top"
        title="Go to top"
        class="go-top-button fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 sm:bottom-8 sm:right-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<style>
/* ================================= */
/* GALAXY BACKGROUND */
/* ================================= */

.galaxy-background {
  background: #010104;
}

/* ================================= */
/* STARS */
/* ================================= */

.stars {
  position: absolute;
  inset: -100px;
  background-repeat: repeat;
  pointer-events: none;
}

/* Small Stars */

.stars-small {
  opacity: 0.75;

  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.9) 0.7px, transparent 1px),
    radial-gradient(circle, rgba(255, 255, 255, 0.5) 0.5px, transparent 1px);

  background-size:
    80px 80px,
    130px 130px;

  background-position:
    10px 20px,
    50px 70px;

  animation: stars-drift-small 80s linear infinite;
}

/* Medium Stars */

.stars-medium {
  opacity: 0.55;

  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(180, 210, 255, 0.8) 1px, transparent 1.5px);

  background-size:
    180px 180px,
    240px 240px;

  background-position:
    30px 40px,
    100px 150px;

  animation: stars-drift-medium 120s linear infinite;
}

/* Large Stars */

.stars-large {
  opacity: 0.8;

  background-image: radial-gradient(circle, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0.8) 1px, transparent 2px);

  background-size: 320px 320px;

  animation: stars-twinkle 4s ease-in-out infinite alternate;
}

@keyframes stars-drift-small {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-100px, 80px, 0);
  }
}

@keyframes stars-drift-medium {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(150px, -100px, 0);
  }
}

@keyframes stars-twinkle {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.45;
  }
}

/* ================================= */
/* NEBULA */
/* ================================= */

.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

/* Top Left */

.nebula-one {
  width: 700px;
  height: 500px;

  top: -150px;
  left: 5%;

  opacity: 0.3;

  background: radial-gradient(ellipse, rgba(90, 80, 255, 0.45), rgba(60, 40, 160, 0.15), transparent 70%);

  animation: nebula-one 18s ease-in-out infinite alternate;
}

/* Right */

.nebula-two {
  width: 800px;
  height: 600px;

  right: -200px;
  top: 25%;

  opacity: 0.25;

  background: radial-gradient(ellipse, rgba(120, 70, 255, 0.3), rgba(40, 80, 180, 0.15), transparent 70%);

  animation: nebula-two 22s ease-in-out infinite alternate;
}

/* Bottom */

.nebula-three {
  width: 900px;
  height: 500px;

  left: 20%;
  bottom: -250px;

  opacity: 0.25;

  background: radial-gradient(ellipse, rgba(40, 90, 255, 0.25), rgba(100, 40, 180, 0.12), transparent 70%);

  animation: nebula-three 25s ease-in-out infinite alternate;
}

@keyframes nebula-one {
  from {
    transform: translate3d(-50px, 0, 0) scale(1);
  }

  to {
    transform: translate3d(100px, 80px, 0) scale(1.25);
  }
}

@keyframes nebula-two {
  from {
    transform: translate3d(50px, -30px, 0) scale(1);
  }

  to {
    transform: translate3d(-100px, 100px, 0) scale(1.3);
  }
}

@keyframes nebula-three {
  from {
    transform: translate3d(0, 30px, 0) scale(1);
  }

  to {
    transform: translate3d(80px, -80px, 0) scale(1.25);
  }
}

/* ================================= */
/* SHOOTING STARS */
/* ================================= */

.shooting-star {
  position: absolute;

  width: 2px;
  height: 2px;

  border-radius: 50%;

  background: white;

  box-shadow:
    0 0 6px white,
    0 0 15px rgba(150, 170, 255, 0.9);

  opacity: 0;

  transform: rotate(-35deg);

  animation: shooting-star 7s linear infinite;
}

.shooting-star::after {
  content: "";

  position: absolute;

  width: 120px;
  height: 1px;

  right: 0;
  top: 0;

  background: linear-gradient(to left, rgba(255, 255, 255, 0.8), transparent);

  transform-origin: right;
}

.shooting-star-1 {
  top: 15%;
  left: 70%;

  animation-delay: 2s;
}

.shooting-star-2 {
  top: 35%;
  left: 20%;

  animation-delay: 5s;
}

.shooting-star-3 {
  top: 60%;
  left: 80%;

  animation-delay: 8s;
}

@keyframes shooting-star {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(-35deg);
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 0;
    transform: translate(-400px, 250px) rotate(-35deg);
  }

  100% {
    opacity: 0;
    transform: translate(-400px, 250px) rotate(-35deg);
  }
}

/* ================================= */
/* MOUSE COSMIC GLOW */
/* ================================= */

.cosmic-cursor {
  position: absolute;

  width: 500px;
  height: 500px;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: radial-gradient(circle, rgba(120, 120, 255, 0.09) 0%, rgba(90, 80, 220, 0.04) 30%, transparent 70%);

  filter: blur(20px);

  transition:
    left 0.35s ease-out,
    top 0.35s ease-out;

  mix-blend-mode: screen;
}

/* ================================= */
/* VIGNETTE */
/* ================================= */

.galaxy-vignette {
  position: absolute;
  inset: 0;

  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.6) 80%,
    #000 100%
  );
}

/* ================================= */
/* PROFILE */
/* ================================= */

.profile-wrapper {
  box-shadow:
    0 0 50px rgba(255, 255, 255, 0.08),
    0 0 100px rgba(100, 100, 255, 0.08);

  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;
}

.profile-wrapper:hover {
  transform: scale(1.03);

  box-shadow:
    0 0 60px rgba(255, 255, 255, 0.15),
    0 0 120px rgba(100, 100, 255, 0.15);
}

.profile-glow {
  position: absolute;
  inset: -20px;

  border-radius: 9999px;

  background: conic-gradient(
    from 0deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent,
    rgba(120, 120, 255, 0.2),
    transparent
  );

  filter: blur(10px);

  animation: profile-spin 8s linear infinite;
}

@keyframes profile-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* ================================= */
/* NAVIGATION */
/* ================================= */

.nav-button {
  position: relative;
}

.nav-button::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: -6px;

  width: 0;
  height: 1px;

  background: white;

  transform: translateX(-50%);

  transition: width 0.3s ease;
}

.nav-button:hover::after {
  width: 100%;
}

/* ================================= */
/* CONTENT */
/* ================================= */

.section-content {
  animation: section-enter 0.45s ease;
}

@keyframes section-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================================= */
/* TECH MARQUEE */
/* ================================= */

.tech-marquee {
  width: 100%;
  overflow: hidden;
}

.tech-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 28px;
}

.tech-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 7px;

  white-space: nowrap;

  font-size: 13px;
  color: #6b7280;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.tech-item:hover {
  color: #fff;
  transform: translateY(-1px);
}

.tech-track-left {
  animation: marquee-left 35s linear infinite;
}

.tech-track-right {
  animation: marquee-right 35s linear infinite;
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.tech-marquee:hover .tech-track {
  animation-play-state: paused;
}

/* ================================= */
/* GO TO TOP BUTTON */
/* ================================= */

.go-top-button {
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.05),
    0 0 40px rgba(100, 100, 255, 0.04);
}

.go-top-button:hover {
  box-shadow:
    0 0 25px rgba(255, 255, 255, 0.1),
    0 0 50px rgba(100, 100, 255, 0.08);
}

/* Go Top Animation */

.go-top-enter-active,
.go-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.go-top-enter-from,
.go-top-leave-to {
  opacity: 0;
  transform: translateY(15px) scale(0.9);
}

/* ================================= */
/* MOBILE */
/* ================================= */

@media (max-width: 640px) {
  .nebula-one,
  .nebula-two,
  .nebula-three {
    filter: blur(80px);
    opacity: 0.18;
  }

  .cosmic-cursor {
    display: none;
  }

  .shooting-star {
    animation-duration: 9s;
  }

  .tech-track {
    gap: 20px;
  }

  .tech-item {
    font-size: 12px;
  }

  .go-top-button {
    right: 20px;
    bottom: 20px;
  }
}

/* ================================= */
/* REDUCE MOTION */
/* ================================= */

@media (prefers-reduced-motion: reduce) {
  .stars,
  .nebula,
  .shooting-star,
  .profile-glow,
  .tech-track {
    animation: none !important;
  }

  .cosmic-cursor {
    transition: none;
  }

  .go-top-enter-active,
  .go-top-leave-active {
    transition: none;
  }
}

/* Circular Profile Hover Gallery */
.profile-gallery {
  width: 224px;
  height: 224px;
  border-radius: 9999px;
  overflow: hidden;
}

.profile-gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9999px;
}

@media (max-width: 640px) {
  .profile-gallery {
    width: 160px;
    height: 160px;
  }
}

.aura {
  position: relative;
  display: inline-flex;
  isolation: isolate;
}

.aura::before,
.aura::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 12px;
  pointer-events: none;
}

.aura-dual::before {
  inset: -2px;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.2),
    transparent 35%,
    transparent 65%,
    rgba(120, 120, 255, 0.2)
  );
  filter: blur(6px);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.aura-dual::after {
  inset: -4px;
  background:
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.12), transparent 45%),
    radial-gradient(circle at 80% 50%, rgba(100, 100, 255, 0.12), transparent 45%);
  filter: blur(10px);
  opacity: 0.3;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.aura-dual:hover::before {
  opacity: 0.8;
}

.aura-dual:hover::after {
  opacity: 0.5;
  transform: scale(1.04);
}
</style>
