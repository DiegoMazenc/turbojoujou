<script>
import { mapState } from 'pinia'
// import { mapActions } from 'pinia'
import { useJoujouStore } from '../stores/stock.js'

export default {
  name: 'FilterItem',
  data() {
    return {
      la_marque: null,
      tabMarque: [],
      selectedMarque: null
    }
  },
  methods: {
    exportSelectedMarque(){
      this.$store.dispatch('stock.js/sortJoujouFromList', this.selectedMarque)
      console.log(this.exportSelectedMarque); 
    }
  },
  computed: {
    ...mapState(useJoujouStore, ['joujouListe']),
    uniqueMarques() {
      // Utilisez un Set pour stocker les valeurs uniques
      const uniqueMarquesSet = new Set();

      // Parcourez la liste pour obtenir toutes les valeurs uniques
      this.joujouListe.forEach(joujou => {
        uniqueMarquesSet.add(joujou.la_marque);
      });

      // Convertissez le Set en tableau
      return Array.from(uniqueMarquesSet);
    },

  },
//   watch: {
//   selectedMarque(newValue) {
//     console.log(newValue);
//   }
// },
}
</script>

<template>
  <div>
    <button>Alphabétique</button>
    <button>Prix</button>
    <select  class="card" style="width: 18rem" v-model="selectedMarque" @change="exportSelectedMarque">
      <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<style></style>
