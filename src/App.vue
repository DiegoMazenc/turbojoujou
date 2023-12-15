<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

    const panier = ref([])

    function ajoutPanierManga(item, tome) {
      this.panier.push({manga:item, tome:tome})
      console.log("coucou")
    }
    function ajoutPanierJV(item){
      this.panier.push(item)
    }
    function ajoutPanierJoujou(item){
      this.panier.push(item);
    }

</script>

<template>
  <div id="app">
    <NavBar :panier="panier" />
    <!-- <RouterView
      @ajoutPanierManga="ajoutPanierManga"
      @ajoutPanierJV="ajoutPanierJV"
      @ajoutPanierJoujou="ajoutPanierJoujou"
    /> -->
    <Transition name="fade">
    <component :is="RouterView">
    </component>
  </Transition>
  </div>
</template>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
