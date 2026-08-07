<template>
  <section id="skills">
    <div
      v-for="(section, sectionIndex) in skillSections"
      :key="section.title"
      class="tw-px-4 tw-py-8 xl:tw-px-16"
      data-aos="fade-up"
      data-aos-duration="1000"
      :data-aos-delay="sectionIndex * 200"
    >
      <v-card
        elevation="0"
        class="tw-rounded-3xl tw-bg-[#21201d] tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-border-primary/50 hover:tw-shadow-2xl card-glow"
      >
        <div class="tw-p-6 md:tw-p-8">
          <!-- Heading -->
          <h2 class="tw-mb-8 tw-text-2xl md:tw-text-3xl tw-font-bold">
            <span class="tw-bg-gradient-to-r tw-from-primary tw-to-secondary tw-bg-clip-text tw-text-transparent">
              {{ section.title }}
            </span>
          </h2>

          <!-- Skills Grid -->
          <div
            class="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-5 xl:tw-grid-cols-6 2xl:tw-grid-cols-7 tw-gap-8"
          >
            <div
              v-for="(item, index) in section.items"
              :key="item.name"
              class="tw-flex tw-flex-col tw-items-center tw-group tw-cursor-pointer"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <!-- Icon -->
              <div
                class="tw-flex tw-h-20 tw-w-20 tw-items-center tw-justify-center tw-rounded-2xl tw-bg-white tw-border tw-border-gray-200 tw-shadow-lg tw-transition-all tw-duration-300 group-hover:tw-scale-110 group-hover:tw--translate-y-2 group-hover:tw-border-primary group-hover:tw-shadow-2xl"
              >
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="tw-h-10 tw-w-10 tw-object-contain tw-transition-transform tw-duration-300 group-hover:tw-scale-110"
                />
              </div>

              <!-- Name -->
              <p
                class="tw-mt-4 tw-text-center tw-text-xs md:tw-text-sm tw-font-semibold tw-text-white tw-leading-tight"
              >
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
  // Frontend
  { name: "HTML5", logo: "./skill/html.svg" },
  { name: "CSS3", logo: "./skill/css.svg" },
  { name: "JavaScript", logo: "./skill/javascript.svg" },
  { name: "Vue.js", logo: "./skill/vuejs.svg" },
  { name: "React.js", logo: "./skill/reactjs.svg" },
  { name: "Tailwind CSS", logo: "./skill/tailwindcss.svg" },
  { name: "DaisyUI", logo: "./skill/daisyui.jpg" },
  { name: "Vuetify", logo: "./skill/vuetify.svg" },

  // Backend
  { name: "PHP", logo: "./skill/php.svg" },
  { name: "Laravel", logo: "./skill/laravel.png" },
  { name: "Node.js", logo: "./skill/nodejs.svg" },
  { name: "Express.js", logo: "./skill/express.png" },
  { name: "Spring MVC", logo: "./skill/springmvc.svg" },

  // Database
  { name: "MySQL", logo: "./skill/mysql.svg" },
  { name: "PostgreSQL", logo: "./skill/postgress.png" },

  // Testing
  { name: "Selenium", logo: "./skill/selenium.png" },

  // Version Control
  { name: "Git", logo: "./skill/git.png" },
  { name: "GitHub", logo: "./skill/github.png" },

  // AI & Automation
  { name: "Google AI Studio", logo: "./skill/googleaistudio.png" },
  { name: "Activepieces", logo: "./skill/activepieces.png" },

  // Others
  { name: "Java", logo: "./skill/java.svg" },
  { name: "C#", logo: "./skill/csharp.svg" },
  { name: "Turbo C", logo: "./skill/turboc.svg" },
];

const toolsStack = [
  // IDEs & Editors
  { name: "Visual Studio Code", logo: "./tools/vscode.png" },
  { name: "Visual Studio", logo: "./tools/visualstudio.svg" },
  { name: "NetBeans", logo: "./tools/netbeans.svg" },
  { name: "Eclipse", logo: "./tools/eclipse.svg" },
  { name: "Sublime Text", logo: "./tools/sublime.png" },
  { name: "Notepad++", logo: "./tools/notepadplus.png" },

  // API & Development
  { name: "Postman", logo: "./tools/postman.png" },
  { name: "XAMPP", logo: "./tools/xampp.svg" },

  // Design
  { name: "Adobe Photoshop", logo: "./tools/photoshop.svg" },
  { name: "Adobe Premiere Pro", logo: "./tools/premier.png" },
  { name: "Figma", logo: "./tools/figma.png" },

  // Productivity
  { name: "Microsoft Office", logo: "./tools/microsoftoffice.jpg" },
  { name: "WordPress", logo: "./tools/wordpress.svg" },

  // Game Development
  { name: "Unity 3D", logo: "./tools/unity.svg" },
];

const skillSections = [
  {
    title: "Programming Languages & Technologies",
    items: techStack,
  },
  {
    title: "Development Tools & Applications",
    items: toolsStack,
  },
];
</script>
