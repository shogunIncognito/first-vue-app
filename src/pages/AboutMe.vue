<script setup></script>

<template>
  <div class="sidecontainer" id="about">
    <div class="sideimage" />
    <div class="sidecontent">
      <h2><span style="color: purple;">Acerca</span> de mi</h2>
      <p>Soy un caballero valiente y honorable, comprometido con la justicia. Con mi armadura reluciente y mi espada lista, protejo a los indefensos y defiendo a los oprimidos. Mi corazón rebosa de nobleza y lealtad, mientras busco resolver conflictos de manera justa y evitar la violencia. Soy un líder que inspira esperanza y coraje en los momentos oscuros. A través de mi valentía y honor, aspiro a dejar un legado perdurable como un verdadero caballero.</p>
    </div>
  </div>
</template>

<style scoped>
.sideimage {
  background-image:
    url('https://cdn.wallpapersafari.com/58/35/YDXOl2.jpg');
  height: 80vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.sidecontainer {
  display: flex;
  background-color: #000000;
}

.sidecontent {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 50px;
}

h2 {
  font-size: 2.1rem;
  margin-bottom: 1pc;
}

p {
  font-size: 1.2rem;  
}

@media (max-width: 500px) {
  .sidecontainer {
    margin-top: 50pc;
    flex-direction: column;
  }

  .sidecontent {
    margin: 30px 0;    
  }

  p {
    padding: 20px;
  }
}
</style>