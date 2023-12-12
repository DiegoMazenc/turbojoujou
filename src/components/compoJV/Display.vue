<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useJeuxvVideoStore } from '../../stores/stock.js'

export default {
  name: 'Display',
  data() {
    return {
      id: null,
      consoles: null,
      colorConsoleBtn: null,
      consoleSelected: null
      
    }
  },
  methods: {
    ...mapActions(useJeuxvVideoStore, { deleteJeuxVideoFromListAction: 'deleteJeuxVideoFromList' }),

    deleteJeuxVideo(id) {
      const index = this.jeuxVideoList.findIndex((item) => item.id === id)
      console.log(index)
      this.deleteJeuxVideoFromListAction(index)
    },

    ajoutPanierJV(item) {
      this.$emit('ajoutPanierJV', item)
    },

    getConsoleSelect(plateform){
      this.consoleSelected = plateform

      return console.log( this.consoleSelected)

    },

    getColorClass(plateform) {
      // Retourne la classe appropriée en fonction de la plateforme
      if (plateform === "Nintendo Switch" || plateform === "Wii U") {
        return 'nintendo-color';
      } else if (plateform === "PlayStation 4" || plateform === "PlayStation 5") {
        return 'playstation-color';
      } else if (plateform === "Xbox One" || plateform === "Xbox Series X/S") {
        return 'xbox-color';
      }
      // Ajoutez une gestion par défaut si nécessaire
      return '';
    },

    

  },

  computed: {
    ...mapState(useJeuxvVideoStore, ['jeuxVideoList', 'getfilteredList','getSelectedConsole'])
  },
  emits: ['ajoutPanierJV']
}
</script>

<template>
  <div class="cards-template">
    <div v-for="item in getfilteredList" :key="item.id" class="card" style="width: 18rem">
      <img :src="item.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.titre }}</h5>
        <p class="card-text">{{ item.prix }}€</p>
        <p class="card-text">{{ item.style }}</p>

        <div class="consoleContain">
          <button v-for="(plateform, index) in item.plateforme" 
          :key="index" 
          :class="getColorClass(plateform)" 
          
          class="btnConsole btnConsoleUnselected"
          @click="getConsoleSelect(plateform)">
          {{ plateform }}
        </button>
        </div>
        <a href="#" class="btn btn-primary" @click="deleteJeuxVideo(item.id)">Supprimer</a>
        <a href="#" class="btn btn-primary" @click="ajoutPanierJV(item)">Ajouter au panier</a>
      </div>
    </div>
  </div>
</template>

<style>
.cards-template {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  margin: 5px;
}


.btnConsole{
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 10px;
  margin: 2px;
  border: none;
  color: white;

}

.btnConsoleUnselected{
  opacity: 0.8;
  transition: 0.2s;
}

.btnConsoleUnselected:hover{
  opacity: 1;
}
.btnConsoleSelected{
  opacity: 1;
}

.playstation-color {
  
  background-color: #4245ee;
}

.nintendo-color {
  background-color: #ee4242;
}

.xbox-color {
  background-color: #59d86e;
}

.consoleContain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px 0;
}
</style>
