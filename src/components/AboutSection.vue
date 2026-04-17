<template>
  <section class="tw-text-white tw-mt-20" id="about">
    <div class="tw-absolute tw-z-0 tw-top-[93rem] tw-inset-x-0 tw-h-64 tw-flex tw-items-start">
      <div
        class="tw-h-24 tw-w-64 tw-bg-gradient-to-br tw-from-primary tw-via-secondary tw-blur-2xl tw-to-[#570cac] tw-opacity-20"
      ></div>
    </div>

    <div
      class="md:tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center tw-py-8 tw-px-4 xl:tw-gap-16 sm:tw-py-16 xl:tw-px-16 tw-z-1"
    >
      <div data-aos="flip-right">
        <h2 class="tw-text-4xl tw-font-bold tw-text-white tw-text-left tw-mb-8">EDUCATION</h2>

        <div class="tw-space-y-8 tw-py-8">
          <div
            v-for="element in education"
            :key="element.id"
            class="tw-flex tw-items-center md:tw-w-[80%] tw-w-full tw-rounded-xl tw-bg-[#F1EFEC] tw-shadow-lg tw-border tw-border-[#1f1641]"
          >
            <div class="tw-w-1/4 tw-justify-items-center">
              <img src="https://img.icons8.com/?size=100&id=12197&format=png&color=000000" alt="graduation-cap--v1" />
            </div>

            <div class="tw-w-3/4 tw-pl-4 tw-font-mono">
              <h3
                class="tw-text-2xl tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-gray-500 lg:tw-text-xl"
              >
                {{ element.School }}
              </h3>

              <p class="tw-text-black">{{ element.program }}</p>
              <p class="tw-text-black">{{ element.program1 }}</p>
              <p class="tw-text-black">{{ element.address }}</p>
              <p class="tw-text-black">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-mt-4 md:tw-mt-0 tw-text-left tw-flex tw-flex-col tw-z-10 tw-h-full" data-aos="flip-right">
        <h2 class="tw-text-4xl tw-font-bold tw-text-white md:tw-text-center tw-text-left tw-mb-4">
          <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
            PROFILE
          </span>
        </h2>

        <div>
          <div class="tw-flex tw-items-end tw-justify-between" data-aos="fade-right">
            <ul class="tw-space-y-8 tw-text-lg tw-pt-10">
              <li class="tw-text-white tw-font-mono">
                <span class="tw-font-bold tw-uppercase">Fullname:</span>
                Marwin Joseph Medado
              </li>

              <li class="tw-text-white tw-font-mono">
                <span class="tw-font-bold tw-uppercase">Birth Date:</span>
                February 13, 1996
              </li>

              <li class="tw-text-white tw-font-mono">
                <span class="tw-font-bold tw-uppercase">Job:</span>
                Freelancer, Frontend Developer
              </li>

              <li class="tw-text-white tw-font-mono">
                <span class="tw-font-bold tw-uppercase">Contact # :</span>
                +63 9052633768
              </li>

              <li class="tw-text-white tw-font-mono">
                <span class="tw-font-bold tw-uppercase">Email:</span>
                marwinmedado@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const education = ref([
  {
    id: 1,
    School: "Cebu Institute of Technology – University",
    program: "Bachelor of Science in Information Technology",
    program1: "Tertiary Level",
    address: "N. Bacalso Avenue, Cebu City ",
    year: "2013-2017",
  },
  {
    id: 2,
    School: "Salazar Colleges of Science and Institute of Technology",
    program: "Secondary Level",
    address: "N.Bacalso Avenue, Cebu City",
    year: "2009-2013",
  },
  {
    id: 3,
    School: "Tisa 1, Elementary School",
    program: "Elementary Level",
    address: "Tisa, Cebu City",
    year: "2003-2009",
  },
]);
</script>
