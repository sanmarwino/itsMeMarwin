<template>
  <!-- Projects -->
  <section class="tw-text-white tw-mt-20 tw-relative" id="projects">
    <!-- Glow -->
    <div class="tw-absolute tw-right-0 tw-top-10 tw-w-full tw-pointer-events-none">
      <span class="tw-flex tw-justify-end tw-opacity-20">
        <span class="tw-w-20 tw-h-32 tw-rounded-l-full tw-bg-primary tw-blur-3xl"></span>
        <span class="tw-w-20 tw-h-32 tw-rounded-r-full tw-bg-[#f88fc2] tw-blur-3xl tw-mt-12"></span>
      </span>
    </div>

    <div class="tw-relative tw-z-10 tw-px-4 xl:tw-px-16 tw-py-8">
      <!-- Main Card -->
      <v-card
        elevation="0"
        class="tw-rounded-2xl tw-bg-[#21201d] tw-backdrop-blur-md tw-border tw-border-white/10 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-shadow-xl"
      >
        <div class="tw-p-6">
          <!-- Title -->
          <h2 class="tw-text-2xl tw-font-bold tw-pb-6">
            <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary">
              Projects
            </span>
          </h2>

          <!-- Grid -->
          <div class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="tw-rounded-2xl tw-overflow-hidden tw-border tw-border-white/10 tw-bg-white/5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-shadow-xl hover:tw-bg-white/10"
            >
              <!-- Image -->
              <div class="tw-relative tw-h-52 tw-overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="tw-w-full tw-h-full tw-object-cover tw-transition-all tw-duration-500 hover:tw-scale-110"
                />

                <!-- <div
                  class="tw-absolute tw-inset-0 tw-bg-black/40 tw-flex tw-items-center tw-justify-center tw-opacity-0 hover:tw-opacity-100 tw-transition-all tw-duration-300"
                >
                  <a
                    :href="project.webURL"
                    target="_blank"
                    class="tw-bg-white tw-text-black tw-px-4 tw-py-2 tw-rounded-xl tw-font-semibold"
                  >
                    View Project
                  </a>
                </div> -->
              </div>

              <!-- Content -->
              <div class="tw-p-5">
                <h3
                  class="tw-text-xl tw-font-bold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-secondary"
                >
                  {{ project.title }}
                </h3>

                <p class="tw-text-gray-300 tw-text-sm tw-mt-3 tw-min-h-[60px]">
                  {{ project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="tw-flex tw-flex-wrap tw-gap-2 tw-mt-4">
                  <span
                    v-for="technology in project.technologies"
                    :key="technology"
                    class="tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-medium tw-bg-white/10 tw-border tw-border-white/10"
                  >
                    {{ technology }}
                  </span>
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
import { ref, computed } from "vue";

const Projects = ref([
  {
    id: 1,
    category: "software",
    image: "./attendance.JPG",
    title: "Attendance System",
    description:
      "A software japanase attendance system with hardware fingerprint scanner using phyton and raspberry pi. and a web app to manage attendance.",
    technologies: [
      "Java 9",
      "Python",
      "Raspberry Pi",
      "Spring Boot",
      "PostgreSQL",
      "Tomcat 9",
      "Vue.js",
      "Vuetify",
      "Node.js",
    ],
    // webURL: "https://www.zeals.gg/about/",
  },
  {
    id: 2,
    category: "web development",
    image: "./zealsgg.jpg",
    title: "Zeals Esports",
    description: "A Filipino esports organization website involved in the VALORANT scene and major tournaments.",
    technologies: ["WordPress"],
    // webURL: "https://www.zeals.gg/about/",
  },
  {
    id: 3,
    category: "web development",
    image: "./foresight.jpg",
    title: "Foresight.ph",
    description: "Modern esports website built with Vue.js, Vuetify, Node.js, and XAMPP.",
    technologies: ["Vue.js 2", "Vuetify 2", "Node.js", "XAMPP"],
    // webURL: "https://foresight.ph/",
  },
  {
    id: 3,
    category: "web development",
    image: "./dashboard.jpg",
    title: "Admin Dashboard",
    description: "An admin dashboard featuring data visualization and graphs.",
    technologies: ["Vue.js 2", "Vuetify 2", "Node.js", "XAMPP"],
    // webURL: "https://foresight.ph/",
  },
  {
    id: 5,
    category: "web development",
    image: "./admindashboard.jpg",
    title: "Admin Dashboard",
    description: "An admin dashboard built to manage items, including hide and unhide functionality.",
    technologies: ["Vue.js 2", "Vuetify 2", "Node.js", "XAMPP"],
    // webURL: "https://foresight.ph/",
  },
  {
    id: 6,
    category: "web development",
    image: "./bet.png",
    title: "Dashboard",
    description: "A dashboard featuring user management, role-based access control, and user activity history.",
    technologies: ["Vue.js 2", "Vuetify 2", "Node.js", "XAMPP"],
    // webURL: "https://foresight.ph/",
  },
]);

const selectedCategory = ref("ALL");

const filteredProjects = computed(() => {
  if (selectedCategory.value === "ALL") return Projects.value;

  return Projects.value.filter((project) => project.category.toLowerCase() === selectedCategory.value.toLowerCase());
});
</script>
