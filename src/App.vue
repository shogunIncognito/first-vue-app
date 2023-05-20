<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue';
import Mandatos from './components/Mandatos.vue';
import AboutMe from './components/AboutMe.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <div class="content" id="inicio">
    <div class="hero">
      <h2>Adentrate en el camino de los Caballeros</h2>
      <p>Aprende a defenderte por ti mismo</p>
      <a href="#mandatos">Mandatos</a>
    </div>
    <AboutMe />
    <Mandatos />
    <Footer />
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.hero {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
    url('https://i.pinimg.com/originals/97/72/9f/97729f7ab2200d41e27b65b7634422e3.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1pc;
}

a {
  margin-top: 3pc;
  text-decoration: none;
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 7px;
}

a:hover {
  background-color: #f2f2f2;
  border-radius: 5px;
  color: black;
}
</style>
