
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
      }

      function deleteItemPanierFromList(id) {
        const index = panierContent.value.findIndex(item => item.id === id);
        if (index !== -1) {
          panierContent.value.splice(index, 1);
        }
      }

      return { panierContent, getPanierContent, updatePanier, deleteItemPanierFromList }

    })
  
    