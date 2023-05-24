<script setup>
  
</script>

<template>
  <header>

    <div>
      <img src="../assets/logosolaire.png" alt="logo" width="120">
    </div>

    <nav>
      <ul>
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/mandatos">Mandatos</RouterLink></li>
        <li><RouterLink to="/about">Acerca de mi</RouterLink></li>
        <li><RouterLink to="/test/pollo">TEST</RouterLink></li>
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
    border: 1px solid transparent;
    border-radius: 7px;
    transition: border-color 0.2s ease-in-out;    
  }

  a:hover {
    border-color: white;
  }

  @media (max-width: 500px) {
    header {
      flex-direction: column;      
      text-align: center;
      justify-content: center;
    }

    ul {
      flex-direction: column;
      gap: 15px;
    }

    a {
      padding: 10px;
    }
  }
</style>