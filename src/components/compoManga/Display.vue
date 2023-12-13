<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useMangaStore } from '../../stores/stock.js'
import { usePanierStore } from '@/stores/panier'

export default {
  name: 'Display',
  data() {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions(useMangaStore, { deleteMangaFromListAction: 'deleteMangaFromList' }),
    ...mapActions(usePanierStore, { updatePanierAction: 'updatePanier' }),

    deleteManga(id) {
      const index = this.mangaList.findIndex((item) => item.id === id)
      console.log(index)
      this.deleteMangaFromListAction(index)
    },
    ajoutPanierManga(item, tome) {

      this.updatePanierAction({
        name: item.titre, 
        price: tome.prix, 
        tome: tome.numero
      })
      this.$emit('ajoutPanierManga', { item: this.selectedTitle, tome: this.tomeInfo })
      console.log(item, tome)
    }
  },
  computed: {
    ...mapState(useMangaStore, ['mangaList', 'getfilteredList', 'getTomeList'])
  },
  emits: ['ajoutPanierManga']
}
</script>



<template>
  <div class="cards-template">
    <div v-for="item in getfilteredList" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top img-size" alt="..." />
      <div class="card-body infoContainCard">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.prix }}</p>
        <p class="card-text">{{ item.style }}</p>

        <div class="consoleContain">
          <div v-for="tome in item.tomes" class="d-flex flex-column mb-3 tome-container">
          <p class=" text-center">{{ `Tome : ${tome.numero} Prix : ${tome.prix} Nombre en stock : ${tome.stock}` }}</p>
          <button
            class="btn"
            :class="{ 'btn-success': item.consoleSelected, 'btn-light': !item.consoleSelected }"
            @click="ajoutPanierManga(item, tome)"
          >
            🛒
          </button>
        </div>
        <div class="linkCard">
          <button class="btn btn-outline-danger" @click="deleteManga(item.id)">🗑️</button>
        
        </div>
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
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px 0;

}

.img-size {
  height: 170px;
}

.infoContainCard {
  position: relative;
  padding-bottom: 60px;
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

.tome-container{
  border: 1px solid black; 
  border-radius : 15px 
}
</style>