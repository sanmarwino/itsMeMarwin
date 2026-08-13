<script setup>
import { ref, computed } from "vue";

/*
|--------------------------------------------------------------------------
| Pagination
|--------------------------------------------------------------------------
*/

const visibleCount = ref(3);

/*
|--------------------------------------------------------------------------
| Project Modal
|--------------------------------------------------------------------------
*/

const selectedProject = ref(null);
const projectModal = ref(null);

const showMore = () => {
  visibleCount.value += 3;
};

const showLess = () => {
  visibleCount.value = 3;
};

const visibleProjects = computed(() => {
  return Projects.value.slice(0, visibleCount.value);
});

const openProjectImage = (project) => {
  selectedProject.value = project;
  projectModal.value?.showModal();
};

const closeProjectImage = () => {
  projectModal.value?.close();
  selectedProject.value = null;
};

/*
|--------------------------------------------------------------------------
| Tech Stack
|--------------------------------------------------------------------------
*/

const techStack = [
  { name: "HTML5", icon: "/skill/html.svg" },
  { name: "CSS3", icon: "/skill/css.svg" },
  { name: "JavaScript", icon: "/skill/javascript.svg" },
  { name: "Vue.js", icon: "/skill/vuejs.svg" },
  { name: "React.js", icon: "/skill/reactjs.svg" },
  { name: "Tailwind CSS", icon: "/skill/tailwindcss.svg" },
  { name: "DaisyUI", icon: "/skill/daisyui.png" },
  { name: "Laravel", icon: "/skill/laravel.png" },
  { name: "Inertia.js", icon: "/skill/inertia.png" },
  { name: "Node.js", icon: "/skill/nodejs.svg" },
  { name: "PHP", icon: "/skill/php.svg" },
  { name: "MySQL", icon: "/skill/mysql.svg" },
  { name: "PostgreSQL", icon: "/skill/postgress.png" },
  { name: "MongoDB", icon: "/skill/mongodb.png" },
  { name: "Git", icon: "/skill/git.png" },
  { name: "GitHub", icon: "/skill/github.png" },
  { name: "Vite", icon: "/skill/vite.png" },
  { name: "Vuetify", icon: "/skill/vuetify.svg" },
  { name: "Pinia", icon: "/skill/pinia.png" },
  { name: "Express.js", icon: "/skill/express.png" },
  { name: "Spring MVC", icon: "/skill/springmvc.svg" },
  { name: "Selenium", icon: "/skill/selenium.png" },
  { name: "Google AI Studio", icon: "/skill/googleaistudio.png" },
  { name: "Activepieces", icon: "/skill/activepieces.png" },
  { name: "Java", icon: "/skill/java.svg" },
  { name: "C#", icon: "/skill/csharp.svg" },
  { name: "Turbo C", icon: "/skill/turboc.svg" },
];

/*
|--------------------------------------------------------------------------
| Development Tools
|--------------------------------------------------------------------------
*/

const developmentTools = [
  { name: "Visual Studio Code", icon: "/tools/vscode.png" },
  { name: "Visual Studio", icon: "/tools/visualstudio.svg" },
  { name: "NetBeans", icon: "/tools/netbeans.svg" },
  { name: "Eclipse", icon: "/tools/eclipse.svg" },
  { name: "Sublime Text", icon: "/tools/sublime.png" },
  { name: "Notepad++", icon: "/tools/notepadplus.png" },
  { name: "Postman", icon: "/tools/postman.png" },
  { name: "XAMPP", icon: "/tools/xampp.svg" },
  { name: "Adobe Photoshop", icon: "/tools/photoshop.svg" },
  { name: "Adobe Premiere Pro", icon: "/tools/premier.png" },
  { name: "Figma", icon: "/tools/figma.png" },
  { name: "Microsoft Office", icon: "/tools/microsoftoffice.png" },
  { name: "WordPress", icon: "/tools/wordpress.svg" },
  { name: "Unity 3D", icon: "/tools/unity.svg" },
];

/*
|--------------------------------------------------------------------------
| Projects
|--------------------------------------------------------------------------
*/

