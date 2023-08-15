<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="font-inter break-words">
    <!-- header -->
    <compHeader />

    <!-- Content -->
    <div class="lt:container lt:mx-auto lt:px-0 mb:px-[10px]">
      <!-- Left -->
      <!-- before marketing -->
      <div class="tb:grid tb:grid-cols-4 tb:gap-6 lt:gap-8">
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
                    class="font-bold text-xl hover:text-sky-600 block mt-[18px] line-clamp-2"
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
            <compBusiness>
              <titleHome
                title="business"
                :sub-title="[
                  'sub cat 1',
                  'sub cat 2',
                  'sub cat 3',
                  'sub cat 4',
                ]"
              />
            </compBusiness>
          </div>

          <!-- Technology -->
          <div class="mt-[45px]">
            <titleHome
              title="technolory"
              :sub-title="['sub cat 1', 'sub cat 2', 'sub cat 3', 'sub cat 4']"
            />

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
                      class="font-bold text-xl hover:text-sky-600 block mt-[18px] mmb:mb-8 tb:mt-0 line-clamp-2"
                    >
                      Toyota claims its future EVs will have a range over 600
                      miles
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-span-4">
                <!-- ItemNews -->
                <div class="lt:pb-5 lt:pt-0 border-b tb:pb-8 mb:py-5">
                  <itemNews
                    :is-technolory="true"
                    author="TECHNOLOGY"
                    title="Your iPhone and Other Apple Products Are About to Get Easier to Use"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-600x400.jpg"
                  />
                </div>
                <div class="lt:py-5 border-b tb:pb-8 tb:pt-5 mb:py-5">
                  <itemNews
                    :is-technolory="true"
                    author="TECHNOLOGY"
                    title="iPhone 15: All the Major Rumors on Apple’s Next iPhone"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-600x400.jpg"
                  />
                </div>
                <div class="lt:py-5 mb:pb-8 tb:pt-5 mb:py-5">
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
            <compLifeStyle>
              <titleHome
                title="LIFESTYLE"
                :sub-title="[
                  'sub cat 1',
                  'sub cat 2',
                  'sub cat 3',
                  'sub cat 4',
                ]"
              />
            </compLifeStyle>
          </div>
          <!-- Socical Media -->

          <div class="mt-[45px]">
            <compSocialMedia>
              <titleHome
                title="social media"
                :sub-title="[
                  'sub cat 1',
                  'sub cat 2',
                  'sub cat 3',
                  'sub cat 4',
                ]"
              />
            </compSocialMedia>
          </div>
        </div>

        <!-- Right -->
        <div class="col-span-1">
          <div>
            <!-- follow us -->
            <div class="mb-8">
              <compFollowUs>
                <titleHome title="follow us" />
              </compFollowUs>
            </div>

            <!-- blogging -->
            <compBlogging>
              <div class="mb-7">
                <titleHome title="blogging" />
              </div>
            </compBlogging>

            <!-- advertising -->
            <div class="mt-8">
              <compAdvertising>
                <titleHome title="advertising" />
              </compAdvertising>
            </div>

            <!-- fashion -->
            <div>
              <compFashion>
                <titleHome title="fashion" />
              </compFashion>
            </div>
          </div>
        </div>
      </div>

      <!-- marketing, web design, seo -->

      <div class="grid tb:grid-cols-3 mb:grid-cols-1 tb:gap-6">
        <!-- marketing -->
        <compMarketing>
          <div class="mb-[25px]">
            <titleHome title="marketing" />
          </div>
        </compMarketing>

        <!-- Web design -->
        <compWebDesign>
          <div class="mb-[25px]">
            <titleHome title="web design" />
          </div>
        </compWebDesign>

        <!-- SEO -->

        <compSeo>
          <div class="mb-[25px]">
            <titleHome title="seo" />
          </div>
        </compSeo>
      </div>

      <!-- travel -->
      <div class="mt-[45px]">
        <compTravel>
          <titleHome
            title="travel"
            :sub-title="['sub cat 1', 'sub cat 2', 'sub cat 3', 'sub cat 4']"
          />
        </compTravel>
      </div>

      <!-- food and drinks -->

      <div class="mt-[45px]">
        <compFoodAndDrinks>
          <titleHome
            title="food and drinks"
            :sub-title="['sub cat 1', 'sub cat 2', 'sub cat 3', 'sub cat 4']"
          />
        </compFoodAndDrinks>
      </div>
    </div>

    <!-- footer -->
    <compFooter />
  </div>
</template>

<script setup>
import compHeader from '~/components/header'
import compFooter from '~/components/footer'
import itemNews from '~/components/home/itemNews'
import titleHome from '~/components/home/title'
import compBusiness from '~/components/home/business'
import compLifeStyle from '~/components/home/lifestyle'
import compSocialMedia from '~/components/home/socialMedia'
import compTravel from '~/components/home/travel'
import compFoodAndDrinks from '~/components/home/foodAndDrinks'
import compMarketing from '~/components/home/marketing'
import compWebDesign from '~/components/home/webDesign'
import compSeo from '~/components/home/seo'

import compFollowUs from '~/components/home/followUs'
import compBlogging from '~/components/home/blogging'
import compAdvertising from '~/components/home/advertising'
import compFashion from '~/components/home/fashion'
</script>
