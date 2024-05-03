<template>
  <section>
    <header>
      <h1>Connexion</h1>
      <img id="logo" src="@/assets/logo.svg" alt="Vue" />
    </header>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email or Username :</label>
        <input
          id="email"
          type="text"
          v-model="formData.email"
          placeholder="Email / Username"
        />
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          v-model="formData.password"
          placeholder="Mot de passe"
        />
      </div>
      <button id="btn-connection" type="submit">Se connecter</button>
      <a id="reset-mdp" href="">Mot de passe oublié ?</a>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  email: "",
  password: "",
});

const submitForm = () => {
  // Ajoutez ici la logique pour soumettre le formulaire, par exemple, une requête HTTP
  console.log(formData.value);
};
</script>

<style scoped>
*:not(span) {
  font-family: "VT323", monospace;
  font-weight: 400;
  font-style: normal;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  /* font-family: "Times New Roman", Times, serif; */
  font-size: 36px;
  color: black;
}

section {
  border: 1px solid black;
  width: 600px;
  background-color: gray;
}

form {
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
}

form div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 75px;
  padding: 15px;
  margin: 15px;
  border: 1px solid black;
  background-color: rgb(160, 160, 160);
}

form div label {
  font-size: 20px;
  color: black;
}

form div input {
  width: 300px;
  font-size: 18px;
}

#reset-mdp {
  font-size: 18px;
  /* width: 200px; */
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
}

#btn-connection {
  width: 200px;
  margin: 0 auto;
  font-size: 24px;
}

#logo {
  display: none;
  width: 30px;
}
</style>
