import listeJoujou from '../json/stockjoujou.json'
import listeJeuxVideo from '../json/stockjv.json'
import listManga from '../json/stockmanga.json'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Section Jeux Vidéos
export const useJeuxvVideoStore = defineStore('jeuxvideo', () => {
  const jeuxVideoList = ref(listeJeuxVideo)
  const selectedGenre = ref('all')
  const selectedConsole = ref('all')
  let triAlpha = ref(false)
  let triPrix = ref(false)

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
    return triAlpha.value
  })

  const getTriPrix = computed(() => {
    return triPrix.value
  })

  const getfilteredList = computed(() => {
    let filteredList = jeuxVideoList.value

    if (selectedGenre.value !== 'all') {
      filteredList = filteredList.filter((item) => item.style === selectedGenre.value)
    }

    if (selectedConsole.value !== 'all') {
      filteredList = filteredList.filter((item) => item.plateforme.includes(selectedConsole.value))
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
    jeuxVideoList.value.push(item)
  }

  function deleteJeuxVideoFromList(id) {
    jeuxVideoList.value.splice(id, 1)
  }
  function updateSelectedGenre(newGenre) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedGenre.value = newGenre
  }

  function updateSelectedPlatforme(newConsole) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedConsole.value = newConsole
  }

  function updateTriAlpha() {
    // console.log('trialpha marche')
    triPrix.value = false
    triAlpha.value = true
    // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
  }

  function updateTriPrix() {
    triAlpha.value = false
    triPrix.value = true
    // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
  }

  return {
    jeuxVideoList,
    selectedGenre,
    selectedConsole,
    triAlpha,
    triPrix,
    getJeuxVideo,
    getSelectedGenre,
    getSelectedConsole,
    getTriAlpha,
    getTriPrix,
    getfilteredList,
    deleteJeuxVideoFromList,
    addJeuxVideoToList,
    updateSelectedGenre,
    updateSelectedPlatforme,
    updateTriAlpha,
    updateTriPrix
  }
})

// Section Joujou

export const useJoujouStore = defineStore('joujou', () => {
  const joujouListe = ref(listeJoujou)
  const selectedMarque = ref('all')
  let triAlpha = ref(false)
  let triPrix = ref(false)

  const getJoujou = computed(() => {
    return joujouListe.value
  })

  const getSelectedMarque = computed(() => {
    return selectedMarque.value
  })

  const uniqueMarques = computed(() => {
    const uniqueMarquesSet = new Set();
    joujouListe.value.forEach((joujou) => {
      uniqueMarquesSet.add(joujou.la_marque);
    });
    return Array.from(uniqueMarquesSet);
  });

  const getTriAlpha = computed(() => {
    triAlpha.value
  })

  const getTriPrix = computed(() => {
    triPrix.value
  })

  const getfilteredList = computed(() => {
    let filteredList = joujouListe.value

    if (selectedMarque.value !== 'all') {
      filteredList = filteredList.filter((item) => item.la_marque === selectedMarque.value)
    }

    if (triAlpha.value == true) {
      filteredList = filteredList.sort((a, b) => a.nom.localeCompare(b.nom))
      console.log(filteredList)
    }

    if (triPrix.value == true) {
      filteredList = filteredList.sort((a, b) => a.prix - b.prix)
      console.log(filteredList)
    }
    return filteredList
  })

  function addJoujouToList(item) {
    joujouListe.value.push(item)
  }

  function deleteJoujouFromList(id) {
    joujouListe.value.splice(id, 1)
  }

  function updateSelectedMarque(newMarque) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedMarque.value = newMarque
  }

  function updateTriAlpha() {
    // console.log('trialpha marche')
    triPrix.value = false
    triAlpha.value = true
    // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
  }

  function updateTriPrix() {
    triAlpha.value = false
    triPrix.value = true
    // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha)
  }

  return {
    joujouListe,
    selectedMarque,
    triAlpha,
    triPrix,
    getJoujou,
    getSelectedMarque,
    getTriAlpha,
    getTriPrix,
    getfilteredList,
    addJoujouToList,
    deleteJoujouFromList,
    updateSelectedMarque,
    updateTriAlpha,
    updateTriPrix,
    uniqueMarques
  }
})

// Section Manga
export const useMangaStore = defineStore('manga', () => {
  const mangaList = ref(listManga)
  const selectedMarque = ref('all')
  const selectedTitle = ref('all')
  const triAlpha = ref(false)
  const triPrix = ref(false)

  const getManga = computed(() => {
    return mangaList.value
  })
  const getMangaTitre = computed(() => {
    return mangaList.value.titre
  })
  const getselectedTitle = computed(() => {
    return selectedTitle.value
  })
  const getSelectedMarque = computed(() => {
    return selectedMarque.value
  })
  const getTriAlpha = computed(() => {
    return triAlpha.value
  })
  const getTriPrix = computed(() => {
    return triPrix.value
  })

  const uniqueTitre = computed(()=>{
    const uniqueMarquesSet = new Set()
      mangaList.value.forEach((manga)=>{
      uniqueMarquesSet.add(manga.style)
    
    })
    return Array.from(uniqueMarquesSet)
  })

  const getfilteredList = computed(() => {
    let filteredList = mangaList.value

    if (selectedMarque.value !== 'all') {
      filteredList = filteredList.filter((item) => item.style === selectedMarque.value)
    }

    if (selectedTitle.value !== 'all') {
      filteredList = filteredList.filter((item) => item.titre === selectedTitle.value.titre)
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

  function addMangaToList(item) {
    mangaList.value.push(item)
  }

  function deleteMangaFromList(id) {
    mangaList.value.splice(id, 1)
  }
  function updateSelectedMarque(newMarque) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedMarque.value = newMarque
  }

  function updateSelectedTitle(newTitle) {
    // Mettez à jour la valeur du sélecteur dans le state
    selectedTitle.value = newTitle
  }

  function updateTriAlpha() {
    // console.log('trialpha marche')
    triPrix.value = false
    triAlpha.value = true
    // console.log('TRIPRI', this.triPrix, "trixalpha", this.triAlpha)
  }

  function updateTriPrix() {
    triAlpha.value = false
    triPrix.value = true
    // console.log('TRIPRI marche', this.triPrix, "alpha", this.triAlpha
  }

  return {
    mangaList,
    selectedMarque,
    selectedTitle,
    triAlpha,
    triPrix,
    getManga,
    getMangaTitre,
    getselectedTitle,
    getSelectedMarque,
    getTriAlpha,
    getTriPrix,
    getfilteredList,
    addMangaToList,
    deleteMangaFromList,
    updateSelectedMarque,
    updateSelectedTitle,
    updateTriAlpha,
    updateTriPrix, 
    uniqueTitre
  }
})
