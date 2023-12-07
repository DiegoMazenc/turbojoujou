<script>
import { mapState } from 'pinia'
import { useJoujouStore } from '../stores/stock.js'

export default {
  name: 'Display',
  computed: {
    ...mapState(useJoujouStore, ['joujouListe'])
  },
}
</script>

<template>
 <div class="cards-template">
<div v-for="(item, index) in joujouListe" :key="item.id" class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.nom }}</h5>
      <p class="card-text">{{ item.prix }}</p>
      <p class="card-text">{{ item.la_marque }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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
