<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <div class="content" id="inicio">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
}

</style>
