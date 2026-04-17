<template>
  <!-- Achievements & Seminar -->
  <section class="tw-text-white tw-mt-18 tw-relative" id="achievement">
    <!-- Glow -->
    <div class="tw-absolute tw-left-0 tw-top-20 tw-h-full tw-w-full tw-pointer-events-none">
      <span class="tw-flex tw-opacity-20">
        <span class="tw-w-20 tw-h-32 tw-rounded-r-full tw-bg-primary tw-blur-3xl"></span>
        <span class="tw-w-20 tw-h-32 tw-rounded-l-full tw-bg-[#f88fc2] tw-blur-3xl tw-mt-16"></span>
      </span>
    </div>

    <div class="tw-relative tw-z-10 tw-py-8 tw-px-4 xl:tw-px-16">
      <div class="tw-grid lg:tw-grid-cols-2 tw-gap-8">
        <!-- ACHIEVEMENTS -->
        <v-card
          elevation="0"
          class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-shadow-xl"
        >
          <div class="tw-p-6">
            <h2 class="tw-text-2xl tw-font-bold tw-pb-6">
              <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
                Achievements
              </span>
            </h2>

            <div class="tw-space-y-5">
              <div
                v-for="item in achievements"
                :key="item.id"
                class="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10"
              >
                <div class="tw-flex tw-gap-4">
                  <!-- Icon -->
                  <div
                    class="tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md"
                  >
                    <img :src="item.logo" alt="achievement" class="tw-w-8 tw-h-8" />
                  </div>

                  <!-- Content -->
                  <div class="tw-flex-1">
                    <h3 class="tw-font-bold tw-text-lg tw-text-transparent tw-text-white">
                      {{ item.title }}
                    </h3>

                    <p class="tw-text-white tw-mt-1">
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

        <!-- SEMINAR -->
        <v-card
          elevation="0"
          class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-shadow-xl"
        >
          <div class="tw-p-6">
            <h2 class="tw-text-2xl tw-font-bold tw-pb-6">
              <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
                Seminar Attended
              </span>
            </h2>

            <div class="tw-space-y-5">
              <div
                v-for="item in seminars"
                :key="item.id"
                class="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10"
              >
                <div class="tw-flex tw-gap-4">
                  <!-- Icon -->
                  <div
                    class="tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md"
                  >
                    <img :src="item.logo" alt="seminar" class="tw-w-8 tw-h-8" />
                  </div>

                  <!-- Content -->
                  <div class="tw-flex-1">
                    <h3 class="tw-font-bold tw-text-lg tw-text-white">
                      {{ item.title }}
                    </h3>

                    <p class="tw-text-white tw-mt-1">
                      {{ item.location }}
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
    </div>
  </section>
</template>

<script setup>
const achievements = [
  {
    id: 1,
    title: "Member",
    company: "Computer Student’s Society",
    date: "2013 - 2014",
    logo: "./achievements.png",
  },
  {
    id: 2,
    title: "Certificate of Completion",
    company: "Alliance Near Hire Program",
    date: "2016 - 2017",
    logo: "./achievements.png",
  },
  {
    id: 3,
    title: "Certificate of Participation",
    company: "South GG Promotions Corp. Leadership Training",
    date: "September 18, 2021",
    logo: "./achievements.png",
  },
];

const seminars = [
  {
    id: 1,
    title: "GDG Campus Talk",
    location: "CIT University - Case Room",
    date: "September 17, 2016",
    logo: "./seminar.png",
  },
  {
    id: 2,
    title: "GDG Dev Fest Cebu 2016",
    location: "SM Seaside City Cebu",
    date: "November 19, 2016",
    logo: "./seminar.png",
  },
  {
    id: 3,
    title: "Leadership Training",
    location: "Bayfront, Cebu City",
    date: "September 18, 2021",
    logo: "./seminar.png",
  },
];
</script>
