<script setup>
import { ref } from "vue";

const achievements = ref([
  {
    id: 1,
    title: "Member",
    company: "Computer Student’s Society",
    date: "2013 - 2014",
    logo: "/achievements.png",
  },
  {
    id: 2,
    title: "Certificate of Completion",
    company: "Alliance Near Hire Program",
    date: "2016 - 2017",
    logo: "/achievements.png",
  },
  {
    id: 3,
    title: "Certificate of Participation",
    company: "South GG Promotions Corp. Leadership Training",
    date: "September 18, 2021",
    logo: "/achievements.png",
  },
  {
    id: 4,
    title: "Certificate of Completion",
    company: "Artificial Intelligence (AI) Course",
    date: "August 1, 2026",
    logo: "/achievements.png",
  },
]);

const seminars = ref([
  {
    id: 1,
    title: "GDG Campus Talk",
    location: "CIT University - Case Room",
    date: "September 17, 2016",
    logo: "/seminar.png",
  },
  {
    id: 2,
    title: "GDG Dev Fest Cebu 2016",
    location: "SM Seaside City Cebu",
    date: "November 19, 2016",
    logo: "/seminar.png",
  },
  {
    id: 3,
    title: "Leadership Training",
    location: "Bayfront, Cebu City",
    date: "September 18, 2021",
    logo: "/seminar.png",
  },
]);
</script>

<template>
  <!-- Achievements -->
  <section class="py-5 sm:py-5">
    <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Certifications</p>

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>

    <div class="mt-8 grid gap-4 sm:grid-cols-2">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
      >
        <div class="flex items-center gap-4">
          <!-- Logo -->
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2"
          >
            <img :src="achievement.logo" :alt="achievement.title" class="h-full w-full object-contain" />
          </div>

          <!-- Information -->
          <div class="min-w-0 flex-1">
            <h3 class="font-semibold text-white">
              {{ achievement.title }}
            </h3>

            <p class="mt-1 text-sm leading-6 text-gray-500">
              {{ achievement.company }}
            </p>

            <p class="mt-2 text-xs font-medium uppercase tracking-wide text-gray-600">
              {{ achievement.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Seminars -->
  <section class="border-t border-white/5 py-20 sm:py-28">
    <!-- <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Learning</p> -->

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Seminar Attended</h2>

    <div class="mt-8 space-y-4">
      <div
        v-for="seminar in seminars"
        :key="seminar.id"
        class="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
      >
        <div class="flex items-center gap-4">
          <!-- Logo -->
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2"
          >
            <img :src="seminar.logo" :alt="seminar.title" class="h-full w-full object-contain" />
          </div>

          <!-- Information -->
          <div class="min-w-0 flex-1">
            <h3 class="font-semibold text-white">
              {{ seminar.title }}
            </h3>

            <p class="mt-1 text-sm text-gray-500">
              {{ seminar.location }}
            </p>

            <p class="mt-2 text-xs font-medium uppercase tracking-wide text-gray-600">
              {{ seminar.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
