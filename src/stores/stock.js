import stock from '../json/stockjoujou.json'; 
import { defineStore } from 'pinia'; 

export const useJoujouStore = defineStore('joujou', {
   state: () => ({
    joujouListe: []
   }),

   getters: {
    getJoujou: (state) => state.joujouListe
   }, 

   actions: {
    addJoujouToList(item) {
        this.joujouListe.push(item); 
    }, 

    deleteJoujouFromList(id) {
        this.joujouListe.splice(id,1); 
    }
   }
  })
  