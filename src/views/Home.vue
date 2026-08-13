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
          <h1 class="text-3xl font-bold tracking-[-0.04em] sm:text-6xl md:text-5xl lg:text-6xl">
            Marwin Joseph Medado
          </h1>

          <!-- Job -->
          <h2 class="mt-4 text-md font-medium text-gray-400 sm:text-2xl md:text-2xl">Front-End Web Developer</h2>

          <!-- ================================= -->
          <!-- NAVIGATION -->
          <!-- ================================= -->

          <div
            class="mx-auto mt-8 flex w-full max-w-2xl items-center justify-center gap-2.5 px-0.5 sm:mt-10 sm:gap-5 sm:px-0"
          >
            <!-- About -->
            <button
              type="button"
              @click="showSection('about')"
              :class="activeSection === 'about' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
            >
              About
            </button>

            <span class="shrink-0 text-white/10">/</span>

            <!-- Experience -->
            <button
              type="button"
              @click="showSection('experience')"
              :class="activeSection === 'experience' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
            >
              Experience
            </button>

            <span class="shrink-0 text-white/10">/</span>

            <!-- Certifications -->
            <button
              type="button"
              @click="showSection('certifications')"
              :class="activeSection === 'certifications' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
            >
              Certifications
            </button>

            <span class="shrink-0 text-white/10">/</span>

            <!-- Hire Me -->
            <button
              type="button"
              @click="showSection('hire-me')"
              :class="activeSection === 'hire-me' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
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
/* =========================================================
   GALAXY BACKGROUND
========================================================= */

.galaxy-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #010104;
}

/* =========================================================
   STARS
========================================================= */

.stars {
  position: absolute;
  inset: -100px;
  pointer-events: none;
  background-repeat: repeat;

  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  will-change: transform;
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

  -webkit-animation: stars-drift-small 80s linear infinite;
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

  -webkit-animation: stars-drift-medium 120s linear infinite;
  animation: stars-drift-medium 120s linear infinite;
}

/* Large Stars */

.stars-large {
  opacity: 0.8;

  background-image: radial-gradient(circle, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0.8) 1px, transparent 2px);

  background-size: 320px 320px;

  -webkit-animation: stars-twinkle 4s ease-in-out infinite alternate;
  animation: stars-twinkle 4s ease-in-out infinite alternate;
}

/* =========================================================
   STAR KEYFRAMES
========================================================= */

@-webkit-keyframes stars-drift-small {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-100px, 80px, 0);
  }
}

@keyframes stars-drift-small {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100px, 80px, 0);
  }
}

@-webkit-keyframes stars-drift-medium {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(150px, -100px, 0);
  }
}

@keyframes stars-drift-medium {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(150px, -100px, 0);
  }
}

@-webkit-keyframes stars-twinkle {
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

/* =========================================================
   NEBULA
========================================================= */

.nebula {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;

  filter: blur(100px);

  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  will-change: transform;
}

/* Top Left */

.nebula-one {
  width: 700px;
  height: 500px;

  top: -150px;
  left: 5%;

  opacity: 0.3;

  background: radial-gradient(ellipse, rgba(90, 80, 255, 0.45), rgba(60, 40, 160, 0.15), transparent 70%);

  -webkit-animation: nebula-one 18s ease-in-out infinite alternate;
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

  -webkit-animation: nebula-two 22s ease-in-out infinite alternate;
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

  -webkit-animation: nebula-three 25s ease-in-out infinite alternate;
  animation: nebula-three 25s ease-in-out infinite alternate;
}

/* Nebula animations */

@-webkit-keyframes nebula-one {
  0% {
    -webkit-transform: translate3d(-50px, 0, 0) scale(1);
  }

  100% {
    -webkit-transform: translate3d(100px, 80px, 0) scale(1.25);
  }
}

@keyframes nebula-one {
  0% {
    transform: translate3d(-50px, 0, 0) scale(1);
  }

  100% {
    transform: translate3d(100px, 80px, 0) scale(1.25);
  }
}

@-webkit-keyframes nebula-two {
  0% {
    -webkit-transform: translate3d(50px, -30px, 0) scale(1);
  }

  100% {
    -webkit-transform: translate3d(-100px, 100px, 0) scale(1.3);
  }
}

@keyframes nebula-two {
  0% {
    transform: translate3d(50px, -30px, 0) scale(1);
  }

  100% {
    transform: translate3d(-100px, 100px, 0) scale(1.3);
  }
}

@-webkit-keyframes nebula-three {
  0% {
    -webkit-transform: translate3d(0, 30px, 0) scale(1);
  }

  100% {
    -webkit-transform: translate3d(80px, -80px, 0) scale(1.25);
  }
}

@keyframes nebula-three {
  0% {
    transform: translate3d(0, 30px, 0) scale(1);
  }

  100% {
    transform: translate3d(80px, -80px, 0) scale(1.25);
  }
}

/* =========================================================
   SHOOTING STARS
========================================================= */

.shooting-star {
  position: absolute;

  width: 2px;
  height: 2px;

  border-radius: 50%;

  background: #fff;

  box-shadow:
    0 0 6px #fff,
    0 0 15px rgba(150, 170, 255, 0.9);

  opacity: 0;

  -webkit-transform: translate3d(0, 0, 0) rotate(-35deg);
  transform: translate3d(0, 0, 0) rotate(-35deg);

  will-change: transform, opacity;

  -webkit-animation: shooting-star 7s linear infinite;
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

  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

.shooting-star-2 {
  top: 35%;
  left: 20%;

  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}

.shooting-star-3 {
  top: 60%;
  left: 80%;

  -webkit-animation-delay: 8s;
  animation-delay: 8s;
}

@-webkit-keyframes shooting-star {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0) rotate(-35deg);
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 0;
    -webkit-transform: translate3d(-400px, 250px, 0) rotate(-35deg);
  }

  100% {
    opacity: 0;
    -webkit-transform: translate3d(-400px, 250px, 0) rotate(-35deg);
  }
}

