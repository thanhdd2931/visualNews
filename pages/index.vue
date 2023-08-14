<template>
  <div>
    <!-- header -->
    <compHeader />

    <!-- Content -->
    <div class="lt:container lt:mx-auto lt:px-0 mb:px-[10px]">
      <!-- before marketing -->
      <div class="tb:grid tb:grid-cols-4 tb:gap-8">
        <div class="col-span-3">
          <!-- main -->
          <div class="tb:grid tb:grid-cols-10 tb:gap-8 mb-7">
            <div class="col-span-4 flex flex-col">
              <!-- ItemNews -->
              <div class="pb-5 border-b">
                <itemNews
                  author="FASHION"
                  title="The best smart glasses to buy now, according to experts"
                  image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg"
                />
              </div>
              <div class="py-5 border-b">
                <itemNews
                  author="FASHION"
                  title="The best wrinkle-free travel clothes to pack for your summer vacation"
                  image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg"
                />
              </div>
              <div class="pt-5">
                <itemNews
                  author="TRAVEL"
                  title="World’s Best 25 Airlines for 2023 Revealed by Airline Ratings"
                  image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg"
                />
              </div>
            </div>
            <div class="col-span-6 mb:mt-8 tb:mt-0">
              <div>
                <div>
                  <img
                    class="h-[300px] w-full object-cover"
                    src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl.jpg"
                    alt="image"
                  />
                  <a
                    href="#"
                    class="font-bold text-xl hover:text-sky-600 block mt-[18px]"
                  >
                    TikTok’s latest trending beauty filter returns users to
                    their younger selves
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="grid mmb:grid-cols-4 mb:grid-col-1 gap-6">
            <itemNews
              class="pb-5"
              author="FASHION"
              title="The 23 best men’s shorts for the summer, according to style experts"
              image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-600x400.jpg"
              :is-derection-row="false"
            />
            <itemNews
              class="pb-5"
              author="ADVERTISING"
              title="Reddit communities go private to protest pricing plan for apps"
              image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social-600x400.jpg"
              :is-derection-row="false"
            />
            <itemNews
              class="pb-5"
              author="FASHION"
              title="Adidas vs. Hoka: We put these favorite running shoes to the test"
              image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-600x400.jpg"
              :is-derection-row="false"
            />
            <itemNews
              class="pb-5"
              author="SOCIAL MEDIA"
              title="Georgia man sues Facebook over losing account access and wins"
              image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg"
              :is-derection-row="false"
            />
          </div>

          <!-- Business -->
          <div class="mt-[45px]">
            <div
              class="py-2 border-b relative flex justify-start items-center gap-4"
            >
              <a href="#" class="uppercase font-bold text-base text-[14px]">
                Business
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>
              <a
                href="#"
                class="text-[12px] uppercase font-bold text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 1
              </a>
              <a
                href="#"
                class="text-[12px] uppercase font-bold text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 2
              </a>
              <a
                href="#"
                class="text-[12px] uppercase font-bold text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 3
              </a>
              <a
                href="#"
                class="text-[12px] uppercase font-bold text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 4
              </a>
            </div>

            <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
              <itemNews
                class="pb-5"
                author="BUSINESS"
                title="The job market enters a new phase as the Great Resignation ends"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/saulo-mohana-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="BUSINESS"
                title="Musk is no longer the CEO of Twitter. Linda Yaccarino officially starts in role"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adem-ay-Tk9m_HP4rgQ-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="BUSINESS"
                title="Deciding what to do when your employer changes the rules on remote work"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/jason-goodman-600x400.jpg"
                :is-derection-row="false"
              />
            </div>
          </div>

          <!-- Technology -->

          <div class="mt-[45px]">
            <div
              class="py-2 border-b relative flex justify-start items-center gap-4"
            >
              <a href="#" class="uppercase font-bold text-[14px]">
                Technology
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>
              <a
                href="#"
                class="uppercase font-bold text-gray-400 text-[12px] hover:text-black mb:hidden mmb:block"
              >
                Sub cat 1
              </a>
              <a
                href="#"
                class="uppercase font-bold text-gray-400 text-[12px] hover:text-black mb:hidden mmb:block"
              >
                Sub cat 2
              </a>
              <a
                href="#"
                class="uppercase font-bold text-gray-400 text-[12px] hover:text-black mb:hidden mmb:block"
              >
                Sub cat 3
              </a>
              <a
                href="#"
                class="uppercase font-bold text-gray-400 text-[12px] hover:text-black mb:hidden mmb:block"
              >
                Sub cat 4
              </a>
            </div>

            <div class="tb:grid tb:grid-cols-10 tb:gap-8 mt-8">
              <div class="col-span-6 mb:mb-[42px]">
                <div>
                  <div>
                    <img
                      class="h-[300px] w-full object-cover mb-4"
                      src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/motivation-hustle_FKT0RM1QHW-600x400.jpg"
                      alt="image"
                    />
                    <a
                      href="#"
                      class="font-bold text-xl hover:text-sky-600 block mt-[18px] mmb:mb-8 tb:mt-0"
                    >
                      Toyota claims its future EVs will have a range over 600
                      miles
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-span-4">
                <!-- ItemNews -->
                <div class="pb-5 border-b">
                  <itemNews
                    :is-technolory="true"
                    author="TECHNOLOGY"
                    title="Your iPhone and Other Apple Products Are About to Get Easier to Use"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-600x400.jpg"
                  />
                </div>
                <div class="py-5 border-b">
                  <itemNews
                    :is-technolory="true"
                    author="TECHNOLOGY"
                    title="iPhone 15: All the Major Rumors on Apple’s Next iPhone"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-600x400.jpg"
                  />
                </div>
                <div class="py-5">
                  <itemNews
                    :is-technolory="true"
                    author="TECHNOLOGY"
                    title="Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/mac-laptop_QUQXLZK1WL-600x400.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- LIFESTYLE -->
          <div class="mt-[45px]">
            <div
              class="py-2 border-b relative flex justify-start items-center gap-4"
            >
              <a href="#" class="uppercase font-bold text-[14px]">
                LifeStyle
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 1
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 2
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 3
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 4
              </a>
            </div>

            <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
              <itemNews
                class="pb-5"
                author="LIFESTYLE"
                title="TikTok’s latest trending beauty filter returns users to their younger selves"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="LIFESTYLE"
                title="Gucci Visions: An exhibit that takes you on a futuristic journey into the past"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/gucci-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="LIFESTYLE"
                title="Omega says ex-employees responsible for $3 million fake Speedmaster watch"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/omega-600x400.jpg"
                :is-derection-row="false"
              />
            </div>
          </div>
          <!-- Socical Media -->

          <div class="mt-[45px]">
            <div
              class="py-2 border-b relative flex justify-start items-center gap-4"
            >
              <a href="#" class="uppercase font-bold text-[14px]">
                Social Media
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 1
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 2
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 3
              </a>
              <a
                href="#"
                class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
              >
                Sub cat 4
              </a>
            </div>

            <div class="grid mmb:grid-cols-3 mb:grid-cols-1 gap-6 mt-7">
              <itemNews
                class="pb-5"
                author="SOCIAL MEDIA"
                title="Georgia man sues Facebook over losing account access and wins"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="SOCIAL MEDIA"
                title="YouTube will stop removing false claims about 2020 election fraud"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/youtube-app-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                author="SOCIAL MEDIA"
                title="Some Twitter users say they’ve been locked out of their accounts"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/twitter-600x400.jpeg"
                :is-derection-row="false"
              />
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="col-span-1">
          <div>
            <!-- follow us -->
            <div class="mb-8">
              <p class="uppercase font-bold text-[14px] py-2 border-b relative">
                Follow us
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </p>

              <div
                class="mb:flex mb:justify-between mb:items-center mb:flex-wrap"
              >
                <div
                  class="flex justify-start items-center text-[#1da1f2] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconTwitter :width="30" :height="30" />
                  <span>Twitter</span>
                </div>
                <div
                  class="flex flex-wrap justify-start items-center text-[#1778f2] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconFacebook :width="30" :height="30" />
                  <span>Facebook</span>
                </div>
                <div
                  class="flex flex-wrap justify-start items-center text-red-500 text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconYoutube :width="30" :height="30" />
                  <span>Youtube</span>
                </div>
                <div
                  class="flex flex-wrap justify-start items-center text-[#2c5a92] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconLinkedIn :width="30" :height="30" />
                  <span>LinkedIn</span>
                </div>
                <div
                  class="flex flex-wrap justify-start items-center text-[#f00075] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconInstagram :width="30" :height="30" />
                  <span>Instagram</span>
                </div>
                <div
                  class="flex flex-wrap justify-start items-center text-[#e94c89] text-lg gap-2 mt-4 cursor-pointer hover:scale-110 transition-all"
                >
                  <iconDribbble :width="30" :height="30" />
                  <span>Dribbble</span>
                </div>
              </div>
            </div>

            <!-- blogging -->
            <div>
              <a
                href="#"
                class="uppercase font-bold text-[14px] py-2 border-b relative block mb-7"
              >
                blogging
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>

              <itemNews
                :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/solar-panels_EFYB8VJXNT-600x400.jpg'"
                :title="'Why Apple Vision Pro’s $3,499 Price Makes More Sense Than You Think'"
                :is-derection-row="false"
                :is-show-author="false"
                max-height="h-[160px]"
              />

              <div class="mt-4">
                <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
                  The 6 biggest iOS 17 features that Apple stole from Android
                  Digital Trends
                </p>
                <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
                  9 Ways to Engage Your Customers With Instagram Highlights
                </p>
                <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
                  A Starter Guide to Google Ads Manager Accounts
                </p>
                <p class="mb-3 pt-3 border-t hover:text-sky-600 cursor-pointer">
                  What Are Influencer Engagement Marketplaces (and How to Use)
                </p>
              </div>
            </div>

            <!-- advertising -->
            <div class="mt-8">
              <a
                href="#"
                class="uppercase font-bold text-[14px] py-2 border-b relative block"
              >
                advertising
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>

              <div class="pb-5 pt-7 border-b">
                <itemNews
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social-600x400.jpg'"
                  :title="'Reddit communities go private to protest pricing plan for apps'"
                  author=""
                  :is-derection-row="false"
                  :is-show-author="false"
                  max-height="h-[120px]"
                />
              </div>
              <div class="py-5 border-b">
                <itemNews
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/ins-600x400.jpg'"
                  :title="'9 Ways to Engage Your Customers With Instagram Highlights'"
                  author=""
                  :is-derection-row="false"
                  :is-show-author="false"
                  max-height="h-[120px]"
                />
              </div>
              <div class="py-5">
                <itemNews
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/google-600x400.jpg'"
                  :title="'The 10-Step Guide to Creating a Profitable AdWords Campaign'"
                  author=""
                  :is-derection-row="false"
                  :is-show-author="false"
                  max-height="h-[120px]"
                />
              </div>
              <div class="mt-3 mb-8">
                <img
                  src="https://demo.wpenjoy.com/visualnews-pro/wp-content/themes/visualnews-pro/assets/images/300x250.png"
                  alt="image"
                />
              </div>
            </div>

            <!-- fashion -->
            <div>
              <a
                href="#"
                class="uppercase font-bold text-[14px] py-2 border-b relative block"
              >
                fashion
                <span
                  class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"
                ></span>
              </a>

              <div class="pb-5 pt-7 border-b">
                <itemNews
                  author="fashion"
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes-600x400.jpg'"
                  :title="'The best smart glasses to buy now, according to experts'"
                  :is-fashion="true"
                />
              </div>
              <div class="py-5 border-b">
                <itemNews
                  author="fashion"
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg'"
                  :title="'The best wrinkle-free travel clothes to pack for your summer vacation'"
                  :is-fashion="true"
                />
              </div>
              <div class="py-5">
                <itemNews
                  author="fashion"
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-600x400.jpg'"
                  :title="'The 23 best men’s shorts for the summer, according to style experts'"
                  :is-fashion="true"
                />
              </div>
              <div class="py-5">
                <itemNews
                  author="fashion"
                  :image="'https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-600x400.jpg'"
                  :title="'Adidas vs. Hoka: We put these favorite running shoes to the test'"
                  :is-fashion="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- marketing, web design, seo -->

      <div class="grid tb:grid-cols-3 mb:grid-cols-1 tb:gap-6">
        <!-- marketing -->
        <div>
          <a
            href="#"
            class="uppercase font-bold text-[14px] py-2 border-b relative block mb-7"
          >
            Marketing
            <span class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"></span>
          </a>
          <itemNews
            class="pb-5"
            author="FASHION"
            title="The 6 biggest iOS 17 features that Apple stole from Android Digital Trends"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/apple-600x400.jpg"
            :is-derection-row="false"
            :is-show-author="false"
          />
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            9 Ways to Engage Your Customers With Instagram Highlights
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            A Starter Guide to Google Ads Manager Accounts
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            25 Marketing Books You Should Be Reading
          </p>
        </div>

        <!-- Web design -->
        <div>
          <a
            href="#"
            class="uppercase font-bold text-[14px] py-2 border-b relative block mb-7"
          >
            Web design
            <span class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"></span>
          </a>
          <itemNews
            class="pb-5"
            author="FASHION"
            title="I’ve Been Using Google’s New AI Search. Here’s What I’ve Learned"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/laptop-work_8Q2MXCDVMY-600x400.jpg"
            :is-derection-row="false"
            :is-show-author="false"
          />
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            9 Ways to Engage Your Customers With Instagram Highlights
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            A Starter Guide to Google Ads Manager Accounts
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            25 Marketing Books You Should Be Reading
          </p>
        </div>

        <!-- SEO -->
        <div>
          <a
            href="#"
            class="uppercase font-bold text-[14px] py-2 border-b relative block mb-7"
          >
            SEO
            <span class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"></span>
          </a>
          <itemNews
            class="pb-5"
            author="FASHION"
            title="TikTok’s latest trending beauty filter returns users to their younger selves"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl-600x400.jpg"
            :is-derection-row="false"
            :is-show-author="false"
          />
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            9 Ways to Engage Your Customers With Instagram Highlights
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            A Starter Guide to Google Ads Manager Accounts
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            SEO Copywriting: How to Write Content For People and Optimize For
            Google
          </p>
          <p class="py-4 border-t hover:text-sky-500">
            25 Marketing Books You Should Be Reading
          </p>
        </div>
      </div>

      <!-- travel -->
      <div class="mt-[45px]">
        <div
          class="py-2 border-b relative flex justify-start items-center gap-4"
        >
          <a href="#" class="uppercase font-bold text-[14px]">
            Travel
            <span class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"></span>
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 1
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 2
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 3
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 4
          </a>
        </div>

        <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
          <itemNews
            class="pb-5"
            author="TRAVEL"
            title="World’s Best 25 Airlines for 2023 Revealed by Airline Ratings"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="TRAVEL"
            title="The Italian beaches putting a daily cap on visitors this summer"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/beautiful-ocean_XLSPFYQGAK-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="TRAVEL"
            title="Venice authorities discover why canal turned fluorescent green"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/water-canal_HZ0FDEESSC-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="TRAVEL"
            title="Manhattanhenge: Where to see New York City’s special sunset show"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/sunrise-sunset_XSTO5645BM-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
        </div>
      </div>

      <!-- food and drinks -->

      <div class="mt-[45px]">
        <div
          class="py-2 border-b relative flex justify-start items-center gap-4"
        >
          <a href="#" class="uppercase font-bold text-[14px]">
            Footer and Drinks
            <span class="w-6 h-1 bg-sky-500 absolute bottom-0 left-0"></span>
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 1
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 2
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 3
          </a>
          <a
            href="#"
            class="uppercase font-bold text-[12px] text-gray-400 hover:text-black mb:hidden mmb:block"
          >
            Sub cat 4
          </a>
        </div>

        <div class="grid mmb:grid-cols-4 mb:grid-cols-1 gap-6 mt-7">
          <itemNews
            class="pb-5"
            author="FOOD"
            title="The German couple who moved to Italy and opened a pizza restaurant"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/pizza-slice_OM0PRGTSEV-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="FOOD"
            title="Tokyo ramen shop bans customers from using their phones while eating"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/noodles-cooking_30DIV2QY3M-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="FOOD"
            title="Best rice dishes: 20 delicious specialties from around the world"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/paella-rice_T3JTA2VN26-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
          <itemNews
            class="pb-5"
            author="FOOD"
            title="This savory Mexican dish made with vanilla is a first for Eva Longoria"
            image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/couple-food_20HXQ0Y5YI-600x400.jpg"
            :is-derection-row="false"
            :back-ground="`bg-gray-50 h-full`"
          />
        </div>
      </div>
    </div>

    <!-- footer -->
    <compFooter />
  </div>
</template>

<script>
import compHeader from '~/components/header'
import compFooter from '~/components/footer'
import itemNews from '~/components/itemNews.vue'
import iconFacebook from '~/components/icons/facebook.vue'
import iconTwitter from '~/components/icons/twitter.vue'
import iconYoutube from '~/components/icons/youtube.vue'
import iconLinkedIn from '~/components/icons/linkedin.vue'
import iconDribbble from '~/components/icons/dribbble.vue'
import iconInstagram from '~/components/icons/instagram.vue'

export default {
  name: 'IndexPage',
  components: {
    itemNews,
    iconFacebook,
    iconTwitter,
    iconYoutube,
    iconLinkedIn,
    iconDribbble,
    iconInstagram,
    compHeader,
    compFooter,
  },
}
</script>
