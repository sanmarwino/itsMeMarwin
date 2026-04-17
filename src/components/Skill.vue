<template>
  <!-- Tech Stack -->
  <section class="tw-text-white tw-mt-18 tw-relative tw-overflow-hidden" id="skills">
    <div class="tw-absolute tw-right-0 tw-top-[110rem] tw-h-full tw-w-full tw-justify-end floating-blur">
      <span class="tw-flex tw-opacity-20">
        <span class="tw-w-16 tw-h-32 tw-rounded-l-full tw-flex tw-bg-primary tw-blur-2xl"></span>
        <span class="tw-w-16 tw-h-32 tw-rounded-r-full tw-flex tw-bg-[#f88fc2] tw-blur-2xl tw-mt-14"></span>
      </span>
    </div>

    <div
      class="md:tw-grid md:tw-grid-cols-1 tw-gap-8 tw-items-center tw-py-8 tw-px-4 xl:tw-gap-16 xl:tw-px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <v-card
        elevation="0"
        class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-border-white hover:tw-shadow-xl hover:tw--translate-y-1 card-glow"
      >
        <div class="tw-p-6">
          <h2 class="tw-text-2xl tw-font-bold tw-text-white tw-text-left tw-pb-5 title-animate">
            <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
              Programming Languages
            </span>
          </h2>

          <div class="tw-grid tw-grid-cols-3 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-7 tw-gap-y-10">
            <div
              v-for="(item, index) in techStack"
              :key="item.name"
              class="tw-flex tw-flex-col tw-items-center tw-group tw-cursor-pointer skill-item"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <div
                class="tw-w-16 tw-h-16 tw-rounded-2xl tw-bg-white tw-shadow-md tw-border tw-border-gray-200 tw-flex tw-items-center tw-justify-center tw-transition-all tw-duration-300 hover:tw-scale-110 hover:tw-shadow-xl hover:tw-border-primary hover:tw--translate-y-2 icon-box"
              >
                <img :src="item.logo" :alt="item.name" class="tw-w-9 tw-h-9 tw-object-contain" />
              </div>

              <p
                class="tw-mt-4 tw-text-sm md:tw-text-sm tw-font-semibold tw-text-white tw-transition-all tw-duration-300"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>

  <!-- Development tools and App -->
  <section class="tw-text-white tw-mt-18 tw-relative tw-overflow-hidden" id="tools">
    <div class="tw-absolute tw-right-0 tw-top-[110rem] tw-h-full tw-w-full tw-justify-end floating-blur">
      <span class="tw-flex tw-opacity-20">
        <span class="tw-w-16 tw-h-32 tw-rounded-l-full tw-flex tw-bg-primary tw-blur-2xl"></span>
        <span class="tw-w-16 tw-h-32 tw-rounded-r-full tw-flex tw-bg-[#f88fc2] tw-blur-2xl tw-mt-14"></span>
      </span>
    </div>

    <div
      class="md:tw-grid md:tw-grid-cols-1 tw-gap-8 tw-items-center tw-py-8 tw-px-4 xl:tw-gap-16 xl:tw-px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <v-card
        elevation="0"
        class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-border-white hover:tw-shadow-xl hover:tw--translate-y-1 card-glow"
      >
        <div class="tw-p-6">
          <h2 class="tw-text-2xl tw-font-bold tw-text-white tw-text-left tw-pb-5 title-animate">
            <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
              Development Tools & Applications
            </span>
          </h2>

          <div class="tw-grid tw-grid-cols-3 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-7 tw-gap-y-10">
            <div
              v-for="(item, index) in toolsStack"
              :key="item.name"
              class="tw-flex tw-flex-col tw-items-center tw-group tw-cursor-pointer skill-item"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <div
                class="tw-w-16 tw-h-16 tw-rounded-2xl tw-bg-white tw-shadow-md tw-border tw-border-gray-200 tw-flex tw-items-center tw-justify-center tw-transition-all tw-duration-300 hover:tw-scale-110 hover:tw-shadow-xl hover:tw-border-primary hover:tw--translate-y-2 icon-box"
              >
                <img :src="item.logo" :alt="item.name" class="tw-w-9 tw-h-9 tw-object-contain" />
              </div>

              <p class="tw-mt-4 tw-text-sm md:tw-text-sm tw-font-semibold tw-text-white">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>

<script setup>
const techStack = [
  { name: "Turbo C", logo: "./skill/turboc.svg" },
  { name: "C#", logo: "./skill/csharp.svg" },
  { name: "Visual Basic", logo: "./skill/visualbasic.png" },
  { name: "Java", logo: "./skill/java.svg" },
  { name: "SQL", logo: "./skill/mysql.svg" },
  { name: "HTML", logo: "./skill/html.svg" },
  { name: "CSS", logo: "./skill/css.svg" },
  { name: "PHP", logo: "./skill/php.svg" },
  { name: "JavaScript", logo: "./skill/javascript.svg" },
  { name: "Vue.js", logo: "./skill/vuejs.svg" },
  { name: "React.js", logo: "./skill/reactjs.svg" },
  { name: "Node.js", logo: "./skill/nodejs.svg" },
  { name: "Spring MVC", logo: "./skill/springmvc.svg" },
  { name: "Tailwind CSS", logo: "./skill/tailwindcss.svg" },
];

const toolsStack = [
  { name: "Microsoft Office", logo: "./tools/windows.svg" },
  { name: "Adobe Photoshop", logo: "./tools/photoshop.svg" },
  { name: "Adobe Premiere", logo: "./tools/premier.png" },
  { name: "Unity 3D", logo: "./tools/unity.svg" },
  { name: "NetBeans", logo: "./tools/netbeans.svg" },
  { name: "Sublime Text", logo: "./tools/sublime.png" },
  { name: "Notepad++", logo: "./tools/notepadplus.png" },
  { name: "Eclipse", logo: "./tools/eclipse.svg" },
  { name: "XAMPP", logo: "./tools/xampp.svg" },
  { name: "Git", logo: "./tools/git.svg" },
  { name: "Visual Studio", logo: "./tools/visualstudio.svg" },
  { name: "WordPress", logo: "./tools/wordpress.svg" },
  { name: "PostgreSQL", logo: "./tools/postgress.svg" },
];
</script>

<style scoped>
.skill-item {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: fadeUpStagger 0.7s ease forwards;
}

.title-animate {
  animation: slideFade 0.9s ease;
}

.icon-box {
  animation: softFloat 3s ease-in-out infinite;
}

.card-glow {
  position: relative;
  overflow: hidden;
}

.card-glow::before {
  content: "";
  position: absolute;
  inset: -2px;
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 1rem;
  pointer-events: none;
}

.card-glow:hover::before {
  opacity: 1;
}

.floating-blur {
  animation: floatBlur 6s ease-in-out infinite;
}

@keyframes fadeUpStagger {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideFade {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes softFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes floatBlur {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-10px) translateX(-5px);
  }
}
</style>
