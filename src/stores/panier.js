// import joujouListe from '../json/stockjoujou.json'
// import jeuxVideoList from '../json/stockjv.json'
// import mangaList from '../json/stockmanga.json'
import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
    state: () => ({
      panierContent: []
    }),
  
    getters: {
        getPanierContent: (state) => state.panierContent,
  
    },
  
    actions: {
        updatePanier({ name, price, plateforme, id, tome, marque }) {
            const insertItem = {}
          
           
              // Mise à jour de la référence de l'article dans le store
              insertItem.name = name;
          
              // Ajout de l'article au panier avec la taille et la quantité
              insertItem.price = price;
              insertItem.plateforme = plateforme;
              insertItem.id = id;
              insertItem.tome = tome; 
              insertItem.marque = marque; 
          
              this.panierContent.push(insertItem);
           
          },

          deleteItemPanierFromList(id) {
            const index = this.panierContent.findIndex(item => item.id === id);
        
            if (index !== -1) {
              this.panierContent.splice(index, 1);
            }
          },
    }
  })