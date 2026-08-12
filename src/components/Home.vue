<script setup>
import { ref } from "vue";
import profileImage from "../assets/profile_pic.jpg";

const activeSection = ref("about");

const showSection = (section) => {
  activeSection.value = section;

  // Move to the content area after clicking navigation
  setTimeout(() => {
    document.getElementById("content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 50);
};

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
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-black text-white">
    <!-- ============================= -->
    <!-- BACKGROUND -->
    <!-- ============================= -->

    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <!-- Small dots -->
      <div
        class="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:28px_28px]"
      ></div>

      <!-- Large dots -->
      <div
        class="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.25)_2px,transparent_2px)] [background-size:100px_100px]"
      ></div>

      <!-- Top glow -->
      <div
        class="absolute -top-80 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[150px]"
      ></div>

      <!-- Left glow -->
      <div class="absolute -left-80 top-[30%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]"></div>

      <!-- Right glow -->
      <div class="absolute -right-80 top-[60%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]"></div>

      <!-- Vignette -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_70%,#000_100%)]"
      ></div>
    </div>

    <!-- ============================= -->
    <!-- NAVBAR -->
    <!-- ============================= -->

    <header class="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-6 sm:py-6">
      <!-- Logo -->
      <a href="#" class="text-base font-semibold tracking-tight sm:text-lg"> Marwin </a>

      <!-- Desktop Navigation -->
      <nav class="hidden items-center gap-6 text-sm text-gray-500 md:flex lg:gap-8">
        <a href="#about" class="transition-colors hover:text-white"> About </a>

        <a href="#experience" class="transition-colors hover:text-white"> Experience </a>

        <a href="#projects" class="transition-colors hover:text-white"> Projects </a>

        <a href="#contact" class="transition-colors hover:text-white"> Contact </a>
      </nav>

      <!-- Resume -->
      <div class="aura aura-silver rounded-lg">
        <a href="#" class="btn btn-sm rounded-lg border-0 bg-base-100 text-white hover:bg-base-200 sm:btn-md">
          Resume
        </a>
      </div>
    </header>

    <!-- ============================= -->
    <!-- MAIN -->
    <!-- ============================= -->

    <main class="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
      <!-- ============================= -->
      <!-- HERO -->
      <!-- ============================= -->

      <section
        class="flex min-h-[calc(100vh-80px)] items-center justify-center py-20 text-center sm:min-h-[90vh] sm:py-24"
      >
        <div class="w-full max-w-3xl">
          <!-- Profile Image -->
          <div class="mb-8 flex justify-center">
            <div
              class="relative h-32 w-32 overflow-hidden rounded-full border border-white/15 p-1 shadow-[0_0_70px_rgba(255,255,255,0.15)] sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-60 lg:w-60"
            >
              <img :src="profileImage" alt="Marwin Joseph" class="h-full w-full rounded-full object-cover" />
            </div>
          </div>

          <!-- Greeting -->
          <p class="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:mb-5 sm:text-sm">
            Hello, I'm
          </p>

          <!-- Name -->
          <h1 class="text-3xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-6xl">
            Marwin Joseph Medado
          </h1>

          <!-- Job -->
          <h2 class="mt-4 text-xl font-medium text-gray-400 sm:mt-5 sm:text-2xl md:text-3xl">
            Front-End Web Developer
          </h2>

          <!-- Description -->
          <!-- Navigation -->
          <div
            class="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8"
          >
            <button
              type="button"
              @click="showSection('about')"
              :class="activeSection === 'about' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="text-sm font-medium transition-colors sm:text-base"
            >
              About
            </button>

            <span class="text-white/10">/</span>

            <button
              type="button"
              @click="showSection('experience')"
              :class="activeSection === 'experience' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="text-sm font-medium transition-colors sm:text-base"
            >
              Experience
            </button>

            <span class="text-white/10">/</span>

            <button
              type="button"
              @click="showSection('certifications')"
              :class="activeSection === 'certifications' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="text-sm font-medium transition-colors sm:text-base"
            >
              Certifications
            </button>

            <span class="text-white/10">/</span>

            <button
              type="button"
              @click="showSection('blogs')"
              :class="activeSection === 'blogs' ? 'text-white' : 'text-gray-500 hover:text-white'"
              class="text-sm font-medium transition-colors sm:text-base"
            >
              Blogs
            </button>
          </div>

          <!-- Buttons -->
          <div class="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href="#projects"
              class="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200 sm:px-6"
            >
              View Projects
            </a>

            <a
              href="#contact"
              class="rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5 sm:px-6"
            >
              Contact Me
            </a>
          </div>

          <!-- Social Links -->
          <div class="mt-8 flex items-center justify-center gap-5 text-sm text-gray-600">
            <a href="#" class="transition hover:text-white"> GitHub </a>

            <span class="text-white/10"> / </span>

            <a href="#" class="transition hover:text-white"> LinkedIn </a>
          </div>
        </div>
      </section>

      <!-- ============================= -->
      <!-- TECH STACK -->
      <!-- ============================= -->
      <section id="tech-stack" class="relative overflow-hidden border-y border-white/5 py-8 sm:py-10">
        <div class="mx-auto max-w-6xl px-0 sm:px-0">
          <!-- Title -->
          <h2 class="mb-5 text-3xl font-bold tracking-tight sm:text-3xl">My Tech-Stack</h2>

          <!-- Rows -->
          <div class="space-y-3">
            <!-- ROW 1 -->
            <div class="tech-marquee overflow-hidden">
              <div class="tech-track tech-track-left">
                <div v-for="tech in techStack" :key="`row1-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>

                <!-- Duplicate -->
                <div v-for="tech in techStack" :key="`row1-copy-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>

            <!-- ROW 2 -->
            <div class="tech-marquee overflow-hidden">
              <div class="tech-track tech-track-right">
                <div v-for="tech in [...techStack].reverse()" :key="`row2-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>

                <!-- Duplicate -->
                <div v-for="tech in [...techStack].reverse()" :key="`row2-copy-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" class="relative overflow-hidden border-y border-white/5 py-8 sm:py-10">
        <div class="mx-auto max-w-6xl px-0 sm:px-0">
          <!-- Title -->
          <h2 class="mb-5 text-3xl font-bold tracking-tight sm:text-3xl">Development Tools & Applications</h2>

          <!-- Rows -->
          <div class="space-y-3">
            <!-- ROW 1 -->
            <div class="tech-marquee overflow-hidden">
              <div class="tech-track tech-track-left">
                <div v-for="tech in developmentTools" :key="`row1-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>

                <!-- Duplicate -->
                <div v-for="tech in developmentTools" :key="`row1-copy-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>

            <!-- ROW 2 -->
            <div class="tech-marquee overflow-hidden">
              <div class="tech-track tech-track-right">
                <div v-for="tech in [...developmentTools].reverse()" :key="`row2-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>

                <!-- Duplicate -->
                <div v-for="tech in [...developmentTools].reverse()" :key="`row2-copy-${tech.name}`" class="tech-item">
                  <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                  <span>{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ============================= -->
      <!-- DYNAMIC CONTENT -->
      <!-- ============================= -->

      <div id="content" class="scroll-mt-10">
        <!-- ============================= -->
        <!-- ABOUT -->
        <!-- ============================= -->

        <div v-if="activeSection === 'about'">
          <!-- About Me -->
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <div class="max-w-3xl">
              <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">About</p>

              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>

              <p class="mt-5 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8">
                Passionate about innovation, I bring creative ideas to life through code. I continuously explore new
                technologies and embrace the endless possibilities of creative development.
              </p>

              <p class="mt-4 text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                I specialize in building responsive, modern, and user-friendly web applications using modern frontend
                technologies and backend frameworks.
              </p>
            </div>
          </section>

          <!-- ============================= -->
          <!-- PROJECTS -->
          <!-- ============================= -->

          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Portfolio</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>

            <div class="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
              <!-- Project 1 -->
              <article
                class="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-5"
              >
                <div
                  class="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-white/[0.035] text-xs text-gray-700 sm:text-sm"
                >
                  Project Preview
                </div>

                <div class="mt-5">
                  <h3 class="text-lg font-semibold sm:text-xl">Project One</h3>

                  <p class="mt-2 text-sm leading-6 text-gray-600">
                    Modern web application built with Vue, Laravel and Tailwind CSS.
                  </p>

                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      Vue.js
                    </span>

                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      Laravel
                    </span>

                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      Tailwind
                    </span>
                  </div>
                </div>
              </article>

              <!-- Project 2 -->
              <article
                class="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-5"
              >
                <div
                  class="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-white/[0.035] text-xs text-gray-700 sm:text-sm"
                >
                  Project Preview
                </div>

                <div class="mt-5">
                  <h3 class="text-lg font-semibold sm:text-xl">Project Two</h3>

                  <p class="mt-2 text-sm leading-6 text-gray-600">
                    Responsive dashboard and web interface with modern UI components.
                  </p>

                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      React
                    </span>

                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      JavaScript
                    </span>

                    <span class="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-500">
                      Tailwind
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <!-- ============================= -->
          <!-- TECH STACK -->
          <!-- ============================= -->

          <section class="relative overflow-hidden border-t border-white/5 py-20 sm:py-28 md:py-32">
            <h2 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">My Tech Stack</h2>

            <div class="space-y-3">
              <!-- Row 1 -->
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

              <!-- Row 2 -->
              <div class="tech-marquee">
                <div class="tech-track tech-track-right">
                  <div v-for="tech in [...techStack].reverse()" :key="`about-tech-2-${tech.name}`" class="tech-item">
                    <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                    <span>{{ tech.name }}</span>
                  </div>

                  <div
                    v-for="tech in [...techStack].reverse()"
                    :key="`about-tech-2-copy-${tech.name}`"
                    class="tech-item"
                  >
                    <img :src="tech.icon" :alt="tech.name" class="h-5 w-5 object-contain" />

                    <span>{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- ============================= -->
          <!-- DEVELOPMENT TOOLS -->
          <!-- ============================= -->

          <section class="relative overflow-hidden border-t border-white/5 py-20 sm:py-28 md:py-32">
            <h2 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Development Tools & Applications</h2>

            <div class="space-y-3">
              <!-- Row 1 -->
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

              <!-- Row 2 -->
              <div class="tech-marquee">
                <div class="tech-track tech-track-right">
                  <div v-for="tool in [...developmentTools].reverse()" :key="`tools-2-${tool.name}`" class="tech-item">
                    <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

                    <span>{{ tool.name }}</span>
                  </div>

                  <div
                    v-for="tool in [...developmentTools].reverse()"
                    :key="`tools-2-copy-${tool.name}`"
                    class="tech-item"
                  >
                    <img :src="tool.icon" :alt="tool.name" class="h-5 w-5 object-contain" />

                    <span>{{ tool.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- ============================= -->
        <!-- EXPERIENCE -->
        <!-- ============================= -->

        <div v-else-if="activeSection === 'experience'">
          <!-- Work Experience -->
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Experience</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>

            <div class="mt-8 space-y-4">
              <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm sm:p-7">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 class="text-lg font-semibold">Front-End Web Developer</h3>

                    <p class="mt-1 text-sm text-gray-600">Freelance</p>
                  </div>

                  <span class="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                    7+ Years
                  </span>
                </div>

                <p class="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                  Developing responsive web applications and user interfaces using Vue.js, React.js, JavaScript,
                  Tailwind CSS, Laravel and Inertia.js.
                </p>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Education</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>

            <div class="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
              <h3 class="text-lg font-semibold">Bachelor of Science in Information Technology</h3>

              <p class="mt-2 text-sm text-gray-500">Cebu Institute of Technology</p>

              <p class="mt-4 text-sm leading-7 text-gray-600">
                Studied software development, web technologies, database systems, programming and information
                technology.
              </p>
            </div>
          </section>
        </div>

        <!-- ============================= -->
        <!-- CERTIFICATIONS -->
        <!-- ============================= -->

        <div v-else-if="activeSection === 'certifications'">
          <!-- Achievements -->
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Certifications</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Achievements</h2>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <h3 class="font-semibold">Web Development Achievement</h3>

                <p class="mt-2 text-sm leading-6 text-gray-600">
                  Achievement and recognition related to web development and software engineering.
                </p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <h3 class="font-semibold">Technology Achievement</h3>

                <p class="mt-2 text-sm leading-6 text-gray-600">
                  Recognition for technical development and continuous learning.
                </p>
              </div>
            </div>
          </section>

          <!-- Seminar -->
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Learning</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Seminar Attended</h2>

            <div class="mt-8 space-y-4">
              <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <h3 class="font-semibold">Web Development & Modern Technologies</h3>

                <p class="mt-2 text-sm text-gray-600">Seminar / Workshop</p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <h3 class="font-semibold">Generative AI & Application Development</h3>

                <p class="mt-2 text-sm text-gray-600">Seminar / Workshop</p>
              </div>
            </div>
          </section>
        </div>

        <!-- ============================= -->
        <!-- BLOGS -->
        <!-- ============================= -->

        <div v-else-if="activeSection === 'blogs'">
          <section class="border-t border-white/5 py-20 sm:py-28 md:py-32">
            <p class="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600 sm:text-sm">Blog</p>

            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Latest Articles</h2>

            <div class="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
              <article
                class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 sm:p-6"
              >
                <p class="text-xs uppercase tracking-wider text-gray-600">Development</p>

                <h3 class="mt-3 text-lg font-semibold">Building Modern Vue.js Applications</h3>

                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Notes and experiences building modern, responsive applications with Vue.js and Tailwind CSS.
                </p>

                <button class="mt-5 text-sm text-gray-400 transition hover:text-white">Read Article →</button>
              </article>

              <article
                class="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 sm:p-6"
              >
                <p class="text-xs uppercase tracking-wider text-gray-600">AI</p>

                <h3 class="mt-3 text-lg font-semibold">Exploring Generative AI for Web Applications</h3>

                <p class="mt-3 text-sm leading-6 text-gray-600">
                  Exploring practical ways to integrate AI tools into modern web applications.
                </p>

                <button class="mt-5 text-sm text-gray-400 transition hover:text-white">Read Article →</button>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>

    <!-- ============================= -->
    <!-- FOOTER -->
    <!-- ============================= -->

    <footer class="relative z-10 border-t border-white/5 px-5 py-8 text-center text-xs text-gray-700 sm:px-6">
      © 2026 Marwin Joseph. All rights reserved.
    </footer>
  </div>
</template>
<style>
.tech-marquee {
  width: 100%;
  overflow: hidden;
}

.tech-track {
  display: flex;
  width: max-content;
  align-items: center;
  gap: 28px;
}

.tech-item {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 7px;
  white-space: nowrap;

  font-size: 13px;
  color: #6b7280;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.tech-item:hover {
  color: #fff;
  transform: translateY(-1px);
}

/* Row 1: moves left */
.tech-track-left {
  animation: marquee-left 35s linear infinite;
}

/* Row 2: moves right */
.tech-track-right {
  animation: marquee-right 35s linear infinite;
}

@keyframes marquee-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

.tech-marquee:hover .tech-track {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .tech-track {
    gap: 20px;
  }

  .tech-item {
    font-size: 12px;
  }
}
</style>
