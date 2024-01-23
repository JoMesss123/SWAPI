<template>
    <nav class="navbar">
        <!-- LOGO -->
        <div class="logo"><img src="../assets/img/Star_Wars_Logo.svg.png" atl="logo"/> </div>

        <!-- MENUS -->
        <ul class="menu">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/Liste">Liste Complète</RouterLink></li>
            <li><RouterLink to="/Favoris">Favoris</RouterLink></li>
            
        </ul>
    </nav>
</template>
<script>
    import { RouterLink } from 'vue-router'
    
</script>
<style scoped>
.navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(46, 34, 27);
         /*RGB
#2e221b	rgb(46, 34, 27)
#eaa049	rgb(234, 160, 73)
#9b6232	rgb(155, 98, 50)
#b19b79	rgb(177, 155, 121)
#8c848c	rgb(140, 132, 140)*/
        color: #fff;
        width: 1200px;
        margin: 0 auto;
        
    }

    .img{
        width: 100%;
      
    }

   
    .menu {
        display: flex;
        font-size: 18px;
    }

    .menu a {
        text-decoration: none;
        color: #fff;
    }

    .menu li {
        list-style: none;
        padding: 5px 14px;
    }

    .menu li:hover {
        background-color:rgb(155, 98, 50);
        border-radius: 5px;
    }

    .menu a.router-link-exact-active{
        background-color: rgb(155, 98, 50);
        border-radius: 5px;
        padding: 0px 15px;
    }

</style>