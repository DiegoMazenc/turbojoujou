import joujouListe from '../json/stockjoujou.json'
import { defineStore } from 'pinia'

export const useJoujouStore = defineStore('joujou', {
  state: () => ({
    joujouListe: joujouListe,
    selectedMarque: 'all',
    triAlpha: false,
    triPrix: false
  }),

  getters: {
    getJoujou: (state) => state.joujouListe,
    getSelectedMarque: (state) => state.selectedMarque,
    getTriAlpha: (state) => state.triAlpha, 
    getTriPrix: (state) => state.triPrix,

    getFilteredList: (state) => {
      // associer le tableau original à une variable
      let filteredList = joujouListe

      // filtrer le tableau par marque
      if (state.selectedMarque != 'all') {
        filteredList = filteredList.filter()
      }

      // organiser le trix par alphabetique ou par prix

      // retourner le tableau filtré
      return filteredList
    }
  },

  actions: {
    addJoujouToList(item) {
      this.joujouListe.push(item)
    },

    deleteJoujouFromList(id) {
      this.joujouListe.splice(id, 1)
    },
    updateSelectedMarque(selectedMarque) {
      // Mettez à jour la valeur du sélecteur dans le state
      console.log('old', this.selectedMarque)
      console.log(selectedMarque)
      this.selectedMarque = selectedMarque
      console.log('new', this.selectedMarque)
    },

    updateTriAlpha() {
      console.log('trialpha marche')
      this.triPrix = false
      this.triAlpha = true
      console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
    },

    updateTriPrix() {
      
      this.triAlpha = false
      this.triPrix = true
      console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
    }
  }
})
