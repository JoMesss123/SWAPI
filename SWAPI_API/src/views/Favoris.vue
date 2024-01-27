<template>
    <div>
      <h1>Favoris</h1>
      <ul>
        <li v-for="(favorite, index) in favorites" :key="index">
          <button @click="openModal(favorite)">{{ favorite.name }}</button>
        </li>
      </ul>
  
      
      <DetailComponent v-if="showModal" :selectedItem="selectedItem" @close="closeModal" />
    </div>
  </template>
  
  <script>
  import DetailComponent from "@/components/DetailComponent.vue";
  
  export default {
    components: {
      DetailComponent
    },
    data() {
      return {
        favorites: [],
        showModal: false,
        selectedItem: null
      };
    },
    mounted() {
     
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    },
    methods: {
      openModal(item) {
        this.selectedItem = item;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedItem = null;
      }
    }
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Miltonian&display=swap');

  h1 {
    color: rgb(255, 0, 0);
    font-size: 50px;
    text-align: center;
    font-family:'Cinzel', serif ;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin: 0.5rem;
  }

  button {
    background-color: #FF0000;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: #F6E00C 2px solid;
  }

  button:hover {
    background-color: #4400ff;
    
  }

  
 
  </style>
  