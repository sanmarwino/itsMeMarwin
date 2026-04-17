<template>
  <!-- Contact -->
  <section class="tw-text-white tw-mt-20 tw-relative" id="contact">
    <!-- Glow -->
    <div
      class="tw-absolute tw-bg-gradient-to-tr tw-opacity-25 tw-from-[#570cac] tw-to-primary tw-blur-3xl tw-h-32 tw-w-96 tw-z-0 tw-top-0 tw-left-0"
    ></div>

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
              Let's Connect
            </span>
          </h2>

          <!-- 3 Equal Cards -->
          <div class="tw-grid md:tw-grid-cols-3 tw-gap-6">
            <!-- Email -->
            <div
              class="tw-h-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10"
            >
              <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-4">
                <div
                  class="tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md"
                >
                  <img src="https://img.icons8.com/metro/50/000000/new-post.png" alt="email" class="tw-w-7 tw-h-7" />
                </div>

                <div>
                  <h4 class="tw-font-bold tw-text-lg">Email</h4>
                  <a href="mailto:marwinmedado@gmail.com" class="tw-text-gray-300 hover:tw-text-primary tw-break-all">
                    marwinmedado@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div
              class="tw-h-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10"
            >
              <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-4">
                <div
                  class="tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md"
                >
                  <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="phone" class="tw-w-7 tw-h-7" />
                </div>

                <div>
                  <h4 class="tw-font-bold tw-text-lg">Phone</h4>
                  <a href="tel:+639052633768" class="tw-text-gray-300 hover:tw-text-primary"> (+63) 9052633768 </a>
                </div>
              </div>
            </div>

            <!-- LinkedIn -->
            <div
              class="tw-h-full tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-white hover:tw-bg-white/10"
            >
              <div class="tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-4">
                <div
                  class="tw-w-14 tw-h-14 tw-rounded-2xl tw-bg-white tw-flex tw-items-center tw-justify-center tw-shadow-md"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
                    alt="linkedin"
                    class="tw-w-7 tw-h-7"
                  />
                </div>

                <div>
                  <h4 class="tw-font-bold tw-text-lg">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/marwin-medado-53297a306"
                    target="_blank"
                    class="tw-text-gray-300 hover:tw-text-primary tw-break-all"
                  >
                    linkedin.com/in/marwin-medado-53297a306
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>
