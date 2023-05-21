<script setup>

</script>

<template>
    <div class="hero">
      <h2>Adentrate en el camino de los Caballeros</h2>
      <p>Aprende a defenderte por ti mismo</p>
      <RouterLink to="/mandatos">Mandatos</RouterLink>
    </div>
</template>

<style scoped>
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

a {
  margin-top: 3pc;
  text-decoration: none;
  color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 7px;
  background-color: transparent;
  transition: background-color 0.27s ease-in-out;
}

a:hover {
  background-color: #f2f2f2;
  color: black;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1pc;
}
</style>