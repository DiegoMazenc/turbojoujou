<script setup>
import { ref, computed } from 'vue'
import { useJoujouStore } from '../../stores/stock.js'

let img = ref(null)
let nom = ref(null)
let la_marque = ref(null)
let prix = ref(null)
let taille = ref(null)

const storeJoujou = useJoujouStore()

const formSubmit = () => {
  console.log(joujouMapper.value)
  storeJoujou.addJoujouToList(joujouMapper.value)
}

const joujouMapper = computed(() => {
  let joujouModel = {}
  joujouModel.img = img.value
  joujouModel.nom = nom.value
  joujouModel.la_marque = la_marque.value
  joujouModel.prix = prix.value
  joujouModel.taille = taille.value

  return joujouModel
})
</script>

<template>
  <form @submit.prevent="formSubmit">
    <h3>Ajouter un nouveau Joujou</h3>
    <div class="mb-3">
      <label for="img" class="form-label">Lien Image</label>
      <input type="text" class="form-control" name="img" id="img" v-model="img" />
    </div>
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" name="nom" id="nom" v-model="nom" />
    </div>
    <div class="mb-3">
      <label for="la_marque" class="form-label">Marque</label>
      <input type="text" class="form-control" name="la_marque" id="la_marque" v-model="la_marque" />
    </div>
    <div class="mb-3">
      <label for="prix" class="form-label">Prix</label>
      <input type="text" class="form-control" name="prix" id="prix" v-model="prix" />
    </div>
    <div class="mb-3">
      <label for="taille" class="form-label">Taille</label>
      <input type="text" class="form-control" name="taille" id="taille" v-model="taille" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
form {
  width: 80%;
  margin: 5% 10%;
}
</style>
