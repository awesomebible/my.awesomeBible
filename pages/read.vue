<script setup lang="ts">
useHead({
  titleTemplate: 'Lesen'
})

definePageMeta({
    middleware: ['auth-logged-in'],
  })
</script>
<template>
  <main>

  </main>
  <footer>
    <div class="btm-nav">
      <NuxtLink to="/read" class="text-accent active">
        <Icon name="ph:book" class="w-5 h-5" />
        <span class="btm-nav-label">Lesen</span>
      </NuxtLink>
      <NuxtLink to="/home" class="text-accent">
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