<script setup>
  
</script>

<template>
  <header>

    <div>
      <img src="../assets/logosolaire.png" alt="logo" width="120">
    </div>

    <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#mandatos">Mandatos</a></li>
        <li><a href="#about">Acerca de mi</a></li>
      </ul>
    </nav>

  </header>
</template>

<style scoped>
  header {
    display: flex;
    align-items: center;
    background-color: none;    
    position: fixed;
    width: 100%;
    top: 0;    
    padding: 4px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 10px;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: black;
    padding: 15px;
    color: white;
  }

  a:hover {
    background-color: #f2f2f2;
    border-radius: 5px;
    color: black;
  }
</style>