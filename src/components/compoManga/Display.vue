<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useMangaStore } from '../../stores/stock.js'

export default {
  name: 'Display',
  data() {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions(useMangaStore, { deleteMangaFromListAction: 'deleteMangaFromList' }),

    deleteManga(id) {
      const index = this.mangaList.findIndex((item) => item.id === id)
      console.log(index)
      this.deleteMangaFromListAction(index)
    },
    ajoutPanierManga(item, tome) {
      this.$emit('ajoutPanierManga', { item: this.selectedTitle, tome: this.tomeInfo })
      console.log(item, tome)
    }
   
  },
  computed: {
    ...mapState(useMangaStore, ['mangaList', 'getfilteredList', 'getTomeList'])
  },
  emits: ['ajoutPanierManga'], 
}
</script>

<template>
  <div class="cards-template">
    <div v-for="item in getfilteredList" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.prix }}</p>
        <p class="card-text">{{ item.plateforme }}</p>
        <div v-for="tome in item.tomes">
          <p>{{ `Tome : ${tome.numero} Prix : ${tome.prix} Nombre en stock : ${tome.stock}` }}</p>
          <a href="#" class="btn btn-primary" @click="ajoutPanierManga(item, tome)">Ajouter au panier</a>
        </div>
        <div class="d-flex gap-3">
          <a href="#" class="btn btn-primary" @click="deleteManga(item.id)">Supprimer</a>
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
}

.card {
  margin: 5px;
}
</style>
