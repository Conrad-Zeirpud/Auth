<script setup>
import Loggin from "@/components/Loggin.vue";
import Inscription from "@/components/Inscription.vue";
</script>

<template>
  <main>
    <header>
      <h1>Authentification.exe</h1>
      <button><span class="material-symbols-outlined"> close </span></button>
    </header>
    <body>
      <Inscription />
      <div id="bar-vertical"</div>  
      <Loggin />
    </body>
  </main>
</template>

<style scoped>

*:not(span){
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Centrez horizontalement */
  align-items: center; /* Centrez verticalement */

  background-color: var(--color-background);
  /* background-color: brown; */
  width: calc(
    100% - 40px
  ); /* Le cadre prendra 100% de la largeur de la fenêtre du navigateur */
  height: calc(
    100vh - 40px
  ); /* Le cadre prendra 100% de la hauteur de la fenêtre du navigateur */
  border: 3px solid black;
  box-sizing: border-box; /* Assurez-vous que la bordure est incluse dans la largeur et la hauteur */
  margin: 0; /* Supprimez les marges par défaut du body */
  margin: 20px; /* Ajoutez un peu de marge intérieure au cadre */
}

header {
  border-bottom: 3px solid black;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: gray;
}
header h1 {
  font-size: 18px;
  padding-left: 10px;
}
header button {
  background-color: rgb(103, 1, 1);
  font-size: 18px;
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 3px solid black;
  padding-top: 3px; /* Ajustez la hauteur de la bordure gauche selon vos besoins */
  padding-bottom: 3px;
  cursor: pointer;
}
header button:hover {
  background-color: rgb(148, 4, 4);
}

body {
  background-color: rgb(192, 192, 192);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* Centrez horizontalement */
  align-items: center; /* Centrez verticalement */
  margin: 0px;
}

#bar-vertical{
  border: 2px solid rgb(62, 62, 62);
  border-radius: 10px;
  height: 100%;
}


</style>
