<script>
import { mapState } from 'pinia'
// import { mapActions } from 'pinia'
import { useJoujouStore } from '../stores/stock.js'

export default {
  name: 'FilterItem',
  data() {
    return {
      la_marque: null
    }
  },
  methods: {
   
  },
  computed: {
    ...mapState(useJoujouStore, ['joujouListe'])
  }
}
</script>

<template>
  <div>
    <button>Alphabétique</button>
    <button>Prix</button>
    <select v-for="(item, index) in joujouListe" :key="index" class="card" style="width: 18rem"> 
           
      <option value="Comics">{{ item.la_marque }}</option>
    
    </select>
  </div>
</template>

<style>

</style>
