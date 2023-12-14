<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useJoujouStore } from '../../stores/stock.js'
import { usePanierStore } from '@/stores/panier'

export default {
  name: 'Display',
  data() {
    return {
      id: null
    }
  },
  methods: {
    ...mapActions(useJoujouStore, { deleteJoujouFromListAction: 'deleteJoujouFromList' }),
    ...mapActions(usePanierStore, { updatePanierAction: 'updatePanier' }),


    deleteJoujou(id) {
      
      const index = this.joujouListe.findIndex(item => item.id === id);
      console.log(index); 
      this.deleteJoujouFromListAction(index); 
    }, 

    ajoutPanierJoujou(item){
    
      this.updatePanierAction({
        name: item.nom, 
        price: item.prix, 
        marque: item.la_marque
      })
      this.$emit("ajoutPanierJoujou", item)
    }
  },

  computed: {
    ...mapState(useJoujouStore, ['joujouListe', 'getfilteredList'])

  }
}
</script>

<template>
 <div class="cards-template ">
<div v-for="(item) in getfilteredList" :key="item.id" class="card" style="width: 18rem">
    <img :src="item.img" class="card-img-top img-sizeJoujou" alt="..." />
    <div class="card-body ">
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



.btn-success{
 
  --bs-btn-color: #fff;
    --bs-btn-bg: #dff0e5;
    --bs-btn-border-color: #7ec997;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #3cb163;
    --bs-btn-hover-border-color: #7ec997;
    --bs-btn-focus-shadow-rgb: 60,153,110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #7ec997;
    --bs-btn-active-border-color: #7ec997;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #7ec997;
    --bs-btn-disabled-border-color: #7ec997;
}

.btnPanier{
  width: 100%;
  margin: 0;
}



.img-sizeJoujou {
  height: 320px;
  width: auto;
}



h5{
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
