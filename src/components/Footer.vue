<script setup></script>

<template>
  <footer>
    <div>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Whatsapp</a></li>
      </ul>
    </div>

    <div>
      <img src="../assets/logosolaire.png" alt="logo" width="200">
      <p>Solo en Lordran</p>
    </div>

    <div>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#mandatos">Mandatos</a></li>
        <li><a href="#about">Acerca de mi</a></li>
      </ul>
    </div>

  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    padding: 20px 0;
    background-color: #000000;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1pc;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }

  li {
    list-style: none;
    padding: 5px;
  }
</style>