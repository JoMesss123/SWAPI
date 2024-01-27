<template>
  <div class="main">
    <div class="h1">
      <h1 :style="{ fontWeight: fontWeight }">Le meilleur Lecteur de L'<span>API SWAPI</span></h1>
    </div>

  </div>
  <div>
    <div class="newsletter-section">
      <h2>Inscrivez-vous aux actualités</h2>
      <form @submit.prevent="subscribe" class="signup-form">
        <div class="form-group">
          <label for="nom">Nom:</label>
          <input type="text" id="nom" v-model.trim="nom" required>
        </div>
        <div class="form-group">
          <label for="prenom">Prénom:</label>
          <input type="text" id="prenom" v-model.trim="prenom" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model.trim="email" required>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
    <Modal v-if="showModal" @close="closeModal">Inscription réussie!</Modal>
  </div>



</template>
<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Accueil",
  components: {
    Modal
  },
  data() {
    return {
      fontWeight: "normal",
      nom: "",
      prenom: "",
      email: "",
      showModal: false,
      errorNom: "",
      errorPrenom: "",
      errorEmail: ""
    };
  },
  mounted() {
    this.intervalId = setInterval(this.updateFontWeight, 500);
  },
  destroyed() {
    clearInterval(this.intervalId);
  },
  methods: {
    updateFontWeight() {
      this.fontWeight = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    },
    validateForm() {
      let isValid = true;
      if (!this.nom.trim()) {
        this.errorNom = "Veuillez saisir votre nom";
        isValid = false;
      } else {
        this.errorNom = "";
      }
      if (!this.prenom.trim()) {
        this.errorPrenom = "Veuillez saisir votre prénom";
        isValid = false;
      } else {
        this.errorPrenom = "";
      }
      if (!this.email.trim()) {
        this.errorEmail = "Veuillez saisir votre adresse email";
        isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.errorEmail = "Veuillez saisir une adresse email valide";
        isValid = false;
      } else {
        this.errorEmail = "";
      }
      return isValid;
    },
    isValidEmail(email) {
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    subscribe() {
      if (this.validateForm()) {
        this.showModal = true;
        this.nom = "";
        this.prenom = "";
        this.email = "";
      }
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Miltonian&display=swap');

  .main {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("../assets/img/Darth-Vader-Star-Wars-artwork-lightsaber-Star-Wars-Villains-Sith-2108857-wallhere.com.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .h1 {
    background-color: rgba(0, 0, 0, 0.678);
    padding: 2rem;
  }

  h1 {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 50px;
    color: #FF0000;
    font-family: 'Cinzel', serif;
  }

  span {
    color: #FF0000;
    font-family: 'Miltonian', serif;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }

  .newsletter-section {
    margin-top: 50px;
  }

  .signup-form {
    background-color: rgba(255, 255, 255, 0.055);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button[type="submit"] {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>