<script setup>
import { ref } from "vue";

/*
|--------------------------------------------------------------------------
| Achievements
|--------------------------------------------------------------------------
*/

const achievements = ref([
  {
    id: 1,
    title: "Member",
    company: "Computer Student’s Society",
    date: "2013 - 2014",
    logo: "/achievements.png",
    certificate: "/certificate/computer-student-society.jpg",
    file: 0,
  },
  {
    id: 2,
    title: "Certificate of Completion",
    company: "Alliance Near Hire Program",
    date: "2016 - 2017",
    logo: "/achievements.png",
    certificate: "/certificate/alliance-near-hire.jpg",
    file: 0,
  },
  {
    id: 3,
    title: "Certificate of Participation",
    company: "Leading and Managing People during Pandemic: A Mental Health Crisis Intervention",
    date: "September 18, 2021",
    logo: "/achievements.png",
    certificate: "/certificate/Leadership.jpg",
    file: 1,
  },
  {
    id: 4,
    title: "Certificate of Completion",
    company: "Artificial Intelligence (AI) Prompting for Automation Level II",
    date: "July 4, 2026 to August 1, 2026",
    logo: "/achievements.png",
    certificate: "/certificate/Artificial Intelligence (AI) Prompting for Automation Level II.jpg",
    file: 1,
  },
  {
    id: 5,
    title: "Certificate of Achievement",
    company: "Utilize Generative AI",
    date: "July 18, 2026",
    logo: "/achievements.png",
    certificate: "/certificate/Utilize Generative AI.jpg",
    file: 1,
  },
  {
    id: 6,
    title: "Certificate of Achievement",
    company: "Ensure Compliance with Data Privacy and Ethics",
    date: "July 18, 2026",
    logo: "/achievements.png",
    certificate: "/certificate/Ensure Compliance with Data Privacy and Ethics.jpg",
    file: 1,
  },
  {
    id: 7,
    title: "Certificate of Achievement",
    company: "Implement Basic Automation Techniques Using Artificial Intelligence (AI) Tools",
    date: "August 1, 2026",
    logo: "/achievements.png",
    certificate: "/certificate/Implement Basic Automation Techniques Using Artificial Intelligence (AI) Tools.jpg",
    file: 1,
  },
]);

/*
|--------------------------------------------------------------------------
| Seminars
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Certificate Modal
|--------------------------------------------------------------------------
*/

const selectedCertificate = ref(null);

const openCertificate = (achievement) => {
  selectedCertificate.value = achievement;
};

const closeCertificate = () => {
  selectedCertificate.value = null;
};
</script>

<template>
  <!-- ================================================================== -->
  <!-- Achievements -->
  <!-- ================================================================== -->

  <section class="py-5 sm:py-5">
    <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Certifications</p>

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>

    <div class="mt-8 grid gap-4 sm:grid-cols-2">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        @click="achievement.file && openCertificate(achievement)"
        class="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
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

            <!-- View Certificate -->
            <p
              class="mt-3 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:text-white"
              v-if="achievement.file"
            >
              Click to view certificate →
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================================================================== -->
  <!-- Seminars -->
  <!-- ================================================================== -->

  <section class="border-t border-white/5 py-20 sm:py-28">
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

  <!-- ================================================================== -->
  <!-- Certificate Modal -->
  <!-- ================================================================== -->

  <Transition name="fade">
    <div
      v-if="selectedCertificate"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      @click.self="closeCertificate"
    >
      <!-- Modal -->
      <div
        class="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl"
      >
        <!-- Close Button -->
        <button
          type="button"
          @click="closeCertificate"
          aria-label="Close certificate"
          class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition-all duration-200 hover:bg-white hover:text-black"
        >
          ×
        </button>

        <!-- Certificate Image -->
        <img
          :src="selectedCertificate.certificate"
          :alt="selectedCertificate.title"
          class="max-h-[90vh] max-w-full object-contain"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/*
|--------------------------------------------------------------------------
| Certificate Modal Animation
|--------------------------------------------------------------------------
*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
