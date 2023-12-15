
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePanierStore = defineStore('panier', () => {
      const panierContent = ref([])

      const getPanierContent = computed(() => panierContent.value)

      function updatePanier({ name, price, plateforme, id, tome, marque }) {
        const insertItem = {}
          insertItem.name = name;
          insertItem.price = price;
          insertItem.plateforme = plateforme;
          insertItem.id = id;
          insertItem.tome = tome; 
          insertItem.marque = marque; 
          panierContent.value.push(insertItem);
          console.log(panierContent)
      }

      function deleteItemPanierFromList(index) {
        
        if (index !== -1) {
          console.log(index)
          panierContent.value.splice(index, 1);
          console.log(panierContent)
        }
      }

      return { panierContent, getPanierContent, updatePanier, deleteItemPanierFromList }

    })
  
    