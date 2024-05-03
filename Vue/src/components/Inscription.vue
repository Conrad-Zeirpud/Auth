<template>
  <section>
    <header>
      <h1>Inscription</h1>
      <img id="logo" src="@/assets/logo.svg" alt="Vue" />
    </header>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Email :</label>
        <input
          id="email"
          type="text"
          v-model="formData.email"
          placeholder="Email / Username"
        />
      </div>
      <div>
        <label for="username">Username :</label>
        <input
          id="username"
          type="text"
          v-model="formData.email"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="name">NOM Prénom :</label>
        <input
          id="name"
          type="text"
          v-model="formData.email"
          placeholder="NOM Prénom"
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
      <div>
        <label for="confirmedPassword">Confirmé le mot de passe :</label>
        <input
          id="confirmedPassword"
          type="password"
          v-model="formData.password"
          placeholder="Mot de passe"
        />
      </div>
      <button id="btn-inscription" type="submit">S'inscrire</button>
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
* {
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
  border: 2px solid black;
  width: 600px;
  background-color: gray;
}

form {
  height: 700px;
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
  margin: 0 15px;
  border: 1px solid black;
  background-color: rgb(160, 160, 160);
}

form div label {
  font-size: 28px;
  color: black;
}

form div input {
  width: 300px;
  /* height: 50px; */
  font-size: 18px;
}

#btn-inscription {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 25px;
  font-size: 24px;
}

#logo {
  display: none;
  width: 30px;
}
</style>
