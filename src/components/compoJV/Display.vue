<script setup>
import { useJeuxvVideoStore } from '../../stores/stock.js'
import { usePanierStore } from '../../stores/panier.js'
import { computed } from 'vue'
import { defineEmits } from 'vue'

const storeJeuxVideo = useJeuxvVideoStore()
const storePanier = usePanierStore()
const emit = defineEmits(['ajoutPanierJV'])

const ajoutPanierJV = (item) => {
  if (item.consoleSelected){
  storePanier.updatePanier({
    name: item.titre,
    price: item.prix,
    plateforme: item.consoleSelected,
    id: item.id
  })
  emit('ajoutPanierJV', item)}
}

const getConsoleSelect = (item, plateform) => {
  if (item.consoleSelected === plateform) {
    item.consoleSelected = null
  } else {
    item.consoleSelected = plateform
  }
}

const getColorClass = (plateform) => {
  if (plateform === 'Nintendo Switch' || plateform === 'Wii U') {
    return 'nintendo-color'
  } else if (plateform === 'PS4' || plateform === 'PS5') {
    return 'playstation-color'
  } else if (plateform === 'Xbox One' || plateform === 'Xbox Series X/S') {
    return 'xbox-color'
  }
  return ''
}

const filterJVListe = computed(() => {
  return storeJeuxVideo.getfilteredList
})

const selectedConsole = computed(() => {
  return storeJeuxVideo.getSelectedConsole
})
</script>

<template>
  <div class="cards-template">
    <div v-for="item in filterJVListe" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top img-size" alt="..." />
      <div class="card-body infoContainCard">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.prix }}€</p>
        <p class="card-text">{{ item.style }}</p>

        <div class="consoleContain">
          <div v-if="selectedConsole === 'all'" class="listConsole">
            <button
              v-for="(plateform, index) in item.plateforme"
              :key="index"
              :class="[
                getColorClass(plateform),
                'btnConsole',
                {
                  btnConsoleSelected: plateform === item.consoleSelected,
                  btnConsoleUnselected: plateform !== item.consoleSelected
                }
              ]"
              @click="getConsoleSelect(item, plateform)"
            >
              {{ plateform }}
            </button>
          </div>

          <button
            v-else
            :class="[
              getConsoleSelect(item, selectedConsole),
              getColorClass(selectedConsole),
              {
                btnConsoleSelected: selectedConsole === item.consoleSelected
              }
            ]"
            class="btnConsole"
          >
            {{ selectedConsole }}
          </button>
        </div>
        <div class="linkCard">
          <button
            class="btn btnPanier"
            :class="{ 'btn-success': item.consoleSelected, 'btn-light': !item.consoleSelected }"
            @click="ajoutPanierJV(item)"
          >
            {{ item.consoleSelected ? '🛒' : 'Sélectionnez une console' }}
          </button>
        </div>
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

.img-size {
  height: 170px;
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
../../stores/panier-first.js