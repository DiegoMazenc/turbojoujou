<script>
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useJoujouStore } from '../stores/stock.js';

export default {
  name: 'Display',
  data(){
    return {
    id: null
    }
},
  computed: {
    ...mapState(useJoujouStore, ['joujouListe'])
  },
}
</script>

<template>
  <div v-for="(item, index) in joujouListe" :key="item.id" class="card" style="width: 18rem">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.nom }}</h5>
      <p class="card-text">{{ item.prix }}</p>
      <p class="card-text">{{ item.la_marque }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style></style>
