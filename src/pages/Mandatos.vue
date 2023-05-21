<script setup></script>

<template>
  <div>
    <h2>Mandatos</h2>
    <img src="../assets/knightshield.png" alt="shield" height="100">
    <img src="../assets/knightsword.webp" alt="sword" height="100">
    <img src="../assets/knightshield.png" alt="shield" height="100">
    <p>Los mandatos son las reglas que todo caballero debe seguir para ser un verdadero caballero</p>
    <div id="mandatos">
      <div>
        <h3>Valor del caballero</h3>
        <p>Siempre cabeza en alto en todo momento</p>
      </div>
      <div>
        <h3>Valor del caballero</h3>
        <p>Siempre cabeza en alto en todo momento</p>
      </div>
      <div>
        <h3>Valor del caballero</h3>
        <p>Siempre cabeza en alto en todo momento</p>
      </div>
      <div>
        <h3>Valor del caballero</h3>
        <p>Siempre cabeza en alto en todo momento</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  div {
    margin: 7.5pc 0;  
  }

  h2 {
    font-size: 2.4rem;
    margin: 1.4pc 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1pc;
  }

  #mandatos {
    display: grid;
    grid-template-columns: repeat(auto-fit,
        minmax(200px,
          1fr));
    margin: 1pc;
  }

  #mandatos div {
    background-image: linear-gradient(0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)),
      url('https://w0.peakpx.com/wallpaper/747/731/HD-wallpaper-knight-black-sword.jpg');
    background-size: cover;
    background-position: center;
    padding: 50px;
    border-radius: 10px;
    margin: 10px;
    border: 1px solid white;
  }

  #mandatos div h3 {
    font-size: 1.5rem;
    margin-bottom: 1pc;
  }
</style>