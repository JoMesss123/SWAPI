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
        background-image:url("../assets/img/1537a5d3d78f91618911f729116beeda.jpg") ;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

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

    .menu a.router-link-exact-active{
        background-image: url("../assets/img/star-wars-2369317_640.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        
        
    }

</style>