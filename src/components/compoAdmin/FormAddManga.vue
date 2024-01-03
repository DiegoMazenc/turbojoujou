<script setup>
import { ref, computed } from 'vue'
import { useMangaStore } from '../../stores/stock.js'

let titre = ref(null)
let auteur = ref(null)
let éditeur = ref(null)
let année_de_parution = ref(null)
let style = ref(null)
let img = ref(null)
let t1Stock = ref(null)
let t1Prix = ref(null)
let t2Stock = ref(null)
let t2Prix = ref(null)
let t3Stock = ref(null)
let t3Prix = ref(null)

const storeManga = useMangaStore()

const formSubmit = () => {
  storeManga.addMangaToList(mangaMapper.value)
}

const mangaMapper = computed(() => {
  let mangaModel = {}

  mangaModel.titre = titre.value
  mangaModel.auteur = auteur.value
  mangaModel.éditeur = éditeur.value
  mangaModel.année_de_parution = année_de_parution.value
  mangaModel.style = style.value
  mangaModel.img = img.value

  mangaModel.tomes = [
    {
      numero: 1,
      stock: t1Stock.value,
      prix: t1Prix.value
    },
    {
      numero: 2,
      stock: t2Stock.value,
      prix: t2Prix.value
    },
    {
      numero: 3,
      stock: t3Stock.value,
      prix: t3Prix.value
    }
  ].filter(Boolean)

  return mangaModel
})
</script>

<template>
  <form @submit.prevent="formSubmit">
    <h3>Ajouter un nouveau Manga</h3>
    <div class="mb-3">
      <label for="titre" class="form-label">titre</label>
      <input type="text" class="form-control" name="titre" id="titre" v-model="titre" />
    </div>
    <div class="mb-3">
      <label for="auteur" class="form-label">auteur</label>
      <input type="text" class="form-control" name="auteur" id="auteur" v-model="auteur" />
    </div>
    <div class="mb-3">
      <label for="éditeur" class="form-label">éditeur</label>
      <input type="text" class="form-control" name="éditeur" id="éditeur" v-model="éditeur" />
    </div>
    <div class="mb-3">
      <label for="année_de_parution" class="form-label">année_de_parution</label>
      <input
        type="text"
        class="form-control"
        name="année_de_parution"
        id="année_de_parution"
        v-model="année_de_parution"
      />
    </div>
    <div class="mb-3">
      <label for="style" class="form-label">style</label>
      <input type="text" class="form-control" name="style" id="style" v-model="style" />
    </div>
    <div class="mb-3">
      <label for="img" class="form-label">img</label>
      <input type="text" class="form-control" name="img" id="img" v-model="img" />
    </div>
    <div class="stockPrixContain">
      <div class="stockPrix">
        <p>Tome 1</p>
        <div class="mb-3 blocInput">
          <label for="t1Stock" class="form-label">Stock</label>
          <input
            type="number"
            class="form-control inputVal"
            name="t1Stock"
            id="t1Stock"
            v-model="t1Stock"
          />
        </div>
        <div class="mb-3 blocInput">
          <label for="t1Prix" class="form-label">Prix (€)</label>
          <input
            type="text"
            class="form-control inputVal"
            name="t1Prix"
            id="t1Prix"
            v-model="t1Prix"
          />
        </div>
      </div>
      <div class="stockPrix">
        <p>Tome 2</p>
        <div class="mb-3 blocInput">
          <label for="t2Stock" class="form-label">Stock</label>
          <input
            type="number"
            class="form-control inputVal"
            name="t2Stock"
            id="t2Stock"
            v-model="t2Stock"
          />
        </div>
        <div class="mb-3 blocInput">
          <label for="t2Prix" class="form-label">Prix (€)</label>
          <input
            type="text"
            class="form-control inputVal"
            name="t2Prix"
            id="t2Prix"
            v-model="t2Prix"
          />
        </div>
      </div>
      <div class="stockPrix">
        <p>Tome 3</p>
        <div class="mb-3 blocInput">
          <label for="t3Stock" class="form-label">Stock</label>
          <input
            type="number"
            class="form-control inputVal"
            name="t3Stock"
            id="t3Stock"
            v-model="t3Stock"
          />
        </div>
        <div class="mb-3 blocInput">
          <label for="t3Prix" class="form-label">Prix (€)</label>
          <input
            type="text"
            class="form-control inputVal"
            name="t3Prix"
            id="t3Prix"
            v-model="t3Prix"
          />
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
form {
  width: 80%;
  margin: 5% 10%;
}

.stockPrixContain {
  display: flex;
  justify-content: space-between;
}

.stockPrixContain p {
  text-align: center;
}

.blocInput {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.stockPrix {
  margin: 5px;
}

.inputVal {
  margin: 0 5px 0 20px;
  width: 65%;
}
</style>
