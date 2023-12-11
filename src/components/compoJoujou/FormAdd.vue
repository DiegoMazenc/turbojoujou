<script>
import { mapActions } from 'pinia'
import { useJoujouStore } from '../../stores/stock.js'

export default {
  name: 'FormAdd',
  data() {
    return {
      nom: null,
      la_marque: null,
      prix: null,
      taille: null
    }
  },
  methods: {
    ...mapActions(useJoujouStore, { addJoujouToListAction: 'addJoujouToList' }),
    formSubmit() {
        this.addJoujouToListAction(this.joujouMapper)
    }
  },
  computed: {
    
    joujouMapper() {
      let joujouModel = {}
      joujouModel.nom = this.nom
      joujouModel.la_marque = this.la_marque
      joujouModel.prix = this.prix
      joujouModel.taille = this.taille

      console.log(joujouModel)
      return joujouModel
    }

  }
}
</script>

<template>
  <form @submit.prevent="formSubmit">
    <h3>Ajouter un nouveau Joujou</h3>
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
  width: 60%;
  margin: 5% 20%;
}
</style>
