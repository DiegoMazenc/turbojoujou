<script>
import { usePanierStore } from '../stores/panier.js'
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
export default {
  name: 'PanierArticles',
  data() {
    return {
      totalPanier: 0.00
    }
  },
  methods: {
    ...mapActions(usePanierStore, { deleteItemPanierFromListAction: 'deleteItemPanierFromList' }),
    deleteItemPanier(index) {
      this.deleteItemPanierFromListAction(index)
      this.CounterPrice();
    },
    CounterPrice() {
      this.totalPanier = 0.00;

      this.getPanierContent.forEach(item => {
        this.totalPanier += item.price;
      });
      this.totalPanier = parseFloat(this.totalPanier.toFixed(2));

    }
  },

  computed: {
    ...mapState(usePanierStore, ['getPanierContent']),
    
  },
  created() {
    this.CounterPrice();
  },
  watch: {
  getPanierContent: {
    handler: 'CounterPrice',
    deep: true,
  },
},
}
</script>

<template>
  <div class="panierContaint">
    <hr />
  <h4>Mon Panier</h4>

  <TransitionGroup name="fade">
  <div v-for="(item, index) in getPanierContent" :key="item.id" class="itemPanier">
    <div>
      <p>{{ item.name }}</p>
      <div class="sousInfosPanier">
        <p v-if="item.plateforme">{{ item.plateforme }}</p>
        <p v-if="item.tome">Tome n°{{ item.tome }}</p>
        <p v-if="item.marque">{{ item.marque }}</p>
        <p>{{ item.price }}€</p>
      </div>
      <div class="hoverSup">
        <button @click="deleteItemPanier(index)" class="btnDelete">🗑️</button>
      </div>
    </div>
  </div>
</TransitionGroup>

  <div class="bottomPanier">
    <div class="total">
      <p>Total :</p>
      <p>{{totalPanier}}€</p>
    </div>
    
    <a href="#">Valider mon panier</a>
  </div>
  </div>
  
</template>

<style>
.panierContaint{
  position: relative;
  margin-bottom: 95px;
}
.itemPanier {
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  margin: 5px 0;
}

.hoverSup {
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(219, 43, 43, 0.3);
  top: 0;
  left: 0;
  border-radius: 5px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.hoverSup:hover {
  background-color: rgba(219, 43, 43, 1);
}

.itemPanier:hover .hoverSup {
  transform: translateX(80%);
}

.btnDelete {
  border: none;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0);
  transform: translate(-28%, 8%);
}

.itemPanier p {
  margin: 0;
}

.sousInfosPanier {
  display: flex;
  justify-content: space-between;
}

.bottomPanier {
  background-color: rgb(255, 255, 255);
  transform: translateX(-15px);
  width: 324px;
  position: fixed;
  bottom: 0;
  padding-bottom: 15px;
  border-top: 1px solid gray;
 
}

.total{
  margin: 10px 15px;
  display: flex;
  justify-content: space-between;
}
.bottomPanier a{
  color: white;
  text-decoration: none;
 padding: 10px 80px;
 margin: 15px;
 background-color: #393bb1;
 border-radius: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
../stores/panier-first.js