<template>
  <section class="tw-relative tw-w-full lg:tw-h-lvh md:tw-h-min" data-aos="zoom-in-up">
    <div class="tw-absolute tw-top-0 tw-inset-x-0 tw-h-64 tw-flex tw-items-start tw-h-full">
      <div class="tw-h-24 tw-w-2/3 tw-bg-gradient-to-br tw-from-[#D4C9BE] tw-blur-2xl tw-invisible tw-opacity-40"></div>

      <div class="tw-h-20 tw-w-3/5 tw-bg-gradient-to-r tw-from-[#123458] tw-opacity-40 tw-blur-2xl"></div>
    </div>

    <div
      class="tw-w-full tw-px-5 sm:tw-px-8 md:tw-px-12 lg:tw-px-8 tw-max-w-screen-lg lg:tw-max-w-screen-xl tw-mx-auto tw-relative"
    >
      <div
        class="tw-grid lg:tw-grid-cols-2 tw-gap-10 xl:tw-gap-14 tw-relative tw-pt-24 tw-pb-20 md:tw-pb-24 lg:tw-pb-0 lg:tw-max-w-none tw-max-w-2xl md:tw-max-w-3xl tw-mx-auto"
      >
        <div class="lg:tw-py-10">
          <div class="tw-text-center lg:tw-text-left">
            <h1 class="tw-pt-4 tw-text-white tw-font-bold tw-text-4xl md:tw-text-5xl lg:tw-text-8xl">
              Hi, I'm
              <span class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-gray-500">
                Marwin
              </span>
              😁
            </h1>
          </div>

          <p class="tw-text-gray-300 tw-pt-8 tw-text-center lg:tw-text-left tw-mx-auto tw-max-w-xl tw-font-mono">
            Passionate about innovation, I bring creative ideas to life through code. I continuously explore new
            technologies and embrace the endless possibilities of creative development. I build responsive, modern, and
            user-friendly web applications
          </p>

          <div
            class="tw-flex tw-items-center tw-gap-3 tw-pt-9 tw-flex-col sm:tw-flex-row sm:tw-w-max sm:tw-mx-auto lg:tw-mx-0"
          >
            <button
              class="tw-px-6 md:tw-px-7 tw-py-3 tw-rounded-full tw-relative tw-group tw-w-full sm:tw-w-max tw-flex tw-justify-center"
            >
              <span
                class="tw-absolute tw-inset-0 tw-rounded-3xl group-hover:tw-scale-105 tw-origin-center tw-transition-all tw-ease-in-out tw-bg-primary tw-border-2 tw-border-transparent"
              ></span>

              <span
                class="tw-relative tw-flex tw-items-center tw-justify-center tw-text-white"
                :href="contact"
                @click="scrollToSection(contact)"
              >
                Hire Me
              </span>
            </button>

            <button
              class="tw-border tw-border-primary tw-px-6 md:tw-px-7 tw-py-3 tw-rounded-full tw-relative tw-group tw-w-full sm:tw-w-max tw-flex tw-justify-center"
            >
              <div
                class="hover:tw-scale-105 tw-transition-all tw-ease-in-out tw-flex tw-justify-center tw-items-center tw-relative"
              >
                <div class="svg-container">
                  <svg
                    class="download-icon"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="download-arrow"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                      stroke="#f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                      20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                      20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                      stroke="#f59e0b"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>

                  <div class="download-loader tw-text-white tw-hidden"></div>
                </div>

                <a href="/resume.pdf" download="resume.pdf" class="tw-pl-2 tw-text-primary"> Download resume </a>
              </div>
            </button>
          </div>
        </div>

        <div class="lg:tw-h-full md:tw-flex">
          <div
            class="tw-flex tw-w-full tw-h-96 tw-min-h-[24rem] lg:tw-min-h-[none] lg:tw-w-full lg:tw-h-full tw-items-center tw-relative"
          >
            <div
              class="tw-absolute tw-z-0 tw-top-1/2 tw--translate-y-1/2 tw-w-5/6 tw-right-0 tw-h-[calc(80%+20px)] tw-bg-gradient-to-tr tw-opacity-25 tw-from-[#123458] tw-to-[#D4C9BE] tw-blur-2xl"
            ></div>

            <div
              class="tw-absolute tw-h-full tw-z-10 tw-p-2 tw--translate-y-1/2 tw-top-1/2 lg:tw-right-3 md:tw-right-40 sm:tw-right-16 tw-rounded-full tw-shadow-lg tw-border tw-border-primary tw-w-full sm:tw-w-3/4 md:tw-w-1/2 lg:tw-w-[550px]"
            >
              <img
                src="@/assets/profile_pic.jpg"
                alt="Profile pic"
                width="500"
                height="auto"
                loading="lazy"
                class="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
              />

              <div class="tw-text-center tw-pt-5">
                <span
                  class="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary tw-to-gray-500 tw-text-4xl tw-font-bold mb-5"
                >
                  FRONT-END WEB DEVELOPER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { ref } from "vue";
const contact = ref("#contact");
const scrollToSection = (contact) => {
  const section = document.querySelector(contact);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
