<script>
import { mapState } from 'pinia'
import { useJoujouStore } from '../../stores/stock.js'

export default {
  name: 'Counter',
  data() {
    return {
        qte: null, 
    }
  },
  methods: {
    
  },

  computed: {
    ...mapState(useJoujouStore, ['joujouListe']),

    showQte () {
        this.qte = this.joujouListe.length
        return this.qte; 
    }
  }, 
  mounted() {
    this.showQte()
  },
  watch: {
    joujouListe: {
        handler() {
            this.showQte; 
        },
        deep:true
    }

  }

  }

</script>

<template>
  <p>{{ qte }}</p>
</template>

<style>

</style>
