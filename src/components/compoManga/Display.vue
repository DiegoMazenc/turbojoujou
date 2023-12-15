<script setup>
import { useMangaStore } from '../../stores/stock.js'
import { usePanierStore } from '@/stores/panier'
import { defineEmits } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';

const id = ref(null)
const mangaStore = useMangaStore();
const panierStore = usePanierStore();
const emit = defineEmits(['ajoutPanierManga'])


function deleteManga(id) {
  const index = mangaStore.mangaList.findIndex((item) => item.id === id.value)
  console.log(index)
  mangaStore.deleteMangaFromList(index)
}

function ajoutPanierManga(item, tome) {
  panierStore.updatePanier({
    name: item.titre,
    price: tome.prix,
    tome: tome.numero
  })
  emit('ajoutPanierManga', { item: mangaStore.selectedTitle, tome: mangaStore.tomeInfo })
}


const getfilteredList = computed(()=>{
  return mangaStore.getfilteredList; 
})

// const mangaList = computed(()=>{
//   return mangaStore.mangaList; 
// })

// const getTomeList = computed(()=>{
//   return mangaStore.getTomeList; 
// })

</script>

<template>
  <div class="cards-template">
    <div v-for="item in getfilteredList" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top img-size" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.prix }}</p>
        <p class="card-text">{{ item.style }}</p>

        <div class="consoleContain">
          <div v-for="tome in item.tomes" class="tome-container">
            <!-- <p class=" text-center">{{ `Tome : ${tome.numero} Prix : ${tome.prix} Nombre en stock : ${tome.stock}` }}</p> -->
            <div class="tomContain">
              <div>
                <p>Tome {{ tome.numero }}</p>
                <p>Prix : {{ tome.prix }} €</p>
              </div>
              <button class="btn btn-success btnPanierMangas" @click="ajoutPanierManga(item, tome)">
                🛒
              </button>
            </div>
          </div>
          <!-- <div class="linkCard">
          <button class="btn btn-outline-danger" @click="deleteManga(item.id)">🗑️</button>
        
        </div> -->
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

.consoleContain {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
}

.img-size {
  height: 170px;
}

.tomContain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.btnPanierMangas,
.tomContain p {
  margin: 0;
}

.infoContainCard {
  position: relative;
  padding-bottom: 10px;
}

.linkCard {
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
  bottom: 15px;
}

.cards-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  margin: 5px;
}

.tome-container {
  border-top: 1px solid black;
}
</style>
@/stores/panier-first.js