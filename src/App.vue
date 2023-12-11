<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    RouterView
  },
  data() {
    return {
      panier: []
    }
  },
  methods: {
    ajoutPanierManga(item) {
      this.panier.push(item)
    }, 
    ajoutPanierJV(item){
      this.panier.push(item)
    }, 
    ajoutPanierJoujou(item){
      this.panier.push(item); 
    }
  }
}
</script>

<template>
  <div id="app">
    <NavBar :panier="panier"/>
    <RouterView @ajoutPanierManga="ajoutPanierManga" @ajoutPanierJV="ajoutPanierJV" @ajoutPanierJoujou="ajoutPanierJoujou"/>
  </div>
</template>

<style></style>
