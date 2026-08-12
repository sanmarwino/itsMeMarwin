<script setup>
import { ref } from "vue";

const Experiences = ref([
  {
    id: 1,
    role: "Freelance - Web Developer",
    company: "South GG Promotions Corp.",
    date: "Feb 1, 2023 - Present",
    logo: "/company/south.png",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "South GG Promotions Corp.",
    date: "Nov 27, 2018 – Feb 1, 2023",
    logo: "/company/south.png",
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Wind’s Gate Philippine Software Development Inc.",
    date: "Mar 2018 – Sep 2018",
    logo: "/company/windsgate.png",
  },
  {
    id: 4,
    role: "Technical Support / IT Staff",
    company: "Oriental Port and Allied Services Corporation (OJT 2)",
    date: "Internship",
    logo: "/company/opascor.png",
  },
  {
    id: 5,
    role: "Web Developer",
    company: "Cebu Institute of Technology University - CCS Department (OJT 1)",
    date: "Internship",
    logo: "/company/citu.png",
  },
]);

const Educations = ref([
  {
    id: 1,
    level: "Tertiary Level",
    degree: "Bachelor of Science in Information Technology",
    school: "Cebu Institute of Technology – University",
    address: "N. Bacalso Avenue, Cebu City",
    date: "2013 - 2017",
    logo: "/company/citu.png",
  },
  {
    id: 2,
    level: "Secondary Level",
    degree: "Secondary Education",
    school: "Salazar Colleges of Science and Institute of Technology",
    address: "N. Bacalso Avenue, Cebu City",
    date: "2009 - 2013",
    logo: "/company/salazar.png",
  },
]);
</script>

<template>
  <!-- Experience -->
  <section class="py-5 sm:py-5">
    <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Experience</p>

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>

    <div class="mt-8 space-y-4">
      <div
        v-for="experience in Experiences"
        :key="experience.id"
        class="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <!-- Company Logo -->
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2"
          >
            <img :src="experience.logo" :alt="experience.company" class="h-full w-full object-contain" />
          </div>

          <!-- Experience Info -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <h3 class="text-lg font-semibold text-white">
                  {{ experience.role }}
                </h3>

                <p class="mt-1 text-sm text-gray-500">
                  {{ experience.company }}
                </p>
              </div>

              <!-- Date -->
              <span class="w-fit shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                {{ experience.date }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education -->
  <section class="border-t border-white/5 py-20 sm:py-28">
    <!-- <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Education</p> -->

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>

    <div class="mt-8 space-y-4">
      <div
        v-for="education in Educations"
        :key="education.id"
        class="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
      >
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <!-- School Logo -->
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2"
          >
            <img :src="education.logo" :alt="education.school" class="h-full w-full object-contain" />
          </div>

          <!-- Education Information -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <!-- Level -->
                <p class="text-xs font-medium uppercase tracking-[0.15em] text-gray-600">
                  {{ education.level }}
                </p>

                <!-- Degree -->
                <h3 class="mt-1 text-lg font-semibold text-white">
                  {{ education.degree }}
                </h3>

                <!-- School -->
                <p class="mt-1 text-sm text-gray-400">
                  {{ education.school }}
                </p>

                <!-- Address -->
                <p class="mt-1 text-sm text-gray-600">
                  {{ education.address }}
                </p>
              </div>

              <!-- Date -->
              <span class="w-fit shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                {{ education.date }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
