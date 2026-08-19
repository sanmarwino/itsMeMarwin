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

/*
|--------------------------------------------------------------------------
| Navigation
|--------------------------------------------------------------------------
*/

const activeSection = ref("about");

/*
|--------------------------------------------------------------------------
| Galaxy Mouse Glow
|--------------------------------------------------------------------------
*/

const mouseX = ref(50);
const mouseY = ref(50);

/*
|--------------------------------------------------------------------------
| Go To Top
|--------------------------------------------------------------------------
*/

const showGoTop = ref(false);

/*
|--------------------------------------------------------------------------
| Section Navigation
|--------------------------------------------------------------------------
*/

const showSection = (section) => {
  activeSection.value = section;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*
|--------------------------------------------------------------------------
| Mouse Move
|--------------------------------------------------------------------------
*/

const handleMouseMove = (event) => {
  mouseX.value = (event.clientX / window.innerWidth) * 100;

  mouseY.value = (event.clientY / window.innerHeight) * 100;
};

/*
|--------------------------------------------------------------------------
| Scroll
|--------------------------------------------------------------------------
*/

const handleScroll = () => {
  showGoTop.value = window.scrollY > 400;
};

/*
|--------------------------------------------------------------------------
| Go To Top
|--------------------------------------------------------------------------
*/

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*
|--------------------------------------------------------------------------
| Shooting Stars
|--------------------------------------------------------------------------
|
| We do NOT use CSS @keyframes for shooting stars.
|
| iOS Safari and Chrome on iOS use WebKit, and percentage-based
| CSS animations can be unreliable when combined with fixed layers,
| overflow, transforms and multiple GPU effects.
|
| requestAnimationFrame gives us direct control over the movement.
|--------------------------------------------------------------------------
*/

const shootingStars = ref([]);

let shootingAnimationFrame = null;
let shootingLastTime = 0;

/*
|--------------------------------------------------------------------------
| Shooting Star Configuration
|--------------------------------------------------------------------------
*/

const shootingStarStates = [
  {
    element: null,

    /*
     * Progress through the cycle.
     */
    progress: 0,

    /*
     * Seconds before first appearance.
     */
    initialDelay: 0,

    /*
     * Current delay.
     */
    delay: 0,

    /*
     * Complete cycle duration.
     */
    cycle: 5.5,
  },

  {
    element: null,
    progress: 0,
    initialDelay: 2.2,
    delay: 2.2,
    cycle: 5.5,
  },

  {
    element: null,
    progress: 0,
    initialDelay: 4.1,
    delay: 4.1,
    cycle: 5.5,
  },
];

/*
|--------------------------------------------------------------------------
| Initialize Shooting Stars
|--------------------------------------------------------------------------
*/

const initializeShootingStars = () => {
  shootingStars.value = Array.from(document.querySelectorAll(".shooting-star"));

  shootingStarStates.forEach((state, index) => {
    state.element = shootingStars.value[index] || null;

    state.delay = state.initialDelay;

    if (!state.element) {
      return;
    }

    /*
     * Initial hidden state.
     */
    state.element.style.opacity = "0";

    state.element.style.transform = "translate3d(0, 0, 0) rotate(-35deg)";

    /*
     * Safari/WebKit uses the same transform property,
     * but setting both is harmless and improves compatibility
     * with older iOS versions.
     */
    state.element.style.webkitTransform = "translate3d(0, 0, 0) rotate(-35deg)";
  });

  shootingLastTime = 0;
};

/*
|--------------------------------------------------------------------------
| Animate Shooting Stars
|--------------------------------------------------------------------------
*/

const animateShootingStars = (timestamp) => {
  /*
   * If the page is hidden, don't process animation.
   */
  if (document.hidden) {
    shootingLastTime = timestamp;

    shootingAnimationFrame = requestAnimationFrame(animateShootingStars);

    return;
  }

  if (!shootingLastTime) {
    shootingLastTime = timestamp;
  }

  /*
   * Prevent large jumps when Safari temporarily pauses
   * rendering or the browser switches tabs.
   */
  const delta = Math.min(timestamp - shootingLastTime, 50);

  shootingLastTime = timestamp;

  shootingStarStates.forEach((state) => {
    if (!state.element) {
      return;
    }

    /*
     * Convert milliseconds to seconds.
     */
    const seconds = delta / 1000;

    /*
     * Countdown before each star starts.
     */
    if (state.delay > 0) {
      state.delay -= seconds;

      state.element.style.opacity = "0";

      return;
    }

    /*
     * Progress through shooting animation.
     *
     * 0 = starting position
     * 1 = ending position
     */
    state.progress += seconds / state.cycle;

    /*
     * Restart.
     */
    if (state.progress >= 1) {
      state.progress = 0;

      /*
       * Small random delay so all stars don't become
       * perfectly synchronized.
       */
      state.delay = 0.8 + Math.random() * 2.5;

      state.element.style.opacity = "0";

      return;
    }

    const progress = state.progress;

    /*
     * Shooting happens during the first 22%
     * of the cycle.
     */
    const shootingDuration = 0.22;

    /*
     * Not currently shooting.
     */
    if (progress >= shootingDuration) {
      state.element.style.opacity = "0";

      return;
    }

    /*
     * Normalize the shooting progress from 0 to 1.
     */
    const p = progress / shootingDuration;

    /*
     * Ease movement slightly.
     */
    const eased = 1 - Math.pow(1 - p, 2);

    /*
     * Movement distance.
     */
    const x = -400 * eased;

    const y = 250 * eased;

    /*
     * Fade in quickly and fade out near the end.
     */
    let opacity = 1;

    if (p < 0.12) {
      opacity = p / 0.12;
    } else if (p > 0.72) {
      opacity = 1 - (p - 0.72) / 0.28;
    }

    /*
     * Make sure opacity stays between 0 and 1.
     */
    opacity = Math.max(0, Math.min(1, opacity));

    const transform = `translate3d(${x}px, ${y}px, 0) rotate(-35deg)`;

    state.element.style.opacity = String(opacity);

    state.element.style.transform = transform;

    state.element.style.webkitTransform = transform;
  });

  shootingAnimationFrame = requestAnimationFrame(animateShootingStars);
};

/*
|--------------------------------------------------------------------------
| Page Visibility
|--------------------------------------------------------------------------
*/

const handleVisibilityChange = () => {
  /*
   * Reset timing when returning to the page.
   */
  shootingLastTime = 0;
};

/*
|--------------------------------------------------------------------------
| Lifecycle
|--------------------------------------------------------------------------
*/

onMounted(() => {
  /*
   * Mouse glow.
   */
  window.addEventListener("mousemove", handleMouseMove);

  /*
   * Go top button.
   */
  window.addEventListener("scroll", handleScroll);

  handleScroll();

  /*
   * Shooting stars.
   *
   * Wait for the DOM to exist.
   */
  requestAnimationFrame(() => {
    initializeShootingStars();

    shootingAnimationFrame = requestAnimationFrame(animateShootingStars);
  });

  /*
   * Reset animation timing when returning
   * from another tab/app.
   */
  document.addEventListener("visibilitychange", handleVisibilityChange);
});

onBeforeUnmount(() => {
  /*
   * Remove listeners.
   */
  window.removeEventListener("mousemove", handleMouseMove);

  window.removeEventListener("scroll", handleScroll);

  document.removeEventListener("visibilitychange", handleVisibilityChange);

  /*
   * Stop animation frame.
   */
  if (shootingAnimationFrame) {
    cancelAnimationFrame(shootingAnimationFrame);

    shootingAnimationFrame = null;
  }
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

      <!-- ================================= -->
      <!-- SHOOTING STARS -->
      <!-- ================================= -->

      <div class="shooting-star shooting-star-1"></div>

      <div class="shooting-star shooting-star-2"></div>

      <div class="shooting-star shooting-star-3"></div>

      <!-- ================================= -->
      <!-- MOUSE GLOW -->
      <!-- ================================= -->

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

    <main class="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
      <!-- ================================= -->
      <!-- HERO -->
      <!-- ================================= -->

      <section class="flex items-center justify-center py-5 text-center">
        <div class="w-full max-w-3xl">
          <!-- Profile Image -->

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

            <span class="shrink-0 text-white/10"> / </span>

            <!-- Experience -->

            <button
              type="button"
              @click="showSection('experience')"
              :class="activeSection === 'experience' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
            >
              Experience
            </button>

            <span class="shrink-0 text-white/10"> / </span>

            <!-- Certifications -->

            <button
              type="button"
              @click="showSection('certifications')"
              :class="activeSection === 'certifications' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="nav-button shrink-0 text-xs font-medium transition-colors min-[400px]:text-sm sm:text-base"
            >
              Certifications
            </button>

            <span class="shrink-0 text-white/10"> / </span>

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
            <span> View My Resume </span>

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

/* ================================= */
/* SMALL STARS */
/* ================================= */

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

/* ================================= */
/* MEDIUM STARS */
/* ================================= */

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

/* ================================= */
/* LARGE STARS */
/* ================================= */

.stars-large {
  opacity: 0.8;

  background-image: radial-gradient(circle, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0.8) 1px, transparent 2px);

  background-size: 320px 320px;

  animation: stars-twinkle 4s ease-in-out infinite alternate;
}

/* ================================= */
/* STAR ANIMATIONS */
/* ================================= */

@keyframes stars-drift-small {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(-100px, 80px);
  }
}

@keyframes stars-drift-medium {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(150px, -100px);
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
    transform: translate(-50px, 0) scale(1);
  }

  to {
    transform: translate(100px, 80px) scale(1.25);
  }
}

