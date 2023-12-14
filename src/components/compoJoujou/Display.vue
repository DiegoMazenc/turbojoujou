<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useJoujouStore } from '../../stores/stock.js'

export default {
  name: 'Display',
  data() {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions(useJoujouStore, { deleteJoujouFromListAction: 'deleteJoujouFromList' }),


    deleteJoujou(id) {
      
      const index = this.joujouListe.findIndex(item => item.id === id);
      console.log(index); 
      this.deleteJoujouFromListAction(index); 
    }, 

    ajoutPanierJoujou(item){
      this.$emit("ajoutPanierJoujou", item)
    }
  },

  computed: {
    ...mapState(useJoujouStore, ['joujouListe', 'getfilteredList'])

  }
}
</script>

<template>
 <div class="cards-template">
<div v-for="(item) in getfilteredList" :key="item.id" class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.nom }}</h5>
      <p class="card-text">{{ item.prix }}</p>
      <p class="card-text">{{ item.la_marque }}</p>
      <a href="#" class="btn btn-primary" @click="deleteJoujou(item.id)">Supprimer</a>
      <a href="#" class="btn btn-primary" @click="ajoutPanierJoujou(item)">Ajouter au panier</a>
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
