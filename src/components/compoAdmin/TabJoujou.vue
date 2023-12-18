<script setup>
import { useJoujouStore } from '@/stores/stock'
import { ref } from 'vue';

const storeJoujou = useJoujouStore; 


</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Marque</th>
        <th scope="col">Stock</th>
        <th scope="col">Prix</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idex) in storeJoujou" :key='index'>
        <th scope="row">{{ item.nom }}</th>
        <td>{{ item.la_marque }}</td>
        <td>{{ item.stock }}</td>
        <td>{{ item.prix }}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
