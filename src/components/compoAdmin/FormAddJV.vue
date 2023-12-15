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
      <label for="titre" class="form-label">titre</label>
      <input type="text" class="form-control" name="titre" id="titre" v-model="titre" />
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
      <label for="pegi" class="form-label">pegi</label>
      <input type="text" class="form-control" name="pegi" id="pegi" v-model="pegi" />
    </div>
    <div class="mb-3">
      <label for="style" class="form-label">style</label>
      <input type="text" class="form-control" name="style" id="style" v-model="style" />
    </div>
    <div class="mb-3">
      <label for="platforme" class="form-label">platforme</label>
      <!-- <input type="checkbox"  name="Nintendo Switch" id="Nintendo Switch" v-model="Nintendo Switch" />
      <input type="checkbox"  name="Wii U" id="Wii U" v-model="Wii U" />
      <input type="checkbox"  name="PS4" id="PS4" v-model="PS4" />
      <input type="checkbox"  name="PS5" id="PS5" v-model="PS5" />
      <input type="checkbox"  name="Xbox One" id="Xbox One" v-model="Xbox One" />
      <input type="checkbox"  name="Xbox Series X/S" id="Xbox Series X/S" v-model="Xbox Series X/S" /> -->
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
form {
  width: 60%;
  margin: 5% 20%;
}
</style>