const Projects = ref([
  {
    id: 1,
    category: "Software",
    image: "/project/attendance.JPG",
    title: "Attendance System",
    description:
      "A Japanese attendance management system using a fingerprint scanner powered by Python and Raspberry Pi, with a web application for attendance tracking.",
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
  },

  {
    id: 2,
    category: "Web Development",
    image: "/project/zealsgg.jpg",
    title: "Zeals Esports",
    description: "A Filipino esports organization website involved in the VALORANT scene and major tournaments.",
    technologies: ["WordPress"],
  },

  {
    id: 3,
    category: "Web Development",
    image: "/project/foresight.jpg",
    title: "Foresight.ph",
    description:
      "An esports platform that allows users to create matches, choose categories, select teams, and join their preferred team.",
    technologies: ["Vue.js 2", "Vuetify 2", "Socket.io", "Node.js", "XAMPP"],
  },

  {
    id: 4,
    category: "Web Development",
    image: "/project/dashboard.jpg",
    title: "Admin Dashboard",
    description: "An admin dashboard featuring data visualization and graphs.",
    technologies: ["Vue.js 2", "Vuetify 2", "Socket.io", "Node.js", "XAMPP"],
  },

  {
    id: 5,
    category: "Web Development",
    image: "/project/bet.png",
    title: "Dashboard",
    description: "A dashboard featuring user management, role-based access control, and user activity history.",
    technologies: ["Vue.js 2", "Vuetify 2", "Tailwind CSS", "Socket.io", "Node.js", "XAMPP"],
  },

  {
    id: 6,
    category: "Web Development",
    image: "/project/admindashboard.jpg",
    title: "Admin Dashboard",
    description: "An admin dashboard built to manage items, including hide and unhide functionality.",
    technologies: ["Vue.js 3", "Vuetify 2", "Tailwind CSS", "Socket.io", "Node.js", "XAMPP"],
  },

  {
    id: 7,
    category: "AI Web Application",
    image: "/project/courtly.jpg",
    title: "Courtly Booking Assistant",
    description:
      "AI-powered sports court booking platform with an intelligent assistant, Firebase database, and automated approval workflows. Admin-approved bookings automatically update Google Sheets and send confirmation emails through Gmail using Activepieces.",
    technologies: ["Vue.js", "Google AI Studio", "Firebase", "Activepieces", "Google Sheets", "Gmail"],
  },

  {
    id: 8,
    category: "Generative AI",
    image: "/project/govhr.jpg",
    title: "AI HR Assistant",
    description:
      "AI-powered HR assistant designed to help employees and applicants interact with HR information and services.",
    technologies: ["Vue.js", "Google AI Studio", "Activepieces", "JavaScript"],
  },
]);
</script>

