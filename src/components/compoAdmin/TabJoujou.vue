<script setup>
import { useJoujouStore } from '@/stores/stock'
import { computed } from 'vue'

const storeJoujou = useJoujouStore()

const joujouListe = computed(() => {
  return storeJoujou.getfilteredList
})

function supprJoujou(item) {
  storeJoujou.deleteJoujouFromList(item)
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Marque</th>
        <th scope="col">Stock</th>
        <th scope="col">Prix</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in joujouListe" :key="index">
        <th scope="row">{{ item.nom }}</th>
        <td>{{ item.la_marque }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.prix }}</td>
        <td><button class="btn btn-danger" @click="supprJoujou(item)">Supprimer</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
