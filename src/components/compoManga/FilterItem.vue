<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useMangaStore } from '../../stores/stock.js'

export default {
  name: 'FilterItem',
  data() {
    return {
      la_marque: null,
      tabMarque: [],
      selectedMarque: "all", 
      triAlpha : false, 
      triPrix : false
    }
  },
  methods: {
    ...mapActions(useMangaStore, {updateSelectedMarqueAction : "updateSelectedMarque" }),
    exportSelectedMarque() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateSelectedMarqueAction(this.selectedMarque);
    }, 

    ...mapActions(useMangaStore, {updateTriAlphaAction : "updateTriAlpha" }),
    exportTrieAlpha() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateTriAlphaAction(this.triAlpha);
    }, 

    ...mapActions(useMangaStore, {updateTriPrixAction : "updateTriPrix" }),
    exportTriePrix() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateTriPrixAction(this.triPrix);
    }, 

  },
  computed: {
    ...mapState(useMangaStore, ['mangaList']),
    uniqueMarques() {
    
      const uniqueMarquesSet = new Set();

     
      this.mangaList.forEach(manga => {
        uniqueMarquesSet.add(manga.style);
      });

  
      return Array.from(uniqueMarquesSet);
    },

  },

}
</script>

<template>
  <div>
    <button @click="exportTrieAlpha">Alphabétique</button>
    <select  class="card" style="width: 18rem" v-model="selectedMarque" @change="exportSelectedMarque">
      <option value="all">All</option>
      <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<style></style>
