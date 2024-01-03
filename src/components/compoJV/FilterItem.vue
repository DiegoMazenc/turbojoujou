<script setup>
import { ref, computed } from 'vue'
import { useJeuxvVideoStore } from '../../stores/stock.js'
import PanierArticles from '../../components/PanierArticles.vue'

const storeJeuxVideo = useJeuxvVideoStore()

let selectedGenre = ref('all')
let selectedConsole = ref('all')
let triAlpha = ref(false)
let triPrix = ref(false)

const exportSelectedGenre = () => {
  storeJeuxVideo.updateSelectedGenre(selectedGenre.value)
}

const exportSelectedPlateforme = () => {
  storeJeuxVideo.updateSelectedPlatforme(selectedConsole.value)
}

const exportTrieAlpha = () => {
  storeJeuxVideo.updateTriAlpha(triAlpha)
}

const exportTriePrix = () => {
  storeJeuxVideo.updateTriPrix(triPrix)
}

const uniqueGenres = computed(() => {
  const uniqueGenresSet = new Set()

  storeJeuxVideo.jeuxVideoList.forEach((jeuxvideo) => {
    uniqueGenresSet.add(jeuxvideo.style)
  })

  return Array.from(uniqueGenresSet)
})

const uniqueConsole = computed(() => {
  const uniqueConsolesSet = new Set()

  storeJeuxVideo.jeuxVideoList.forEach((jeuxvideo) => {
    jeuxvideo.plateforme.forEach((plateforme) => {
      uniqueConsolesSet.add(plateforme)
    })
  })

  return Array.from(uniqueConsolesSet)
})

const filteredConsoles = computed(() => {
  console.log('Selected Console:', selectedConsole.value);
  if (selectedGenre.value === 'all') {
    return uniqueConsole.value
  } else {
    const filteredConsolesSet = new Set()
    storeJeuxVideo.jeuxVideoList
      .filter((item) => item.style === selectedGenre.value)
      .forEach((jeuxvideo) => {
        jeuxvideo.plateforme.forEach((plateforme) => {
          filteredConsolesSet.add(plateforme)
        })
      })
    return Array.from(filteredConsolesSet)
  }
})

const filteredGenres = computed(() => {
  console.log('Selected Genre:', selectedGenre.value);
  if (selectedConsole.value === 'all') {
    return uniqueGenres.value
  } else {
    const filteredGenresSet = new Set()
    storeJeuxVideo.jeuxVideoList
      .filter((item) => item.plateforme.includes(selectedConsole.value))
      .forEach((jeuxvideo) => {
        filteredGenresSet.add(jeuxvideo.style)
      })
    return Array.from(filteredGenresSet)
  }
})


</script>

<template>
  <div>
    <div class="options-container">
      <p class="modal-title text-primary-emphasis fs-6 text-center">Trier par ordre : </p>
      <button @click="exportTrieAlpha" class="btn btn-outline-secondary">Alphabétique</button>
      <button @click="exportTriePrix" class="btn btn-outline-secondary">Prix</button>
      <p class="modal-title text-primary-emphasis fs-6 text-center">Genres : </p>
      <div class="custom-select">
        <select class="card selectOption" v-model="selectedGenre" @change="exportSelectedGenre">
          <option value="all">All</option>
          <option v-for="(item, index) in filteredGenres" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <p class="modal-title text-primary-emphasis fs-6 text-center">Plateformes : </p>
      <div class="custom-select">
        <select
          class="card selectOption"
          v-model="selectedConsole"
          @change="exportSelectedPlateforme"
        >
          <option value="all">All</option>
          <option v-for="(item, index) in filteredConsoles" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <PanierArticles />
  </div>
</template>

<style>
.options-container {
  display: flex;
  flex-direction: column;
}

button,
select {
  margin-bottom: 10px;
}

.custom-select {
  position: relative;
  width: 18rem;
}

.custom-select select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none; /* Style par défaut de la flèche de la liste déroulante */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none; /* Supprime la bordure focus par défaut sur certains navigateurs */
}

.custom-select::after {
  content: '\25BC'; /* Flèche vers le bas */
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
}

.selectOption {
  width: 100%;
  border: none;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  border-radius: 0;
}
</style>
