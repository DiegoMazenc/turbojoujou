<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'

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
<<<<<<< HEAD
    exportSelectedMarque(){
      this.$store.dispatch('stock.js/sortJoujouFromList', this.selectedMarque)
      console.log(this.exportSelectedMarque); 
=======
    ...mapActions(useJoujouStore, {updateSelectedMarqueAction : "updateSelectedMarque" }),
    exportSelectedMarque() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateSelectedMarqueAction(this.selectedMarque);
>>>>>>> 4c1e6dc53b7c3db0a2fe4ba840dabd334d9ecbd9
    }
  },
  computed: {
    ...mapState(useJoujouStore, ['joujouListe']),
    uniqueMarques() {
      const uniqueMarquesSet = new Set();

      this.joujouListe.forEach(joujou => {
        uniqueMarquesSet.add(joujou.la_marque);
      });

      return Array.from(uniqueMarquesSet);
    },
<<<<<<< HEAD

  },
//   watch: {
//   selectedMarque(newValue) {
//     console.log(newValue);
//   }
// },
=======
    
  },
  mounted() {
  
  }
>>>>>>> 4c1e6dc53b7c3db0a2fe4ba840dabd334d9ecbd9
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
