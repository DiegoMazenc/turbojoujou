import joujouListe from '../json/stockjoujou.json'
import { defineStore } from 'pinia'


export const useJoujouStore = defineStore('joujou', {
  state: () => ({
    joujouListe: joujouListe,
    selectedMarque: ''
  }),

  getters: {
    getJoujou: (state) => state.joujouListe,

 
  },

  actions: {
    addJoujouToList(item) {
      this.joujouListe.push(item)
    },

    deleteJoujouFromList(id) {
      this.joujouListe.splice(id, 1)
    },

    sortJoujouFromList(state) {
      const marqueFilter = this.joujouListe.filter((item) => item.la_marque === state.selectedMarque)
      return marqueFilter
    }
  }
})
