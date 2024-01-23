<script >
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'


export default {

  components: {
    RouterLink,
    NavBar,
  },
}


</script>

<template>
  <body>

  <NavBar></NavBar>
  <RouterView/>
  </body>
  
  
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color:black;
  }
  

</style>
