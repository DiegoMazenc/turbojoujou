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
      
      const index = this.mangaList.findIndex(item => item.id === id);
      console.log(index); 
      this.deleteMangaFromListAction(index); 
    }
  },

  computed: {
    ...mapState(useMangaStore, ['mangaList', 'getfilteredList', 'getTomeList'])

  }
}
</script>

<template>
 <div class="cards-template">
<div v-for="(item) in getfilteredList" :key="item.id" class="card" style="width: 18rem">
    <img :src="item.img" class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title">{{ item.titre }}</h5>
      <p class="card-text">{{ item.prix }}</p>
      <p class="card-text">{{ item.plateforme }}</p>
    <div>
      <p v-for="(item) in item.tomes">{{ `Tome : ${item.numero} Prix : ${item.prix} Nombre en stock : ${item.stock}` }}</p>
    </div>
      <a href="#" class="btn btn-primary" @click="deleteManga(item.id)">Supprimer</a>
     
    </div>
  </div>
 </div>


  
</template>

<style>
.cards-template{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
}

.card{
  margin:5px;
}
</style>
