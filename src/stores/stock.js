import joujouListe from '../json/stockjoujou.json'
import { defineStore } from 'pinia'


export const useJoujouStore = defineStore('joujou', {
    state: () => ({
      joujouListe: joujouListe,
      selectedMarque: "all"
      }),

  getters: {
    getJoujou: (state) => state.joujouListe,
    getSelectedMarque: (state) => state.selectedMarque,
    getFilteredList: (state) => {
      // associer le tableau original à une variable
      let filteredList = joujouListe
      
      // filtrer le tableau par marque
      if (state.selectedMarque != "all") {
        filteredList = filteredList.filter()
      }

      // organiser le trix par alphabetique ou par prix

      // retourner le tableau filtré
      return filteredList
    }
  },

  actions: {
    addJoujouToList(item) {
      this.joujouListe.push(item)
    },

    deleteJoujouFromList(id) {
      this.joujouListe.splice(id, 1)
    },
    updateSelectedMarque(selectedMarque) {
      // Mettez à jour la valeur du sélecteur dans le state
      console.log("old", this.selectedMarque);
      console.log(selectedMarque);
      this.selectedMarque = selectedMarque;
      console.log("new", this.selectedMarque);
  }
}})
