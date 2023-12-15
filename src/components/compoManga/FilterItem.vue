<script setup>

import { useMangaStore } from '../../stores/stock.js'
import { computed } from 'vue';
import PanierArticles from '../../components/PanierArticles.vue'


const la_marque = null;
const tabMarque = [];
const selectedMarque = 'all'
const selectedTitle = 'all'
const triAlpha = false
const triPrix = false
const mangaTitre = null
const tomeInfo = null


function exportSelectedMarque(){
  useMangaStore.updateSelectedMarque(); 
}

function exportTrieAlpha(){
  useMangaStore.updateTrieAlpha(triAlpha); 
}

function exportTriePrix(){
  useMangaStore.updateTriPrix(triPrix); 
}
  
function exportSelectedTitle() {
  useMangaStore.updateSelectedTitle()
}

const data = computed(()=>{
  const uniqueMarquesSet = new Set()
  useMangaStore.mangaList.forEach((manga)=>{
    uniqueMarquesSet.add(manga.style)
  })
  return Array.from(uniqueMarquesSet)
})

</script>

<template>
  <div class="options-container">
    <button @click="exportTrieAlpha">Alphabétique</button>
    <h4>Style</h4>
    <div class="custom-select">
      <select class="card selectOption" style="width: 18rem" v-model="selectedMarque" @change="exportSelectedMarque">
        <option value="all">All</option>
        <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <h4>Titre</h4>
    <div class="custom-select">
      <select class="card selectOption" style="width: 18rem" v-model="selectedTitle" @change="exportSelectedTitle">
        <option value="all">All</option>
        <option v-for="(manga, index) in getfilteredList" :key="index" :value="manga">
          {{ manga.titre }}
        </option>
      </select>
    </div>
    <PanierArticles />
  </div>
</template>

<style>
.options-container {
  display: flex;
  flex-direction: column;
}

button,
select {
  margin-bottom: 10px;
}

.custom-select {
  position: relative;
  width: 18rem;
}

.custom-select select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none;
  /* Style par défaut de la flèche de la liste déroulante */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none;
  /* Supprime la bordure focus par défaut sur certains navigateurs */
}

.custom-select::after {
  content: '\25BC';
  /* Flèche vers le bas */
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
}

.selectOption {
  width: 100%;
  border: none;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  border-radius: 0;
}
</style>
