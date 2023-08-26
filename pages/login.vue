<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const email = ref('')

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}

watchEffect(() => {
  if (user.value) {
    navigateTo('/home')
  }
})
</script>

<template>

<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://cdn.jsdelivr.net/gh/awesomebible/assets@main/exports/svg/logomark_circle.svg" alt="logo">
          my.awesomeBible    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Melde dich an
              </h1>
              <button @click="auth.signInWithOAuth({ provider: 'discord' })" class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400" label="Discord">
                <Icon name="fa-brands:discord" class="w-5 h-5 mr-3" />
                Discord
              </button>
              <button @click="auth.signInWithOAuth({ provider: 'google' })" class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400" label="Google">
                <Icon name="fa-brands:google" class="w-5 h-5 mr-3" />
                Google
              </button>
              <input
              v-model="email"
              type="email"
            />
            <HCaptcha
            sitekey="your-sitekey"
            onVerify={(token) => { setCaptchaToken(token) }
            />
              <button @click="signInWithOtp" class="inline-flex items-center justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-indigo-600 rounded cursor-pointer hover:bg-indigo-700 hover:border-indigo-700 focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-base md:text-lg focus:ring-4 focus:ring-indigo-400">
                Sign In with E-Mail
              </button>
            </div>
      </div>
  </div>
</section>
</template>