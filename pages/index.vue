<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

useHead({
  titleTemplate: 'my.awesomeBible'
})

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
                <div
                    class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                    <NuxtLink as="a" href="/" class="w-1/4 py-4 pr-4 md:py-0">
                        <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span
                                class="text-indigo-600">.</span></span>
                    </NuxtLink>
                    <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex"
                        :class="{ 'flex fixed': showMenu, 'hidden': !showMenu }">
                        <div
                            class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                            <a href="/"
                                class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span
                                    class="text-indigo-600">.</span></a>
                            <div
                                class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                <a href="/"
                                    class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                                <a href="#features"
                                    class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                                <a href="https://changelog.awesomebible.de"
                                    class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                                <NuxtLink as="a" href="/kontakt"
                                    class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">
                                    Kontakt</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center" id="">
                <h1
                    class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                    <span class="inline md:block" id="">Deine Bibel</span> <span
                        class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500"
                        id="">bekommt ein Upgrade!</span></h1>
                <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg" id="">Wir haben
                    my.awesomeBible gebaut, damit du die Bibel auf deinem Level erleben kannst.</div>
                <div class="flex flex-col items-center mt-12 text-center">
                    <span class="relative inline-flex w-full rounded-full shadow-sm md:w-auto">
                        <a type="button" href="/#pricing"
                            class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg md:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 focus:ring-4 focus:ring-indigo-400">Worauf
                            wartest du?</a>
                    </span>
                </div>
            </div>
        </div>
    </header>
    <section class="py-20 bg-white dark:bg-slate-800" id="">
        <div class="container max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold tracking-tight text-center dark:text-white" id="features">Was wir drauf haben...
            </h2>
            <p class="mt-2 text-lg text-center text-gray-700 dark:text-gray-300" id="">Eine Zusammenfassung von den
                wichtigsten Funktionen, die my.awesomeBible bietet:</p>
            <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0" id="">
                <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl bg-gradient-to-br from-purple-200 to-blue-200"
                    id="">
                    <div class="p-3 text-white bg-indigo-500 rounded-full" id="">
                        <Icon name="ph:book-bookmark-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black">Lies!</h4>
                    <p class="text-base text-center font-sans text-gray-700">Lies die Bibel so wie du möchtest: Lightmode,
                        Darkmode, Comic Sans - alles ist dir überlassen.</p>
                </div>
                <div
                    class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-red-200 to-orange-200">
                    <div class="p-3 text-white bg-indigo-500 rounded-full">
                        <Icon name="ph:anchor-simple-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black" id="">Merke!</h4>
                    <p class="text-base text-center font-sans text-gray-700" id="">Merke dir Verse, damit du nie wieder
                        Gottes Botschaft an dich vergisst.</p>
                </div>

                <div
                    class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-blue-200">
                    <div class="p-3 text-white bg-indigo-500 rounded-full">
                        <Icon name="ph:megaphone-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black" id="">Teile!</h4>
                    <p class="text-base text-center font-sans text-gray-700" id="">Wir haben es dir einfach gemacht, deine
                        Gedanken mit anderen zu teilen.</p>
                </div>

                <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-pink-200 to-purple-200"
                    id="">
                    <div class="p-3 text-white bg-indigo-500 rounded-full">
                        <Icon name="ph:smiley-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black" id="">Unabhängig</h4>
                    <p class="text-base text-center font-sans text-gray-700" id="">
                        my.awesomeBible gehört keiner großen Firma und finanziert sich komplett von selbst. <br>
                        Wir müssen uns nicht anpassen, wir können auf unsere Community hören. <br>
                        Wir können unsere Vision ausleben.
                    </p>
                </div>
                <div
                    class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-green-500">
                    <div class="p-3 text-white bg-indigo-500 rounded-full">
                        <Icon name="ph:shield-check-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black" id="">Sicher</h4>
                    <p class="text-base text-center text-gray-700 font-sans">Wir werden deine Daten nie an irgendeine Firma
                        verkaufen, und du kannst sie jederzeit exportieren.</p>
                </div>

                <div
                    class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500">
                    <div class="p-3 text-white bg-indigo-500 rounded-full">
                        <Icon name="ph:github-logo-bold" class="w-8 h-8" />
                    </div>
                    <h4 class="text-xl font-medium text-black" id="">Quelloffen</h4>
                    <p class="text-base text-center text-gray-700 font-sans" id="">my.awesomeBible ist komplett quelloffen.
                        Das bedeutet, dass jeder Sicherheitslücken im Code finden und neue Features hinzufügen kann.</p>
                    <a class="text-base text-center text-gray-700 hover:text-blue-600 underline decoration-blue-500 decoration-2 hover:decoration-wavy"
                        href="https://github.com/awesomebible/my.awesomebible-nuxt"> -> Github </a>
                </div>
            </div>
        </div>
    </section>
    <section class="relative py-16 bg-white dark:bg-slate-800 min-w-screen animation-fade animation-delay">
        <div class="container px-8 mx-auto sm:px-12 xl:px-5">
            <p
                class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                Hast du Fragen? Wir haben Antworten!
            </p>
            <h3
                class="mt-1 text-2xl font-bold text-left text-gray-800 dark:text-gray-200 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                Hier einiges, was du dich Fragen könntest:
            </h3>

            <div
                class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">
                    Wo liegen meine Daten?
                </h3>
                <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                    Deine Daten liegen in Deutschland. Einerseits garantiert das schnelle Reaktionszeiten (Ping),
                    andererseits garantiert es, dass deine Daten mit EU Datenschutzgesetzen geschützt sind. <br>
                    Um noch ein Stück genauer zu werden: Deine Daten liegen auf einem Server von Stuxhost in Falkenstein.
                </p>
            </div>
            <div
                class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">
                    Wie finanziert ihr euch?
                </h3>
                <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                    Wir finanzieren uns aktuell ausschließlich aus eigenem Geld, diese Entscheidung haben wir getroffen,
                    weil wir eine wirklich kostenlose und offene Bibelapp bauen wollen.
                    <a class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy"
                        href="https://changelog.awesomebible.de/post/vision/">
                        Mehr über Geld, und wie es weiter geht erfährst du hier.
                    </a>
                </p>
            </div>
            <div
                class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">Ist
                    my.awesomeBible unsicher weil der Quellcode offen liegt?</h3>
                <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                    Nein. Das ist ein Mythos - sogar das Gegenteil ist der Fall. Wäre der Quellcode nicht offen, dann wäre
                    allein ich für die Sicherheit verantwortlich. <br>
                    Da er aber quelloffen ist, kann jeder Fehler finden und ausnutzen - aber genau so gut können sie
                    gemeldet und behoben werden.
                </p>
            </div>
            <div id="contact"
                class="w-full px-6 py-6 mx-auto mt-10 bg-white dark:bg-blue-900 border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                <h3 class="text-lg font-bold text-purple-500 dark:text-purple-200 sm:text-xl md:text-2xl">
                    Du hast noch mehr Fragen?
                </h3>
                <p class="mt-2 text-base font-sans text-gray-600 dark:text-gray-200 sm:text-lg md:text-normal">
                    Stell sie gerne! Du kannst uns über <a href=""
                        class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy">Discord</a>
                    und <a href=""
                        class="font-sans hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy">Mastodon</a>
                    erreichen.
                </p>
            </div>
        </div>
    </section>
    <section class="py-8 leading-7 text-gray-900 bg-white dark:bg-slate-800 sm:py-12 md:py-16 lg:py-24" id="pricing">
        <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
            <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black dark:text-gray-200 border-solid sm:text-4xl md:text-5xl"
                    id="">
                    Wir geben nicht viel auf komplizierte Preise.
                </h2>
                <p class="box-border mt-2 text-xl text-gray-900 dark:text-gray-300 border-solid sm:text-2xl" id="">
                    my.awesomeBible ist kostenlos und wird es auch immer bleiben.
                </p>
            </div>
            <div
                class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0">

                <!-- Price 1 -->
                <div
                    class="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border-4 border-indigo-600 border-solid rounded-md sm:p-6 md:px-8 md:py-16">
                    <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-gray-200 border-0 border-gray-200 sm:text-3xl md:text-4xl"
                        id="">Kostenlos</h3>
                    <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                        <p class="box-border m-0 text-6xl dark:text-gray-300 font-semibold leading-none border-solid" id="">
                            0 €</p>
                        <p class="box-border m-0 border-solid dark:text-gray-300" style="border-image: initial;">
                            / Monat
                        </p>
                    </div>
                    <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 dark:text-gray-300 border-0 border-gray-200"
                        id="">
                        Für alle. Wir sind offen und dankbar für neue Nutzer!
                    </p>
                    <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                        <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid"
                            id="">
                            <Icon name="ph:check-bold" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            Alle Features
                        </li>
                        <li class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid"
                            id="">
                            <Icon name="ph:check-bold" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            <Icon name="ph:infinity-bold"
                                class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:fill-gray-300" />
                            viele Notizen
                        </li>
                        <li
                            class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid">
                        <Icon name="ph:check-bold" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        <Icon name="ph:infinity-bold"
                            class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:fill-gray-300" />
                        viele Markierungen
                    </li>
                    <li
                        class="inline-flex items-center w-full mb-2 ml-5 font-semibold dark:text-gray-300 text-left border-solid">
                        <Icon name="ph:check-bold" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                        alle Bibelübersetzungen
                    </li>
                </ul>
                <NuxtLink as="a" href="/login"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400">
                    Los geht's!
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
                <h2 class="text-2xl font-extrabold tracking-tight leading-none text-black dark:text-gray-200 sm:text-3xl md:text-5xl"
                    id="">
                    Fang jetzt dein Abenteuer mit der Bibel an!
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 md:pr-16" id="">
                    Wir wünschen dir einen schönen Aufenthalt! 🥰
                </p>
            </div>
            <form class="w-full mt-16 md:mt-0 md:w-2/5">
                <div>
                    <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
                        id="">
                        <h3 class="mb-2 text-2xl tracking-tight font-bold text-center" id="">
                            Öffne das Buch!
                        </h3>
                        <div class="block">
                            <button @click="auth.signInWithOAuth({ provider: 'discord', options: { redirectTo } })"
                                class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400"
                                label="Discord">
                                <Icon name="fa-brands:discord" class="w-5 h-5 mr-3" />
                                Discord
                            </button>
                            <button @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })"
                                class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400"
                                label="Google">
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
<Footer /></template>
