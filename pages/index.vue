<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="font-inter break-words">
    <defaultLayout>
      <div class="llt:max-w-[1240px] lt:mx-auto llt:px-0 mb:px-[10px]">
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
                    link="the-best-smart-glasses-to-buy-now,-according-to-experts"
                    link-category="fashion"
                    category="FASHION"
                    title="The best smart glasses to buy now, according to experts"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/glashes.jpg"
                  />
                </div>
                <div class="py-5 border-b">
                  <itemNews
                    link="the-best-wrinkle-free-travel-clothes-to-pack-for-your-summer-vacation"
                    link-category="fashion"
                    category="FASHION"
                    title="The best wrinkle-free travel clothes to pack for your summer vacation"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/shirt-600x400.jpg"
                  />
                </div>
                <div class="pt-5">
                  <itemNews
                    link="world’s-best-25-airlines-for-2023-revealed-by-airline-ratings"
                    link-category="fashion"
                    category="TRAVEL"
                    title="World’s Best 25 Airlines for 2023 Revealed by Airline Ratings"
                    image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/airplane-travel_J5AQI42431-600x400.jpg"
                  />
                </div>
              </div>
              <div class="col-span-6 mb:mt-8 tb:mt-0">
                <div>
                  <nuxt-link
                    to="/news/tiktok’s-latest-trending-beauty-filter-returns-users-to-their-younger-selves"
                  >
                    <img
                      class="h-[300px] w-full object-cover"
                      src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/girl.jpg"
                      alt="image"
                    />
                    <nuxt-link
                      to="/news/tiktok’s-latest-trending-beauty-filter-returns-users-to-their-younger-selves"
                      class="font-bold text-xl hover:text-sky-600 block mt-[18px] line-clamp-2"
                    >
                      TikTok’s latest trending beauty filter returns users to
                      their younger selves
                    </nuxt-link>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div class="grid mmb:grid-cols-4 mb:grid-col-1 gap-6">
              <itemNews
                class="pb-5"
                category="FASHION"
                link="the-23-best-men’s-shorts-for-the-summer,-according-to-style-experts"
                link-category="fashion"
                title="The 23 best men’s shorts for the summer, according to style experts"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/man-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                link="reddit-communities-go-private-to-protest-pricing-plan-for-apps"
                link-category="advertising"
                category="ADVERTISING"
                title="Reddit communities go private to protest pricing plan for apps"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/social-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                link="adidas-vs.-hoka:-we-put-these-favorite-running-shoes-to-the-test"
                link-category="fashion"
                category="FASHION"
                title="Adidas vs. Hoka: We put these favorite running shoes to the test"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/adidas-600x400.jpg"
                :is-derection-row="false"
              />
              <itemNews
                class="pb-5"
                link="georgia-man-sues-facebook-over-losing-account-access-and-wins"
                link-category="social-media"
                category="SOCIAL MEDIA"
                title="Georgia man sues Facebook over losing account access and wins"
                image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/facebook-600x400.jpg"
                :is-derection-row="false"
              />
            </div>

            <!-- Business -->
            <div class="mt-8">
              <compBusiness>
                <titleHome
                  title="business"
                  link="business"
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
            <div class="mt-8">
              <titleHome
                link="tech"
                title="technolory"
                :sub-title="[
                  'sub cat 1',
                  'sub cat 2',
                  'sub cat 3',
                  'sub cat 4',
                ]"
              />

              <div class="tb:grid tb:grid-cols-10 tb:gap-8 mt-8">
                <div class="col-span-6 mb:mb-[42px]">
                  <div>
                    <nuxt-link
                      to="/news/toyota-claims-its-future-evs-will-have-a-range-over-600-miles"
                    >
                      <img
                        class="h-[300px] w-full object-cover mb-4"
                        src="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/motivation-hustle_FKT0RM1QHW-600x400.jpg"
                        alt="image"
                      />
                      <nuxt-link
                        to="/news/toyota-claims-its-future-evs-will-have-a-range-over-600-miles"
                        class="font-bold text-xl hover:text-sky-600 block mt-[18px] mmb:mb-8 tb:mt-0 line-clamp-2"
                      >
                        Toyota claims its future EVs will have a range over 600
                        miles
                      </nuxt-link>
                    </nuxt-link>
                  </div>
                </div>

                <div class="col-span-4">
                  <!-- ItemNews -->
                  <div class="lt:pb-5 tb:pt-0 border-b tb:pb-8 mb:py-5">
                    <itemNews
                      link="your-iphone-and-other-apple-products-are-about-to-get-easier-to-use"
                      link-category="tech"
                      :is-technolory="true"
                      category="TECHNOLOGY"
                      title="Your iPhone and Other Apple Products Are About to Get Easier to Use"
                      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/iphone-blue_7RJZFHBGPT-600x400.jpg"
                    />
                  </div>
                  <div class="lt:py-5 border-b tb:pb-8 tb:pt-5 mb:py-5">
                    <itemNews
                      :is-technolory="true"
                      link="iphone-15:-all-the-major-rumors-on-apple’s-next-iphone"
                      link-category="tech"
                      category="TECHNOLOGY"
                      title="iPhone 15: All the Major Rumors on Apple’s Next iPhone"
                      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/browsing-smartphone_48PPXWVY5M-600x400.jpg"
                    />
                  </div>
                  <div class="lt:py-5 mb:pb-8 tb:pt-5 mb:py-5">
                    <itemNews
                      link="apple-macbook-air-15-inch-review:-the-best-portable-big-display-choice"
                      :is-technolory="true"
                      link-category="tech"
                      category="TECHNOLOGY"
                      title="Apple MacBook Air 15-Inch Review: The Best Portable Big Display Choice"
                      image="https://demo.wpenjoy.com/visualnews-pro/wp-content/uploads/sites/64/2023/06/mac-laptop_QUQXLZK1WL-600x400.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- LIFESTYLE -->
            <div class="mt-8">
              <compLifeStyle>
                <titleHome
                  link="lifestyle"
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

            <div class="mt-8">
              <compSocialMedia>
                <titleHome
                  link="social-media"
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
                  <titleHome title="follow us" :is-follow-us="true"/>
                </compFollowUs>
              </div>

              <!-- blogging -->
              <compBlogging>
                <div class="mb-7">
                  <titleHome title="blogging" link="blogging"/>
                </div>
              </compBlogging>

              <!-- advertising -->
              <div class="mt-8">
                <compAdvertising>
                  <titleHome title="advertising" link="advertising"/>
                </compAdvertising>
              </div>

              <!-- fashion -->
              <div>
                <compFashion>
                  <titleHome title="fashion" link="fashion"/>
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
    </defaultLayout>
  </div>
</template>

<script setup>
import defaultLayout from '~/layouts/defaultLayout.vue'
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
