<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
})

const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/home')
  }
})
</script>

<template>
    <Head title="Home" />

    <header class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
                    <nav class="relative z-50 h-24">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                <NuxtLink as="a" href="/" class="w-1/4 py-4 pr-4 md:py-0">
                    <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                </NuxtLink>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <a href="/" class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="#features" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                            <a href="https://changelog.awesomebible.de" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                            <NuxtLink as="a" href="/kontakt" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Kontakt</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center" id="">
            <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block" id="">{{ t('your_bible') }}</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">{{ t('gets_an_upgrade') }}</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg" id="">{{ t('home_intro_text') }}</div>
            <div class="flex flex-col items-center mt-12 text-center">
                <span class="relative inline-flex w-full rounded-full shadow-sm md:w-auto">
                    <a type="button" href="/#pricing" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 focus:ring-4 focus:ring-indigo-400">{{ t('home_call_to_action') }}</a>
                </span>
            </div>
        </div>
    </div>
</header>
<section class="py-20 bg-white dark:bg-slate-800" id="">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center dark:text-white" id="features">{{  t('home_features_title') }}</h2>
        <p class="mt-2 text-lg text-center text-gray-700 dark:text-gray-300" id="">{{ t('home_features_subtitle') }}</p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0" id="">
            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl bg-gradient-to-br from-purple-200 to-blue-200" id="">
                <div class="p-3 text-white bg-indigo-500 rounded-full" id="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-black">{{ t('home_feature1_title') }}</h4>
                <p class="text-base text-center font-sans text-gray-700">{{ t('home_feature1_subtitle') }}</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-red-200 to-orange-200">
                <div class="p-3 text-white bg-indigo-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-black" id="">{{ t('home_feature2_title') }}</h4>
                <p class="text-base text-center font-sans text-gray-700" id="">{{ t('home_feature2_subtitle') }}</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-blue-200">
                <div class="p-3 text-white bg-indigo-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-black" id="">{{ t('home_feature3_title') }}</h4>
                <p class="text-base text-center font-sans text-gray-700" id="">{{ t('home_feature3_subtitle') }}</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-pink-200 to-purple-200" id="">
                <div class="p-3 text-white bg-indigo-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h4 class="text-xl font-medium text-black" id="">{{ t('home_feature4_title') }}</h4>
                <p class="text-base text-center font-sans text-gray-700" id="">
                {{ t('home_feature4_subtitle') }}
                </p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-green-500">
                <div class="p-3 text-white bg-indigo-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-black" id="">{{ t('home_feature5_title') }}</h4>
                <p class="text-base text-center text-gray-700 font-sans">{{ t('home_feature5_subtitle') }}</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500">
                <div class="p-3 text-white bg-indigo-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-black" id="">{{ t('home_feature6_title') }}</h4>
                <p class="text-base text-center text-gray-700 font-sans" id="">{{ t('home_feature6_subtitle') }}</p>
                <a class="text-base text-center text-gray-700 hover:text-blue-600 underline decoration-blue-500 decoration-2 hover:decoration-wavy" href="https://github.com/awesomebible/my.awesomebible-nuxt"> -> Github </a>
            </div>
        </div>
    </div>
</section>
<section class="relative py-16 bg-white dark:bg-slate-800 min-w-screen animation-fade animation-delay">
    <div class="container px-8 mx-auto sm:px-12 xl:px-5">
        <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            {{ t('home_faq_subheading') }}</p>
        <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 dark:text-gray-200 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            {{ t('home_faq_heading') }}
        </h3>

        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">{{ t('home_faq1_question') }}</h3>
            <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                {{ t('home_faq1_answer') }}
            </p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">{{ t('home_faq2_question') }}</h3>
            <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                {{ t('home_faq2_answer') }}
                <a class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy" href="https://changelog.awesomebible.de/post/vision/">
                    {{ t('home_faq2_link') }}
                </a>
            </p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">Ist my.awesomeBible unsicher weil der Quellcode offen liegt?</h3>
            <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">{{ t('home_faq3_answer') }}</p>
        </div>
        <div id="contact"
        class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">{{ t('home_faq4_question') }}</h3>
        <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
            {{ t('home_faq4_answer') }} <a href="" class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy">Discord</a> & <a href="" class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy">Mastodon</a>.
        </p>
    </div>
    </div>
</section>  
<section class="py-8 leading-7 text-gray-900 bg-white dark:bg-slate-800 sm:py-12 md:py-16 lg:py-24" id="pricing">
    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black dark:text-gray-200 border-solid sm:text-4xl md:text-5xl" id="">{{ t('home_pricing_heading') }}</h2>
            <p class="box-border mt-2 text-xl text-gray-900 dark:text-gray-300 border-solid sm:text-2xl" id="">{{ t('home_pricing_subheading') }}</p>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0">
            
            <!-- Price 1 -->
            <div class="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border-4 border-indigo-600 border-solid rounded-md sm:p-6 md:px-8 md:py-16">
                <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-gray-200 border-0 border-gray-200 sm:text-3xl md:text-4xl" id="">{{t('home_price_free')}}</h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl dark:text-gray-300 font-semibold leading-none border-solid" id="">{{ t('home_price') }}</p>
                    <p class="box-border m-0 border-solid dark:text-gray-300" style="border-image: initial;">
                        / {{ t('home_price_month') }}
                    </p>
                </div>
                <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 dark:text-gray-300 border-0 border-gray-200" id="">{{ t('home_price_subtitle') }}</p>
                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid" id="">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {{ t('home_price_all_features') }}
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid" id="">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <svg alt="unendlich" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:fill-gray-300" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/></svg>
                        {{ t('home_price_endless_notes') }}
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <svg alt="unendlich" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:fill-gray-300" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/></svg>
                        {{ t('home_price_endless_higlights') }}
                    </li>
                    <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-indigo-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {{ t('home_price_bibleversions') }}
                    </li>
                </ul>
                <NuxtLink as="a" href="/login" class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400">
                    {{ t('home_price_cta') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</section>
<section class="w-full px-8 py-16 bg-gray-100 dark:bg-indigo-800 xl:px-8" id="get-started">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <p class="font-medium text-blue-500 uppercase" id=""></p>
                <h2 class="text-2xl font-extrabold tracking-tight leading-none text-black dark:text-gray-200 sm:text-3xl md:text-5xl" id="">{{ t('home_footer_heading') }}</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 md:pr-16" id="">{{ t('home_footer_subheading') }}</p>
            </div>
        <form class="w-full mt-16 md:mt-0 md:w-2/5">
            <div>
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7" id="">
                    <h3 class="mb-2 text-2xl tracking-tight font-bold text-center" id="">{{ t('home_login_heading') }}</h3>
                    <div class="block">
                        <button @click="auth.signInWithOAuth({ provider: 'discord', options: { redirectTo } })" class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400" label="Discord">
                            <Icon name="fa-brands:discord" class="w-5 h-5 mr-3" />
                            Discord
                        </button>
                        <button @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })" class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400" label="Google">
                            <Icon name="fa-brands:google" class="w-5 h-5 mr-3" />
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </div>
</section>
<Footer />
</template>
