<script >
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'
import piedDePage from '../src/components/piedDePage.vue'


export default {

  components: {
    RouterLink,
    NavBar,
    piedDePage,
  },
}


</script>

<template>
  <body>

  <NavBar></NavBar>
  <RouterView/>
  <piedDePage></piedDePage>
  </body>
  
  
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color:black;
  }
  

</style>
