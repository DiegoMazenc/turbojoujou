import joujouListe from '../json/stockjoujou.json'
import listeJeuxVideo from '../json/stockjv.json'
import mangaList from '../json/stockmanga.json'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useJeuxvVideoStore = defineStore('jeuxvideo', () => {

  const jeuxVideoList = ref(listeJeuxVideo)
  const selectedGenre = ref('all')
  const selectedConsole = ref('all')
  const triAlpha = ref(false)
  const triPrix = ref(false)

  const getJeuxVideo = computed(() => {
    return jeuxVideoList.value
  })

  const getSelectedGenre = computed(() => {
    return selectedGenre.value
  })

  const getSelectedConsole = computed(() => {
    return selectedConsole.value
  })

  const getTriAlpha = computed(() => {
    return triAlpha
  })

  const getTriPrix = computed(() => {
    return triPrix
  })

  const getfilteredList = computed(() => {
    let filteredList = jeuxVideoList.value

    if (selectedGenre.value !== 'all') {
      filteredList = filteredList.filter((item) => item.style === state.selectedGenre)
    }

    if (selectedConsole.value !== 'all') {
      filteredList = filteredList.filter((item) => item.plateforme.includes(state.selectedConsole))
    }

    if (triAlpha.value == true) {
      filteredList = filteredList.sort((a, b) => a.titre.localeCompare(b.titre))
      console.log(filteredList)
    }

    if (triPrix.value == true) {
      filteredList = filteredList.sort((a, b) => a.prix - b.prix)
      console.log(filteredList)
    }
    return filteredList
  })

  function addJeuxVideoToList(item) {
    jeuxVideoList.push(item)
  }

  function deleteJeuxVideoFromList(id) {
    jeuxVideoList.splice(id, 1)
  }
  function updateSelectedGenre(selectedGenre) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedGenre = selectedGenre
  }

  function updateSelectedPlatforme(selectedConsole) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedConsole = selectedConsole
  }

  function updateTriAlpha() {
    // console.log('trialpha marche')
    triPrix = false
    triAlpha = true
    // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
  }

  function updateTriPrix() {
    triAlpha = false
    triPrix = true
    // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
  }
})

// Section Joujou

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
        filteredList = filteredList.filter((item) => item.la_marque === state.selectedMarque)
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
    mangaList: mangaList,
    selectedMarque: 'all',
    selectedTitle: 'all',
    triAlpha: false,
    triPrix: false
  }),

  getters: {
    getManga: (state) => state.mangaList,
    getMangaTitre: (state) => state.mangaList.titre,
    getselectedTitle: (state) => state.selectedTitle,
    getSelectedMarque: (state) => state.selectedMarque,
    getTriAlpha: (state) => state.triAlpha,
    getTriPrix: (state) => state.triPrix,

    getfilteredList: (state) => {
      let filteredList = state.mangaList

      if (state.selectedMarque !== 'all') {
        filteredList = filteredList.filter((item) => item.style === state.selectedMarque)
      }

      if (state.selectedTitle !== 'all') {
        filteredList = filteredList.filter((item) => item.titre === state.selectedTitle.titre)
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

    updateSelectedTitle(selectedTitle) {
      // Mettez à jour la valeur du sélecteur dans le state
      this.selectedTitle = selectedTitle
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
