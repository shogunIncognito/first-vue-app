<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

setTimeout(() => {
  router.push('/')
}, 2000)

</script>

<template>
  <h2>palabra de test: {{ route.params.text }}</h2>
</template>

<style scoped></style>