@keyframes shooting-star {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(-35deg);
  }

  5% {
    opacity: 1;
  }

  15% {
    opacity: 0;
    transform: translate3d(-400px, 250px, 0) rotate(-35deg);
  }

  100% {
    opacity: 0;
    transform: translate3d(-400px, 250px, 0) rotate(-35deg);
  }
}

/* =========================================================
   COSMIC CURSOR
========================================================= */

.cosmic-cursor {
  position: absolute;

  width: 500px;
  height: 500px;

  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);

  border-radius: 50%;

  background: radial-gradient(circle, rgba(120, 120, 255, 0.09) 0%, rgba(90, 80, 220, 0.04) 30%, transparent 70%);

  filter: blur(20px);

  transition:
    left 0.35s ease-out,
    top 0.35s ease-out;

  mix-blend-mode: screen;
}

/* =========================================================
   VIGNETTE
========================================================= */

.galaxy-vignette {
  position: absolute;
  inset: 0;

  pointer-events: none;

  background: radial-gradient(
    circle at center,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.6) 80%,
    #000 100%
  );
}

/* =========================================================
   PROFILE
========================================================= */

.profile-wrapper {
  box-shadow:
    0 0 50px rgba(255, 255, 255, 0.08),
    0 0 100px rgba(100, 100, 255, 0.08);

  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.profile-wrapper:hover {
  -webkit-transform: scale(1.03);
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

  -webkit-animation: profile-spin 8s linear infinite;
  animation: profile-spin 8s linear infinite;
}

@-webkit-keyframes profile-spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes profile-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* =========================================================
   NAVIGATION
========================================================= */

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

  background: #fff;

  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);

  transition: width 0.3s ease;
}

.nav-button:hover::after {
  width: 100%;
}

/* =========================================================
   SECTION
========================================================= */

.section-content {
  -webkit-animation: section-enter 0.45s ease;
  animation: section-enter 0.45s ease;
}