<template>
  <!-- ================================= -->
  <!-- ABOUT ME -->
  <!-- ================================= -->

  <section class="py-5 sm:py-5">
    <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">About</p>

    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>

    <div class="max-w-3xl">
      <p class="mt-5 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
        Passionate about innovation, I bring creative ideas to life through code. I continuously explore new
        technologies and embrace the endless possibilities of creative development.
      </p>

      <p class="mt-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
        I specialize in building responsive, modern, and user-friendly web applications using modern frontend
        technologies and backend frameworks.
      </p>
    </div>
  </section>

  <!-- ================================= -->
  <!-- TECH STACK -->
  <!-- ================================= -->

  <section class="border-t border-white/5 py-5 sm:py-20">
    <h2 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">My Tech Stack</h2>

    <div class="space-y-3">
      <!-- First Row -->
      <div class="tech-marquee">
        <div class="tech-track tech-track-left">
          <div v-for="tech in techStack" :key="`about-tech-1-${tech.name}`" class="tech-item">
            <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

            <span>{{ tech.name }}</span>
          </div>

          <div v-for="tech in techStack" :key="`about-tech-1-copy-${tech.name}`" class="tech-item">
            <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="tech-marquee">
        <div class="tech-track tech-track-right">
          <div v-for="tech in [...techStack].reverse()" :key="`about-tech-2-${tech.name}`" class="tech-item">
            <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

            <span>{{ tech.name }}</span>
          </div>

          <div v-for="tech in [...techStack].reverse()" :key="`about-tech-2-copy-${tech.name}`" class="tech-item">
            <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================================= -->
  <!-- DEVELOPMENT TOOLS -->
  <!-- ================================= -->

  <section class="border-t border-white/5 py-5 sm:py-20">
    <h2 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Development Tools & Applications</h2>

    <div class="space-y-3">
      <!-- First Row -->
      <div class="tech-marquee">
        <div class="tech-track tech-track-left">
          <div v-for="tool in developmentTools" :key="`tools-1-${tool.name}`" class="tech-item">
            <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

            <span>{{ tool.name }}</span>
          </div>

          <div v-for="tool in developmentTools" :key="`tools-1-copy-${tool.name}`" class="tech-item">
            <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

            <span>{{ tool.name }}</span>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="tech-marquee">
        <div class="tech-track tech-track-right">
          <div v-for="tool in [...developmentTools].reverse()" :key="`tools-2-${tool.name}`" class="tech-item">
            <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

            <span>{{ tool.name }}</span>
          </div>

          <div v-for="tool in [...developmentTools].reverse()" :key="`tools-2-copy-${tool.name}`" class="tech-item">
            <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

            <span>{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================================= -->
  <!-- PROJECTS -->
  <!-- ================================= -->

  <section class="border-t border-white/5 py-12 sm:py-16">
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>

    <p class="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
      A collection of projects I've worked on, ranging from web applications and dashboards to software and esports
      platforms.
    </p>

    <!-- Project List -->
    <div class="mt-8 space-y-4">
      <article
        v-for="project in visibleProjects"
        :key="project.id"
        class="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
      >
        <div class="flex flex-col sm:flex-row">
          <!-- ================================= -->
          <!-- PROJECT IMAGE -->
          <!-- ================================= -->

          <div
            class="group/image relative h-48 w-full shrink-0 cursor-pointer overflow-hidden bg-white/[0.035] sm:h-56 sm:w-64"
            @click="openProjectImage(project)"
          >
            <!-- Image -->
            <img
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition duration-500 group-hover/image:scale-105"
            />

            <!-- Dark Hover Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/image:bg-black/60"
            >
              <!-- View Project Button -->
              <div
                class="translate-y-3 scale-90 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-medium text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:scale-100 group-hover/image:opacity-100"
              >
                <span class="flex items-center gap-2">
                  <!-- Eye Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12Z"
                    />

                    <circle cx="12" cy="12" r="2.75" />
                  </svg>

                  View Image
                </span>
              </div>
            </div>
          </div>

          <!-- ================================= -->
          <!-- PROJECT CONTENT -->
          <!-- ================================= -->

          <div class="flex flex-1 flex-col justify-center p-5 sm:p-6">
            <!-- Category -->
            <p class="text-xs font-medium uppercase tracking-[0.15em] text-gray-600">
              {{ project.category }}
            </p>

            <!-- Title -->
            <h3 class="mt-2 text-xl font-semibold text-white">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies"
                :key="`${project.id}-${technology}`"
                class="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] text-gray-500 transition hover:border-white/20 hover:text-gray-300"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- ================================= -->
    <!-- SHOW MORE / SHOW LESS -->
    <!-- ================================= -->

    <div v-if="Projects.length > 3" class="mt-8 flex justify-center">
      <button
        v-if="visibleCount < Projects.length"
        type="button"
        @click="showMore"
        class="rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      >
        <span class="flex items-center gap-2">
          Show More

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </span>
      </button>

      <button
        v-else
        type="button"
        @click="showLess"
        class="rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      >
        <span class="flex items-center gap-2">
          Show Less

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m5 15 7-7 7 7" />
          </svg>
        </span>
      </button>
    </div>
  </section>

  <!-- ================================= -->
  <!-- PROJECT IMAGE MODAL -->
  <!-- ================================= -->

  <dialog ref="projectModal" class="modal">
    <div
      v-if="selectedProject"
      class="modal-box max-h-[95vh] max-w-5xl overflow-hidden border border-white/10 bg-[#050507] p-0 text-white shadow-2xl"
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-[0.15em] text-gray-600">
            {{ selectedProject.category }}
          </p>

          <h3 class="mt-1 truncate text-lg font-semibold text-white">
            {{ selectedProject.title }}
          </h3>
        </div>

        <!-- Close -->
        <button
          type="button"
          class="btn btn-circle btn-ghost btn-sm shrink-0 text-gray-500 hover:bg-white/10 hover:text-white"
          @click="closeProjectImage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- ================================= -->
      <!-- LARGE IMAGE -->
      <!-- ================================= -->

      <div class="flex max-h-[70vh] items-center justify-center overflow-auto bg-black p-3 sm:p-6">
        <img
          :src="selectedProject.image"
          :alt="selectedProject.title"
          class="max-h-[65vh] max-w-full rounded-lg object-contain"
        />
      </div>

      <!-- ================================= -->
      <!-- MODAL CONTENT -->
      <!-- ================================= -->

      <div class="border-t border-white/10 px-5 py-5">
        <h4 class="text-base font-semibold text-white">
          {{ selectedProject.title }}
        </h4>

        <p class="mt-2 text-sm leading-6 text-gray-500">
          {{ selectedProject.description }}
        </p>

        <!-- Technologies -->
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="technology in selectedProject.technologies"
            :key="`${selectedProject.id}-modal-${technology}`"
            class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-500"
          >
            {{ technology }}
          </span>
        </div>
      </div>
    </div>

    <!-- ================================= -->
    <!-- CLICK OUTSIDE TO CLOSE -->
    <!-- ================================= -->

    <form method="dialog" class="modal-backdrop">
      <button @click="closeProjectImage">close</button>
    </form>
  </dialog>
</template>

<style scoped>
/*
|--------------------------------------------------------------------------
| TECH MARQUEE
|--------------------------------------------------------------------------
*/

.tech-marquee {
  position: relative;
  width: 100%;
  overflow: hidden;

  /* Safari */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);

  /* Prevent Safari layout issues */
  contain: layout paint;
}