@keyframes nebula-two {
  from {
    transform: translate(50px, -30px) scale(1);
  }

  to {
    transform: translate(-100px, 100px) scale(1.3);
  }
}

@keyframes nebula-three {
  from {
    transform: translate(0, 30px) scale(1);
  }

  to {
    transform: translate(80px, -80px) scale(1.25);
  }
}

/* ================================= */
/* SHOOTING STARS */
/* ================================= */

/*
 * IMPORTANT:
 *
 * There is NO CSS animation here.
 *
 * JavaScript requestAnimationFrame()
 * controls transform + opacity.
 */

.shooting-star {
  position: absolute;

  width: 2px;
  height: 2px;

  border-radius: 50%;

  background: #ffffff;

  box-shadow:
    0 0 6px #ffffff,
    0 0 15px rgba(150, 170, 255, 0.9);

  opacity: 0;

  pointer-events: none;

  transform: translate3d(0, 0, 0) rotate(-35deg);
}

.shooting-star::after {
  content: "";

  position: absolute;

  width: 120px;
  height: 1px;

  top: 0;
  right: 0;

  background: linear-gradient(to left, rgba(255, 255, 255, 0.85), transparent);

  transform-origin: right center;

  pointer-events: none;
}

/* ================================= */
/* SHOOTING STAR POSITIONS */
/* ================================= */

.shooting-star-1 {
  top: 15%;
  left: 70%;
}

.shooting-star-2 {
  top: 35%;
  left: 20%;
}

.shooting-star-3 {
  top: 60%;
  left: 80%;
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

  pointer-events: none;
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

/* ================================= */
/* GO TOP TRANSITION */
/* ================================= */

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

  /*
   * Mouse glow isn't useful on touch devices.
   */
  .cosmic-cursor {
    display: none;
  }

  /*
   * Slightly smaller shooting-star trail
   * for mobile screens.
   */
  .shooting-star::after {
    width: 90px;
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

/* ================================= */
/* CIRCULAR PROFILE HOVER GALLERY */
/* ================================= */

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

  display: block;
}

/* ================================= */
/* PROFILE GALLERY MOBILE */
/* ================================= */

@media (max-width: 640px) {
  .profile-gallery {
    width: 160px;
    height: 160px;
  }
}

/* ================================= */
/* AURA BUTTON */
/* ================================= */

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