@-webkit-keyframes section-enter {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 12px, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes section-enter {
  0% {
    opacity: 0;
    transform: translate3d(0, 12px, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* =========================================================
   TECH MARQUEE
========================================================= */

/*
   IMPORTANT:

   Do NOT use:
   - width: max-content
   - translateX(-50%)
   - contain: layout paint
   - perspective

   on iOS Safari for this marquee.

   Instead, the track uses a fixed flex layout and the
   duplicated content creates a seamless loop.
*/

.tech-marquee {
  position: relative;

  width: 100%;

  overflow: hidden;

  -webkit-overflow-scrolling: touch;

  /*
   * Safari clipping
   */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%);

  mask-image: linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%);
}

/*
   TRACK

   Use inline-flex instead of width:max-content.
*/

.tech-track {
  display: inline-flex;

  align-items: center;

  gap: 28px;

  white-space: nowrap;

  /*
   * Safari GPU layer
   */
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  will-change: transform;

  /*
   * Prevent flex shrinking
   */
  flex-shrink: 0;

  /*
   * IMPORTANT FOR SAFARI
   */
  min-width: max-content;
}

/* =========================================================
   TECH ITEM
========================================================= */

.tech-item {
  display: inline-flex;

  flex: 0 0 auto;

  align-items: center;

  gap: 7px;

  white-space: nowrap;

  font-size: 13px;

  color: #6b7280;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.tech-item img {
  display: block;

  width: 20px;
  height: 20px;

  flex: 0 0 20px;

  object-fit: contain;
}

.tech-item:hover {
  color: #fff;

  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}

/* =========================================================
   MARQUEE ANIMATION
========================================================= */

/*
   Instead of percentage-based movement,
   Safari handles translate3d very reliably.

   The track contains TWO identical copies.

   - First copy = original
   - Second copy = duplicate

   The animation moves approximately half the track.
*/

.tech-track-left {
  -webkit-animation: marquee-left 30s linear infinite;

  animation: marquee-left 30s linear infinite;
}

.tech-track-right {
  -webkit-animation: marquee-right 30s linear infinite;

  animation: marquee-right 30s linear infinite;
}

/* LEFT */

@-webkit-keyframes marquee-left {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
}

@keyframes marquee-left {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* RIGHT */

@-webkit-keyframes marquee-right {
  0% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes marquee-right {
  0% {
    transform: translate3d(-50%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

/* =========================================================
   DESKTOP HOVER
========================================================= */

@media (hover: hover) and (pointer: fine) {
  .tech-marquee:hover .tech-track {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
}

/* =========================================================
   GO TOP
========================================================= */

.go-top-button {
  box-shadow:
    0 0 20px rgba(255, 255, 255, 0.05),
    0 0 40px rgba(100, 100, 255, 0.04);

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.go-top-button:hover {
  box-shadow:
    0 0 25px rgba(255, 255, 255, 0.1),
    0 0 50px rgba(100, 100, 255, 0.08);
}

/* =========================================================
   GO TOP TRANSITION
========================================================= */

.go-top-enter-active,
.go-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.go-top-enter-from,
.go-top-leave-to {
  opacity: 0;

  -webkit-transform: translate3d(0, 15px, 0) scale(0.9);
  transform: translate3d(0, 15px, 0) scale(0.9);
}

/* =========================================================
   PROFILE GALLERY
========================================================= */

.profile-gallery {
  width: 224px;
  height: 224px;

  display: grid;

  position: relative;

  overflow: hidden;

  border-radius: 9999px;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.profile-gallery img {
  grid-area: 1 / 1;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  border-radius: 9999px;

  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

/* =========================================================
   AURA
========================================================= */

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

  pointer-events: none;

  border-radius: 12px;
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

  -webkit-transform: scale(1.04);
  transform: scale(1.04);
}

/* =========================================================
   MOBILE
========================================================= */

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
    -webkit-animation-duration: 9s;
    animation-duration: 9s;
  }

  .tech-track {
    gap: 20px;
  }

  .tech-item {
    font-size: 12px;
  }

  .tech-item img {
    width: 18px;
    height: 18px;

    flex-basis: 18px;
  }

  /*
   * Slightly faster on mobile
   */
  .tech-track-left {
    -webkit-animation-duration: 25s;
    animation-duration: 25s;
  }

  .tech-track-right {
    -webkit-animation-duration: 25s;
    animation-duration: 25s;
  }

  .go-top-button {
    right: 20px;
    bottom: 20px;
  }

  .profile-gallery {
    width: 160px;
    height: 160px;
  }
}

/* =========================================================
   SMALL IOS DEVICES
========================================================= */

@media (max-width: 390px) {
  .tech-track {
    gap: 18px;
  }

  .tech-item {
    font-size: 11px;
  }

  .tech-item img {
    width: 17px;
    height: 17px;

    flex-basis: 17px;
  }

  .tech-track-left,
  .tech-track-right {
    -webkit-animation-duration: 22s;
    animation-duration: 22s;
  }
}

/* =========================================================
   IOS SAFARI
========================================================= */

@supports (-webkit-touch-callout: none) {
  /*
   * Do NOT use:
   *
   * contain: layout paint;
   * perspective;
   * mask clipping on animated child;
   *
   * because these can cause the animation layer
   * to stop updating on some iOS Safari versions.
   */

  .tech-marquee {
    overflow: hidden;

    /*
     * Force a compositing layer on the container
     */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .tech-track {
    display: inline-flex;

    width: auto;

    min-width: max-content;

    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  .tech-item {
    display: inline-flex;

    flex-shrink: 0;
  }
}

/* =========================================================
   REDUCE MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .stars,
  .nebula,
  .shooting-star,
  .profile-glow,
  .tech-track {
    -webkit-animation: none !important;
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
</style>
