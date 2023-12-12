<script>
import { usePanierStore } from '../stores/panier.js'
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
export default {
  name: 'PanierArticles',
  data() {
    return {}
  },
  methods: {
    ...mapActions(usePanierStore, { deleteItemPanierFromListAction: 'deleteItemPanierFromList' }),
    deleteItemPanier(id) {
      
      this.deleteItemPanierFromListAction(id);
    },

  },

  computed: {
    ...mapState(usePanierStore, ['getPanierContent']),
    
  }
}
</script>

<template>
    <hr>
    <h4>Mon Panier</h4>
  <div v-for="(item, index) in getPanierContent" :key="index" class="itemPanier">
    <div>
        <p>{{ item.name }}</p>
    <div class="sousInfosPanier">
      <p>{{ item.plateforme }}</p>
      <p>{{ item.price }}</p>
    </div>
    <div class="hoverSup">
        <button  @click="deleteItemPanier(item.id)" class="btnDelete">🗑️</button>

    </div>
    
    </div>
  </div>
</template>

<style>
.itemPanier {
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  overflow: hidden;
  margin: 5px 0;
}

.hoverSup{
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

.hoverSup:hover{
    background-color: rgba(219, 43, 43, 1);
}


.itemPanier:hover .hoverSup {
  transform: translateX(80%);
}

.btnDelete{
    border: none;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0);
    transform: translate(-28%,8%);
}

.itemPanier p{
    margin: 0;
}

.sousInfosPanier{
    display: flex;
    justify-content: space-between;
}
</style>
