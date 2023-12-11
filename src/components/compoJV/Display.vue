<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useJeuxvVideoStore } from '../../stores/stock.js'

export default {
  name: 'Display',
  data() {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions(useJeuxvVideoStore, { deleteJeuxVideoFromListAction: 'deleteJeuxVideoFromList' }),


    deleteJeuxVideo(id) {
      
      const index = this.jeuxVideoList.findIndex(item => item.id === id);
      console.log(index); 
      this.deleteJeuxVideoFromListAction(index); 
    }, 

    ajoutPanierJV(item){
      this.$emit("ajoutPanierJV", item)
}
  },

  computed: {
    ...mapState(useJeuxvVideoStore, ['jeuxVideoList', 'getfilteredList'])

  }, 
  emits:['ajoutPanierJV'], 
}
</script>

<template>
 <div class="cards-template">
<div v-for="(item) in getfilteredList" :key="item.id" class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.titre }}</h5>
      <p class="card-text">{{ item.prix }}</p>
      <p class="card-text">{{ item.plateforme }}</p>
      <a href="#" class="btn btn-primary" @click="deleteJeuxVideo(item.id)">Supprimer</a>
      <a href="#" class="btn btn-primary" @click="ajoutPanierJV(item)">Ajouter au panier</a>
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
