<script setup>
import { useJeuxvVideoStore } from '@/stores/stock'
import { computed } from 'vue'

const storeJv = useJeuxvVideoStore()

const jvListe = computed(() => {
    return storeJv.getfilteredList
})

function supprJv(item) {
    storeJv.deleteJeuxVideoFromList(item)
}


</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col" class="text-center">Plateformes</th>
                <th scope="col">Stock</th>
                <th scope="col">Prix</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in jvListe" :key="index">
                <th scope="row" class="title">{{ item.titre }}</th>
                <td class="consoles">
                <td v-for="(console, index) in item.plateforme" :key="index">
                <div class="consoles">{{ console }}
                 <button v-if="item.stock > 0" class="btn btn-danger" @click="item.stock--">Supprimer</button></div>
                </td>
                </td>
                <td>{{ item.stock }}</td>
                <td>{{ item.prix }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>

.consoles{

    display: flex;
    flex-direction: column;
    align-items: center;
    width : 100%
}

.title{
    width : 25%
}
</style>
