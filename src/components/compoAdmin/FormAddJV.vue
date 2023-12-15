<script setup>
import { ref, computed } from 'vue'
<<<<<<< HEAD
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
=======
import { useJeuxvVideoStore } from '../../stores/stock.js'

let img = ref(null)
let titre = ref(null)
let pegi = ref(null)
let prix = ref(null)
let style = ref(null)
let NintendoSwitch = ref(null)
let WiiU = ref(null)
let PS4 = ref(null)
let PS5 = ref(null)
let XboxOne = ref(null)
let XboxSeries = ref(null)

const storeJeuxVideo = useJeuxvVideoStore()

const formSubmit = () => {
  storeJeuxVideo.addJeuxVideoToList(jeuxVideoMapper.value)
}

const jeuxVideoMapper = computed(() => {
  let jeuxVideoModel = {}
  jeuxVideoModel.img = img.value
  jeuxVideoModel.titre = titre.value
  jeuxVideoModel.pegi = pegi.value
  jeuxVideoModel.prix = prix.value
  jeuxVideoModel.style = style.value

  jeuxVideoModel.plateforme = [
    NintendoSwitch.value && 'Nintendo Switch',
    WiiU.value && 'Wii U',
    PS4.value && 'PS4',
    PS5.value && 'PS5',
    XboxOne.value && 'Xbox One',
    XboxSeries.value && 'Xbox Series X/S'
  ].filter(Boolean)

  return jeuxVideoModel
>>>>>>> diego
})
</script>

<template>
  <form @submit.prevent="formSubmit">
<<<<<<< HEAD
    <h3>Ajouter un nouveau Joujou</h3>
=======
    <h3>Ajouter un nouveau Jeux Vidéo</h3>
>>>>>>> diego
    <div class="mb-3">
      <label for="img" class="form-label">Lien Image</label>
      <input type="text" class="form-control" name="img" id="img" v-model="img" />
    </div>
    <div class="mb-3">
      <label for="titre" class="form-label">titre</label>
      <input type="text" class="form-control" name="titre" id="titre" v-model="titre" />
    </div>
    <div class="mb-3">
<<<<<<< HEAD
      <label for="la_marque" class="form-label">Marque</label>
      <input type="text" class="form-control" name="la_marque" id="la_marque" v-model="la_marque" />
    </div>
    <div class="mb-3">
=======
>>>>>>> diego
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
<<<<<<< HEAD
    <div class="mb-3">
      <label for="platforme" class="form-label">platforme</label>
      <!-- <input type="checkbox"  name="Nintendo Switch" id="Nintendo Switch" v-model="Nintendo Switch" />
      <input type="checkbox"  name="Wii U" id="Wii U" v-model="Wii U" />
      <input type="checkbox"  name="PS4" id="PS4" v-model="PS4" />
      <input type="checkbox"  name="PS5" id="PS5" v-model="PS5" />
      <input type="checkbox"  name="Xbox One" id="Xbox One" v-model="Xbox One" />
      <input type="checkbox"  name="Xbox Series X/S" id="Xbox Series X/S" v-model="Xbox Series X/S" /> -->
    </div>
=======

    <fieldset>
      <legend>platforme</legend>
      <div class="mb-3 checkboxDiv">
        <div>
          <label for="Nintendo Switch" class="form-label">Nintendo Switch</label>
          <input
            type="checkbox"
            name="Nintendo Switch"
            id="Nintendo Switch"
            v-model="NintendoSwitch"
          />
        </div>
        <div>
          <label for="Wii U" class="form-label">Wii U</label>
          <input type="checkbox" name="Wii U" id="Wii U" v-model="WiiU" />
        </div>
        <div>
          <label for="PS4" class="form-label">PS4</label>
          <input type="checkbox" name="PS4" id="PS4" v-model="PS4" />
        </div>
        <div>
          <label for="PS5" class="form-label">PS5</label>
          <input type="checkbox" name="PS5" id="PS5" v-model="PS5" />
        </div>
        <div>
          <label for="Xbox One" class="form-label">Xbox One</label>
          <input type="checkbox" name="Xbox One" id="Xbox One" v-model="XboxOne" />
        </div>
        <div>
          <label for="Xbox Series X/S" class="form-label">Xbox Series X/S</label>
          <input type="checkbox" name="Xbox Series X/S" id="Xbox Series X/S" v-model="XboxSeries" />
        </div>
      </div>
    </fieldset>
>>>>>>> diego
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
form {
  width: 60%;
  margin: 5% 20%;
}
<<<<<<< HEAD
=======

.checkboxDiv{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
>>>>>>> diego
</style>
