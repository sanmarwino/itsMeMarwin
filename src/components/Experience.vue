<template>
  <!-- Work Experience -->
  <section class="tw-text-white tw-mt-18 tw-relative tw-overflow-hidden" id="experience">
    <!-- Glow -->
    <div class="tw-absolute tw-right-0 tw-top-[110rem] tw-h-full tw-w-full tw-justify-end glow-float">
      <span class="tw-flex tw-opacity-20">
        <span class="tw-w-16 tw-h-32 tw-rounded-l-full tw-flex tw-bg-primary tw-blur-2xl"></span>
        <span class="tw-w-16 tw-h-32 tw-rounded-r-full tw-flex tw-bg-[#f88fc2] tw-blur-2xl tw-mt-14"></span>
      </span>
    </div>

    <div class="tw-relative tw-z-10 tw-py-8 tw-px-4 xl:tw-px-16 section-fade">
      <v-card
        elevation="0"
        class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-border-white hover:tw-shadow-xl hover:tw--translate-y-1 card-glow"
      >
        <div class="tw-p-6">
          <!-- Title -->
          <h2 class="tw-text-2xl tw-font-bold tw-pb-6 title-slide">
            <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
              Work Experiences
            </span>
          </h2>

          <!-- Experience Cards -->
          <div class="tw-grid md:tw-grid-cols-2 tw-gap-6">
            <div
              v-for="(item, index) in Experiences"
              :key="item.id"
              class="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10 hover:tw-shadow-xl hover:tw--translate-y-2 experience-card"
              :style="{ animationDelay: `${index * 0.12}s` }"
            >
              <div class="tw-flex tw-items-start tw-gap-4">
                <!-- Icon -->
                <div
                  class="tw-min-w-[60px] tw-w-[60px] tw-h-[60px] tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md icon-float"
                >
                  <img :src="item.logo" alt="company" class="tw-w-8 tw-h-8" />
                </div>

                <!-- Content -->
                <div class="tw-flex-1">
                  <h3 class="tw-text-lg md:tw-text-xl tw-font-bold tw-text-white">
                    {{ item.role }}
                  </h3>

                  <p class="tw-text-white tw-mt-1 tw-font-medium">
                    {{ item.company }}
                  </p>

                  <p class="tw-text-gray-400 tw-text-sm tw-mt-2">
                    {{ item.date }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const Experiences = ref([
  {
    id: 1,
    role: "Freelance - Web Developer",
    company: "South GG Promotions Corp.",
    date: "Feb 1, 2023 - Present",
    logo: "./company/south.png",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "South GG Promotions Corp.",
    date: "Nov 27, 2018 – Feb 1, 2023",
    logo: "./company/south.png",
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Wind’s Gate Philippine Software Development Inc.",
    date: "Mar 2018 – Sep 2018",
    logo: "./company/windsgate.png",
  },
  {
    id: 4,
    role: "Technical Support / IT Staff",
    company: "Oriental Port and Allied Services Corporation (OJT 2)",
    date: "Internship",
    logo: "./company/opascor.png",
  },
  {
    id: 5,
    role: "Debugger",
    company: "Cebu Institute of Technology University - CCS Department (OJT 1)",
    date: "Internship",
    logo: "./company/citu.png",
  },
]);
</script>

<style scoped>
.section-fade {
  animation: fadeInUp 0.9s ease-out;
}

.title-slide {
  animation: slideInLeft 0.9s ease-out;
}

.experience-card {
  opacity: 0;
  transform: translateY(30px) scale(0.97);
  animation: cardReveal 0.7s ease-out forwards;
}

.icon-float {
  animation: floatIcon 3s ease-in-out infinite;
}

.glow-float {
  animation: glowMove 6s ease-in-out infinite;
}

.card-glow {
  position: relative;
  overflow: hidden;
}

.card-glow::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card-glow:hover::before {
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes cardReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes glowMove {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-10px) translateX(-6px);
  }
}
</style>
