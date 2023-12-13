<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useMangaStore } from '../../stores/stock.js'
import PanierArticles from '../../components/PanierArticles.vue'


export default {
  name: 'FilterItem',
  data() {
    return {
      la_marque: null,
      tabMarque: [],
      selectedMarque: 'all',
      selectedTitle: 'all',
      triAlpha: false,
      triPrix: false,
      mangaTitre: null, 
      tomeInfo: null, 
    }
  },
  components:{
    PanierArticles
  },
  methods: {
    ...mapActions(useMangaStore, { updateSelectedMarqueAction: 'updateSelectedMarque' }),
    exportSelectedMarque() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateSelectedMarqueAction(this.selectedMarque)
    },

    ...mapActions(useMangaStore, { updateTriAlphaAction: 'updateTriAlpha' }),
    exportTrieAlpha() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateTriAlphaAction(this.triAlpha)
    },

    ...mapActions(useMangaStore, { updateTriPrixAction: 'updateTriPrix' }),
    exportTriePrix() {
      // Appelez l'action du store pour mettre à jour la valeur dans le store
      this.updateTriPrixAction(this.triPrix)
    },

    ...mapActions(useMangaStore, { updateSelectedTitleAction: 'updateSelectedTitle' }),
    exportSelectedTitle() {
      this.updateSelectedTitleAction(this.selectedTitle)
    },

    ajoutPanierManga(item, tome) {
      this.$emit('ajoutPanierManga', { item: this.selectedTitle, tome: this.tomeInfo })
    }
  },
  computed: {
    ...mapState(useMangaStore, ['mangaList', 'getfilteredList']),
    uniqueMarques() {
      const uniqueMarquesSet = new Set()

      this.mangaList.forEach((manga) => {
        uniqueMarquesSet.add(manga.style)
      })

      return Array.from(uniqueMarquesSet)
    }
  }
}
</script>

<template>
  <div class="options-container">
    <button @click="exportTrieAlpha">Alphabétique</button>
    <h4>Style</h4>
    <div class="custom-select">
    <select
      class="card selectOption"
      style="width: 18rem"
      v-model="selectedMarque"
      @change="exportSelectedMarque"
    >
      <option value="all">All</option>
      <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">{{ item }}</option>
    </select>
</div>
    <h4>Titre</h4>
<div class="custom-select">
    <select class="card selectOption" style="width: 18rem" v-model="selectedTitle" @change="exportSelectedTitle">
      <option value="all">All</option>
      <option v-for="(manga, index) in getfilteredList" :key="index" :value="manga">
        {{ manga.titre }}
      </option>
    </select>
</div>
    

    <PanierArticles/>
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
