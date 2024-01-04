<script setup>

import { useMangaStore } from '../../stores/stock.js'
import { computed } from 'vue';
import { ref } from 'vue';
import PanierArticles from '../../components/PanierArticles.vue'


const selectedMarque = ref('all')
const selectedTitle =  ref('all')
let triAlpha = ref(false); 


const storeManga = useMangaStore(); 
const list = storeManga.getfilteredList; 

function exportSelectedMarque(){
  storeManga.updateSelectedMarque(selectedMarque.value); 
}

function exportTrieAlpha(){
  storeManga.updateTriAlpha(triAlpha.value); 
}

  
function exportSelectedTitle() {
  storeManga.updateSelectedTitle(selectedTitle.value)
}

const data = computed(()=>{
  return storeManga.uniqueTitre
})

</script>

<template>
  <div class="options-container">
    
    <p class="modal-title text-primary-emphasis fs-6 text-center">Trier par ordre : </p>
    <button @click="exportTrieAlpha" class="btn btn-outline-secondary">Alphabétique</button>
    <p class="modal-title text-primary-emphasis fs-6 text-center">Style : </p>
    <div class="custom-select">
      <select class="card selectOption" style="width: 18rem" v-model="selectedMarque" @change="exportSelectedMarque">
        <option value="all">All</option>
        <option v-for="(item, index) in data" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <p class="modal-title text-primary-emphasis fs-6 text-center">Titres : </p>
    <div class="custom-select">
      <select class="card selectOption" style="width: 18rem" v-model="selectedTitle" @change="exportSelectedTitle">
        <option value="all">All</option>
        <option v-for="(manga, index) in list" :key="index" :value="manga">
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
