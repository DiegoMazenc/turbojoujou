import joujouListe from '../json/stockjoujou.json'
import { defineStore } from 'pinia'

export const useJoujouStore = defineStore('joujou', {
  state: () => ({
    joujouListe: joujouListe,
    selectedMarque: 'all',
    filteredList: joujouListe,
    triAlpha: false,
    triPrix: false
  }),

  getters: {
    getJoujou: (state) => state.joujouListe,
    getSelectedMarque: (state) => state.selectedMarque,
    getTriAlpha: (state) => state.triAlpha,
    getTriPrix: (state) => state.triPrix,
    getfilteredList: (state) => state.filteredList
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
      this.selectedMarque = selectedMarque
      this.filteredList = joujouListe
      if (this.selectedMarque !== 'all') {
        this.filteredList = this.filteredList.filter(
          (item) => item.la_marque === this.selectedMarque
        )
      }
    },

    updateTriAlpha() {
      // console.log('trialpha marche')
      this.triPrix = false
      this.triAlpha = true
      // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
      if (this.triAlpha == true) {
        this.filteredList = this.filteredList.sort((a, b) => a.nom.localeCompare(b.nom))
        console.log(this.filteredList)
      }
    },

    updateTriPrix() {
      this.triAlpha = false
      this.triPrix = true
      // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
      if (this.triPrix == true) {
        this.filteredList = this.filteredList.sort((a, b) => a.prix -b.prix)
        console.log(this.filteredList)
    }
  }
  }
})
