<script setup>
import { useJoujouStore } from '../../stores/stock.js'
import { usePanierStore } from '@/stores/panier'
import { computed } from 'vue'
import { defineEmits } from 'vue'

const storeJoujou = useJoujouStore()
const storePanier = usePanierStore()
const emit = defineEmits(['ajoutPanierJoujou'])

const ajoutPanierJoujou = (item) => {
  storePanier.updatePanier({
    name: item.nom,
    price: item.prix,
    marque: item.la_marque
  })

  emit('ajoutPanierJoujou', item)
}

const filterJoujouListe = computed(() => {
  return storeJoujou.getfilteredList
})
</script>

<template>
  <div class="cards-template">
    <div v-for="item in filterJoujouListe" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top img-sizeJoujou" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.nom }}</h5>
        <p class="card-text">{{ item.prix }} €</p>
        <p class="card-text">{{ item.la_marque }}</p>
        <!-- <a href="#" class="btn btn-primary" @click="deleteJoujou(item.id)">Supprimer</a> -->
        <button class="btn btn-success btnPanier" @click="ajoutPanierJoujou(item)">🛒</button>
      </div>
    </div>
  </div>
</template>

<style>
.cards-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 400px;
}

.card {
  margin: 5px;
}

.btn-success {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dff0e5;
  --bs-btn-border-color: #7ec997;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #3cb163;
  --bs-btn-hover-border-color: #7ec997;
  --bs-btn-focus-shadow-rgb: 60, 153, 110;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #7ec997;
  --bs-btn-active-border-color: #7ec997;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #7ec997;
  --bs-btn-disabled-border-color: #7ec997;
}

.btnPanier {
  width: 100%;
  margin: 0;
}

.btnConsole {
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  margin: 2px;
  border: none;
  color: white;
}

.btnConsoleUnselected {
  font-weight: 700;
  opacity: 0.5;
  transition: 0.2s;
}

.btnConsoleUnselected:hover {
  opacity: 1;
}
.btnConsoleSelected {
  font-weight: 700;
  opacity: 1;
}

.playstation-color {
  background-color: #4245ee;
}

.nintendo-color {
  background-color: #ee4242;
}

.xbox-color {
  background-color: #12c52f;
}

.listConsole {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.img-sizeJoujou {
  height: 320px;
  width: auto;
}

.infoContainCard {
  position: relative;
  padding-bottom: 60px;
}

h5 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
}

.linkCard {
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
  bottom: 15px;
}
</style>
