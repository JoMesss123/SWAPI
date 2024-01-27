<template>
    <div class="detail-modal">
      <div class="detail-content">
        <span class="close" @click="close">&times;</span>
        <h2>{{ selectedItem.name }}</h2>
        <ul>
          <li v-for="(value, key) in selectedItem" :key="key" v-if="key !== 'name'">
            {{ formatLabel(key) }}: {{ value }}
          </li>
        </ul>
        <button @click="toggleFavorite" :class="{ favorite: isFavorite }">{{ favoriteButtonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedItem: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        favorites: []
      };
    },
    computed: {
      isFavorite() {
        return this.favorites.some(item => item.name === this.selectedItem.name);
      },
      favoriteButtonText() {
        return this.isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris';
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      formatLabel(key) {
        
        return key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1);
      },
      toggleFavorite() {
        if (this.isFavorite) {
          this.removeFromFavorites();
        } else {
          this.addToFavorites();
        }
      },
      addToFavorites() {
        this.favorites.push(this.selectedItem);
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      },
      removeFromFavorites() {
        this.favorites = this.favorites.filter(item => item.name !== this.selectedItem.name);
        
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    },
    mounted() {
      
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    }
  };
  </script>
  
  <style scoped>
  .detail-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .detail-content {
    background-image: url("../assets/img/img_background_modal/5.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    padding: 20px;
    border-radius: 5px;
    position: relative; 
    max-height: 80%;
    overflow-y: auto;
    
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 30px;
    color: #fff;
  }
  
  .favorite {
    background-color: #ffc107;
    color: #000;
  }

  li{
    background-color: rgba(0, 0, 0, 0.678);
    color: #F6E00C;
    border: #000000 2px solid;
    padding: 1rem;
    border-radius: 10px;
   
  }
  </style>
  
  