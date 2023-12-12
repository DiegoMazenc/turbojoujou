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
        updatePanier({ name, price, plateforme }) {
            const insertItem = []
          
           
              // Mise à jour de la référence de l'article dans le store
              insertItem.name = name;
          
              // Ajout de l'article au panier avec la taille et la quantité
              insertItem.price = price;
              insertItem.plateforme = plateforme;
          
              this.panierContent.push(insertItem);
           
          
            console.log("dans le store", name, price, plateforme);
          },
    }
  })