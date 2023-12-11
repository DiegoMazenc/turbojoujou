import joujouListe from '../json/stockjoujou.json'
import jeuxVideoList from '../json/stockjv.json'
import { defineStore } from 'pinia'

export const useJeuxvVideoStore = defineStore('jeuxvideo', {
  state: () => ({
    jeuxVideoList: jeuxVideoList,
    selectedMarque: 'all',
    triAlpha: false,
    triPrix: false
  }),

  
  getters: {
    getJeuxVideo: (state) => state.jeuxVideoList,
    getSelectedMarque: (state) => state.selectedMarque,
    getTriAlpha: (state) => state.triAlpha,
    getTriPrix: (state) => state.triPrix,

    getfilteredList: (state) => {
      let filteredList = state.jeuxVideoList

      if (state.selectedMarque !== 'all') {
        filteredList = filteredList.filter(
          (item) => item.style === state.selectedMarque
        )
      }

      if (state.triAlpha == true) {
       filteredList = filteredList.sort((a, b) => a.titre.localeCompare(b.titre))
        console.log(filteredList)
      }

      if (state.triPrix == true) {
       filteredList = filteredList.sort((a, b) => a.prix - b.prix)
        console.log(filteredList)
      }
      return filteredList
    }
  },

  actions: {
    addJeuxVideoToList(item) {
      this.jeuxVideoList.push(item)
    },

    deleteJeuxVideoFromList(id) {
      this.jeuxVideoList.splice(id, 1)
    },
    updateSelectedMarque(selectedMarque) {
      // Mettez à jour la valeur du sélecteur dans le state
      this.selectedMarque = selectedMarque
    },

    updateTriAlpha() {
      // console.log('trialpha marche')
      this.triPrix = false
      this.triAlpha = true
      // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
     
    },

    updateTriPrix() {
      this.triAlpha = false
      this.triPrix = true
      // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
    }
  }
})

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

    getfilteredList: (state) => {
      let filteredList = state.joujouListe

      if (state.selectedMarque !== 'all') {
        filteredList = filteredList.filter(
          (item) => item.la_marque === state.selectedMarque
        )
      }

      if (state.triAlpha == true) {
       filteredList = filteredList.sort((a, b) => a.nom.localeCompare(b.nom))
        console.log(filteredList)
      }

      if (state.triPrix == true) {
       filteredList = filteredList.sort((a, b) => a.prix - b.prix)
        console.log(filteredList)
      }
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
      this.selectedMarque = selectedMarque
    },

    updateTriAlpha() {
      // console.log('trialpha marche')
      this.triPrix = false
      this.triAlpha = true
      // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
     
    },

    updateTriPrix() {
      this.triAlpha = false
      this.triPrix = true
      // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
    }
  }
})
