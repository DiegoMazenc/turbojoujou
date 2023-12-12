<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useMangaStore } from '../../stores/stock.js'

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
      mangaTitre: null
    }
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
      console.log(this.selectedTitle)
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
  <div>
    <button @click="exportTrieAlpha">Alphabétique</button>
    <h4>Style</h4>
    <select
      class="card"
      style="width: 18rem"
      v-model="selectedMarque"
      @change="exportSelectedMarque"
    >
      <option value="all">All</option>
      <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">{{ item }}</option>
    </select>
    <h4>Titre</h4>
    <select class="card" style="width: 18rem" v-model="selectedTitle" @change="exportSelectedTitle">
      <option value="all">All</option>
      <option v-for="(item, index) in getfilteredList" :key="index" :value="item">
        {{ item.titre }}
      </option>
    </select>
    <div v-if="selectedTitle != 'all'">
      <h4>Tome</h4>
      <select class="card" style="width: 18rem" v-if="selectedTitle">
        <option value="all">All</option>
        <option v-for="tome in selectedTitle.tomes">
          N°{{ tome.numero }} - {{ tome.prix }}€
        </option>
      </select>
    </div>
  </div>
</template>

<style></style>
