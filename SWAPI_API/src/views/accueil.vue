<template>
    <div class="main">
      <div class="h1">
        <h1 :style="{ fontWeight: fontWeight }">Le meilleur Lecteur de L'
          <span>API SWAPI</span>
        </h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Accueil",
    data() {
      return {
        fontWeight: "normal"
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
  </style>
  