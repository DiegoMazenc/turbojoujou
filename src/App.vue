<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <div id="app">
    <NavBar :panier="panier" />
    <Transition name="fade">
      <component :is="RouterView"> </component>
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
