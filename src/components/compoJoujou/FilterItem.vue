<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import {ref} from vue
import { useJoujouStore } from '../../stores/stock.js'
import PanierArticles from '../../components/PanierArticles.vue'

let selectedMarque = ref('all')
let triAlpha = ref(true)
let triPrix = ref(true)
let tabMarque =  ref([])
let la_marque =ref( null)
const storeJoujou = useJoujouStore()

const exportSelectedMarque = () => {
  storeJoujou.updateSelectedMarque(selectedMarque)
}

const exportTrieAlpha = () => {
  storeJoujou.updateTriAlpha(triAlpha)
}

const exportTriePrix = () => {
  storeJoujou.updateTriPrix(triPrix)
}



export default {
  components: {
    PanierArticles
  },

  methods: {

    
  },
  computed: {
    ...mapState(useJoujouStore, ['joujouListe']),
    uniqueMarques() {
      const uniqueMarquesSet = new Set()

      this.joujouListe.forEach((joujou) => {
        uniqueMarquesSet.add(joujou.la_marque)
      })

      return Array.from(uniqueMarquesSet)
    }
  }
}
</script>

<template>
  <div>
    <div class="options-container">
      <button @click="exportTrieAlpha">Alphabétique</button>
      <button @click="exportTriePrix">Prix</button>
      <div class="custom-select">
        <select
          class="card selectOption"
          style="width: 18rem"
          v-model="selectedMarque"
          @change="exportSelectedMarque"
        >
          <option value="all">All</option>
          <option v-for="(item, index) in uniqueMarques" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>

    <PanierArticles />
  </div>
</template>

<style>
.options-container {
  display: flex;
  flex-direction: column;
}

button,
select {
  margin-bottom: 10px;
}

.custom-select {
  position: relative;
  width: 18rem;
}

.custom-select select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  appearance: none; /* Style par défaut de la flèche de la liste déroulante */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none; /* Supprime la bordure focus par défaut sur certains navigateurs */
}

.custom-select::after {
  content: '\25BC'; /* Flèche vers le bas */
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
}

.selectOption {
  width: 100%;
  border: none;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  border-radius: 0;
}
</style>
