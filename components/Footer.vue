<template>
<footer>
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="https://changelog.awesomebible.de/" class="text-base leading-6 text-violet-500 hover:text-violet-600 underline decoration-violet-500 decoration-2 hover:decoration-wavy">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <NuxtLink as="a" href="/kontakt" class="text-base leading-6 text-yellow-500 hover:text-yellow-600 underline decoration-yellow-500 decoration-2 hover:decoration-wavy">
                    Kontakt
                </NuxtLink>
            </div>
            <div class="px-5 py-2">
                <a href="https://awesomebible.de/supporter" class="text-base leading-6 text-rose-500 hover:text-rose-600 underline decoration-rose-500 decoration-2 hover:decoration-wavy">
                    Unterstützer
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="https://codeberg.org/awesomebible/my.awesomeBible" class="text-base leading-6 text-green-500 hover:text-green-600 underline decoration-green-500 decoration-2 hover:decoration-wavy">
                    Codeberg
                </a>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-blue-800">© 2022 awesomeBible</p>
    </div>
</footer>
</template>