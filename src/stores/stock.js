import joujouListe from '../json/stockjoujou.json'
import jeuxVideoList from '../json/stockjv.json'
import mangaList from '../json/stockmanga.json'
import { defineStore } from 'pinia'

export const useJeuxvVideoStore = defineStore('jeuxvideo', {
  state: () => ({
    jeuxVideoList: jeuxVideoList,
    selectedGenre: 'all',
    selectedConsole: 'all',
    triAlpha: false,
    triPrix: false
  }),

  
  getters: {
    getJeuxVideo: (state) => state.jeuxVideoList,
    getSelectedGenre: (state) => state.selectedGenre,
    getSelectedConsole: (state) => state.selectedConsole,
    getTriAlpha: (state) => state.triAlpha,
    getTriPrix: (state) => state.triPrix,

    getfilteredList: (state) => {
      let filteredList = state.jeuxVideoList

      if (state.selectedGenre !== 'all') {
        filteredList = filteredList.filter(
          (item) => item.style === state.selectedGenre
        )
      }

      if (state.selectedConsole !== 'all') {
        filteredList = filteredList.filter(
          (item) => item.plateforme.includes(state.selectedConsole)
        );
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
    updateSelectedGenre(selectedGenre) {
      // Mettez à jour la valeur du sélecteur dans le state
      this.selectedGenre = selectedGenre
    },

    updateSelectedPlatforme(selectedConsole) {
      // Mettez à jour la valeur du sélecteur dans le state
      this.selectedConsole = selectedConsole
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

// Section manga

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
          (item) => item.style === state.selectedMarque
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

export const useMangaStore = defineStore('manga', {
  state: () => ({
    mangaList : mangaList,
    selectedMarque: 'all',
    triAlpha: false,
    triPrix: false
  }),

  
  getters: {
    getManga: (state) => state.mangaList,
    getSelectedMarque: (state) => state.selectedMarque,
    getTriAlpha: (state) => state.triAlpha,
    getTriPrix: (state) => state.triPrix,

    getfilteredList: (state) => {
      let filteredList = state.mangaList

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
    addMangaToList(item) {
      this.mangaList.push(item)
    },

    deleteMangaFromList(id) {
      this.mangaList.splice(id, 1)
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