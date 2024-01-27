<template>
    <div id="app">
      <h1>Liste des personnages Star Wars</h1>
      <ul>
        <li v-for="character in characters" :key="character.url">
          <a @click="showDetails(character)"> {{ character.name }}</a>
        </li>
      </ul>
  
      <h1>Liste des vaisseaux Star Wars</h1>
      <ul>
        <li v-for="ship in starships" :key="ship.url">
          <a @click="showDetails(ship)"> {{ ship.name }}</a>
        </li>
      </ul>
  
      <h1>Liste des films Star Wars</h1>
      <ul>
        <li v-for="film in films" :key="film.url">
          <a @click="showDetails(film)"> {{ film.title }}</a>
        </li>
      </ul>
  
      <h1>Liste des planètes Star Wars</h1>
      <ul>
        <li v-for="planet in planets" :key="planet.url">
          <a @click="showDetails(planet)"> {{ planet.name }}</a>
        </li>
      </ul>
  
      <DetailComponent :selectedItem="selectedItem" v-if="selectedItem" @close="closeDetails" />
    </div>
  </template>
  
  <script>
  import DetailComponent from '../components/DetailComponent.vue';
  
  export default {
    name: 'Liste',
    components: {
      DetailComponent
    },
    data() {
      return {
        characters: [],
        starships: [],
        films: [],
        planets: [],
        selectedItem: null
      };
    },
    methods: {
      showDetails(item) {
        this.selectedItem = item;
      },
      closeDetails() {
        this.selectedItem = null;
      }
    },
    mounted() {
      fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
          this.characters = data.results;
        });
  
      fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => {
          this.starships = data.results;
        });
  
      fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(data => {
          this.films = data.results;
        });
  
      fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
          this.planets = data.results;
        });
    }
  };
  </script>
  
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  