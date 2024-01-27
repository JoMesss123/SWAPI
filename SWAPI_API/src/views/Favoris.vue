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
 
  </style>
  