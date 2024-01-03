<script setup>
import { useMangaStore } from '@/stores/stock'
import { computed } from 'vue'

const storeManga = useMangaStore()

const mangaListe = computed(() => {
  return storeManga.getfilteredList
})

// function supprManga(item) {
//     storeManga.deleteJeuxVideoFromList(item)
// }
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Titre</th>
        <th scope="col">Style</th>
        <th scope="col">Tome</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in mangaListe" :key="index">
        <th scope="row" class="title">{{ item.titre }}</th>
        <td>{{ item.style }}</td>
        <td class="consoles">
          <div v-for="(tome, index) in item.tomes" :key="index" class="d-flex gap-5">
            <div class="consoles">N°{{ tome.numero }}</div>
            <div class="consoles">Stock : {{ tome.stock }}</div>
            <button v-if="tome.stock > 0" class="btn btn-danger" @click="tome.stock--">
              Supprimer
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
