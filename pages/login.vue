<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

watchEffect(() => {
  if (user.value) {
    navigateTo('/home')
  }
})
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold text-black">
      Melde dich an
    </h2>
    <LoginCard>
      <Button @click="auth.signInWithOAuth({ provider: 'discord' })" class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg mb-2 focus:ring-4 focus:ring-blue-400" label="Discord">Discord</Button>
    </LoginCard>
  </div>
</template>