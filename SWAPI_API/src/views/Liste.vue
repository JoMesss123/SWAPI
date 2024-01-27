<template>
    <div id="app">
        <div class="personnnage">
            <h1 class="h1">Liste des personnages Star Wars</h1>
            <ul>
                <li v-for="character in characters" :key="character.url">
                    <a @click="showDetails(character)"> {{ character.name }}</a>
                </li>
            </ul>
        </div>

        <div class="vaisseaux">
            <h1 class="h1">Liste des vaisseaux Star Wars</h1>
            <ul>
                <li v-for="ship in starships" :key="ship.url">
                    <a @click="showDetails(ship)"> {{ ship.name }}</a>
                </li>
            </ul>
        </div>
        <div class="films">

            <h1 class="h1">Liste des films Star Wars</h1>
            <ul>
                <li v-for="film in films" :key="film.url">
                    <a @click="showDetails(film)"> {{ film.title }}</a>
                </li>
            </ul>
        </div>
        <div class="planetes">
            <h1 class="h1">Liste des planètes Star Wars</h1>
            <ul>
                <li v-for="planet in planets" :key="planet.url">
                    <a @click="showDetails(planet)"> {{ planet.name }}</a>
                </li>
            </ul>
        </div>

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

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Miltonian&display=swap');

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .h1 {
        background-color: rgba(0, 0, 0, 0.678);
        padding: 2rem;
    }

    h1 {
        font-size: 50px;
        color: #FF0000;
        font-family: 'Cinzel', serif;
    }

    ul {
        background-color: rgba(0, 0, 0, 0.521);

    }

    li {
        list-style-type: none;
        font-size: 24px;
        color: #ffffff;
        font-family: 'Miltonian', serif;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    .personnnage {
        background-image: url("../assets/img/92865241-af62-46c2-82f8-cab055340166.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 1200px;
        padding-bottom: 3rem;
      
    }

    .vaisseaux {
        background-image: url("../assets/img/battlefont.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 1200px;
        padding-bottom: 3rem;
    }

    .films {
        background-image: url("../assets/img/Star-Wars-Darth-Vader-helmet-movies-Sith-science-fiction-2089665-wallhere.com.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 1200px;
        padding-bottom: 3rem;
    }

    .planetes {
        background-image: url("../assets/img/star-wars-7330843_1920.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 1200px;
        padding-bottom: 3rem;
    }
</style>