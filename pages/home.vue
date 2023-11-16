<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

useHead({
  titleTemplate: 'Home'
})

watchEffect(() => {
  if (!user.value) {
    navigateTo('/login')
  }
})
</script>
<template>
  <main class="flex flex-col items-center pt-5">
    <div class="pb-20">
      <h1 class="text-4xl font-bold">Hi!</h1>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Vers des Tages</h2>
      </div>
      <figure><img src="https://verse.awesomebible.de" alt="Vers des Tages" /></figure>
    </div>
  </main>
  <footer>
    <div class="btm-nav">
      <NuxtLink to="/read" class="text-accent">
        <Icon name="ph:book" class="w-5 h-5" />
        <span class="btm-nav-label">Lesen</span>
      </NuxtLink>
      <NuxtLink to="/home" class="text-accent active">
        <Icon name="ph:house" class="w-5 h-5" />
        <span class="btm-nav-label">Home</span>
      </NuxtLink>
      <NuxtLink to="/profile" class="text-accent">
        <Icon name="ph:user-circle" class="w-5 h-5" />
        <span class="btm-nav-label">Profil</span>
      </NuxtLink>
    </div>
  </footer>
</template>