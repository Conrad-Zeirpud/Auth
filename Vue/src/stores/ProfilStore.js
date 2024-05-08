import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProfilStore = defineStore("profil", () => {
  const count = ref(0);
  const userProfile = ref(null);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("/api/user/profile");
      userProfile.value = response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du profil :", error);
      // Gérer les erreurs de récupération du profil ici
    }
  };

  const connexion = async (username) => {
    try {
      const response = await axios.post("127.0.0.1:8000/", { username });
      // Gérer la réponse de la demande de push ici
    } catch (error) {
      console.error("Erreur lors de la demande de push :", error);
      // Gérer les erreurs de la demande de push ici
    }
  };

  function test(username, password) {
    axios
      .post("http://127.0.0.1:8000/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return {
    count,
    userProfile,
    fetchUserProfile,
    connexion,
    test,
  };
});
