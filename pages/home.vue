<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
  if (!user.value) {
    navigateTo('/login')
  }
})
</script>
<template>
  <h1>hallo welt</h1>
</template>