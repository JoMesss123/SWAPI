<template>
    <div>
        <nav class="navbar">

            <div class="logo"><img src="../assets/img/logo.gif" alt="logo" /></div>

            <div class="navBar_div_recherche">
                <ul class="menu">
                    <li>
                        <RouterLink to="/">Accueil</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Liste">Liste Complète</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Favoris">Favoris</RouterLink>
                    </li>
                </ul>

                <div class="search-bar">
                    <input type="text" v-model="searchQuery" placeholder="Rechercher dans SWAPI..." />
                    <button @click="search">Rechercher</button>
                </div>


                <DetailComponent v-if="showModal" :selectedItem="selectedItem" @close="closeModal" />
          </div> 
         </nav> 
    </div>

   



</template>

<script>
    import {
        RouterLink
    } from 'vue-router'
    import DetailComponent from "@/components/DetailComponent.vue";

    export default {
        components: {
            RouterLink,
            DetailComponent
        },
        data() {
            return {
                searchQuery: "",
                showModal: false,
                selectedItem: null
            };
        },
        methods: {
            async search() {

                const response = await fetch(`https://swapi.dev/api/people/?search=${this.searchQuery}`);
                const data = await response.json();


                if (data.results && data.results.length > 0) {
                    this.selectedItem = data.results[0];
                    this.showModal = true;
                }
            },
            closeModal() {
                this.showModal = false;
                this.selectedItem = null;
            }
        }
    };
</script>
<style scoped>
    .navbar {
        background-image: url("../assets/img/1537a5d3d78f91618911f729116beeda.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(46, 34, 27);

        color: #fff;
        width: 1200px;
        margin: 0 auto;


    }

    .navBar_div_recherche {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: space-between;
       

        color: #fff;
        width: 1200px;
        margin: 0 auto;
    }

    img {
        max-width: 400px;
        width: 100%;

    }


    .menu {
        display: flex;
        font-size: 24px;
    }

    .menu a {
        text-decoration: none;
        color: #fff;
    }

    .menu li {
        background-image: url("../assets/img/star-wars-2908144_640.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        list-style: none;
        padding: 5px 14px;
    }

    .menu li:hover {
        background-image: url("../assets/star-wars-2369317_640.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;



    }

    .menu a.router-link-exact-active {
        background-image: url("../assets/img/star-wars-2369317_640.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;



    }
</style>