.tech-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 28px;

  flex-shrink: 0;

  /* Force GPU layer */
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  will-change: transform;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.tech-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 7px;

  white-space: nowrap;

  font-size: 13px;
  line-height: 1;

  color: #6b7280;

  /* Safari GPU */
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.tech-item img {
  display: block;

  width: 20px;
  height: 20px;

  flex-shrink: 0;

  object-fit: contain;

  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.tech-item:hover {
  color: #fff;

  transform: translate3d(0, -1px, 0);
  -webkit-transform: translate3d(0, -1px, 0);
}

/*
|--------------------------------------------------------------------------
| LEFT MARQUEE
|--------------------------------------------------------------------------
*/

.tech-track-left {
  animation: marquee-left 35s linear infinite;
  -webkit-animation: marquee-left 35s linear infinite;
}

/*
|--------------------------------------------------------------------------
| RIGHT MARQUEE
|--------------------------------------------------------------------------
*/

.tech-track-right {
  animation: marquee-right 35s linear infinite;
  -webkit-animation: marquee-right 35s linear infinite;
}

/*
|--------------------------------------------------------------------------
| LEFT ANIMATION
|--------------------------------------------------------------------------
*/

@keyframes marquee-left {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@-webkit-keyframes marquee-left {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }
}

/*
|--------------------------------------------------------------------------
| RIGHT ANIMATION
|--------------------------------------------------------------------------
*/

@keyframes marquee-right {
  0% {
    transform: translate3d(-50%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes marquee-right {
  0% {
    -webkit-transform: translate3d(-50%, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

/*
|--------------------------------------------------------------------------
| DESKTOP HOVER
|--------------------------------------------------------------------------
*/

.tech-marquee:hover .tech-track {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}

/*
|--------------------------------------------------------------------------
| MOBILE
|--------------------------------------------------------------------------
*/

@media (max-width: 640px) {
  .tech-marquee {
    overflow: hidden;
  }

  .tech-track {
    gap: 20px;

    will-change: transform;

    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  .tech-item {
    font-size: 12px;
  }

  .tech-item img {
    width: 18px;
    height: 18px;
  }

  .tech-track-left {
    animation-duration: 30s;
    -webkit-animation-duration: 30s;
  }

  .tech-track-right {
    animation-duration: 30s;
    -webkit-animation-duration: 30s;
  }
}

/*
|--------------------------------------------------------------------------
| IOS SAFARI
|--------------------------------------------------------------------------
*/

@supports (-webkit-touch-callout: none) {
  .tech-marquee {
    overflow: hidden;

    contain: layout paint;

    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);

    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }

  .tech-track {
    display: flex;
    width: max-content;

    flex-shrink: 0;

    will-change: transform;

    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    perspective: 1000px;
    -webkit-perspective: 1000px;
  }

  .tech-track-left {
    animation: marquee-left-ios 35s linear infinite;
    -webkit-animation: marquee-left-ios 35s linear infinite;
  }

  .tech-track-right {
    animation: marquee-right-ios 35s linear infinite;
    -webkit-animation: marquee-right-ios 35s linear infinite;
  }

  @keyframes marquee-left-ios {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @-webkit-keyframes marquee-left-ios {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
    }

    100% {
      -webkit-transform: translate3d(-50%, 0, 0);
    }
  }

  @keyframes marquee-right-ios {
    0% {
      transform: translate3d(-50%, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes marquee-right-ios {
    0% {
      -webkit-transform: translate3d(-50%, 0, 0);
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
    }
  }
}
</style>
