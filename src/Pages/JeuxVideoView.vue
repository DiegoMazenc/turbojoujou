<script >
import Display from '../components/compoJV/Display.vue'
import FilterItem from '../components/compoJV/FilterItem.vue';

export default{
    name: "JeuxVideoView",
    data() {
  return {
    isFilterItemFixed: false,
  };
},
    components:{
        Display,
        FilterItem
    }, 
    methods:{
        ajoutPanierJV(item){
            this.$emit('ajoutPanierJV', item)
        },

        handleScroll() {
    const filterItem = this.$el; // Obtenez la référence de l'élément FilterItem
    const filterItemOffsetTop = filterItem.offsetTop;

    // Ajoutez votre propre valeur pour déterminer quand l'élément doit être fixé
    this.isFilterItemFixed = window.scrollY > filterItemOffsetTop;
  },
    },

    mounted() {
  window.addEventListener('scroll', this.handleScroll);
},

beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
},
}


</script>

<template>
<div class="mainJV" >
    <div class="asideBar" :class="{ 'filter-item-fixed': isFilterItemFixed }">
        <FilterItem />
    </div>
    <Display class="mainDisplay" :class="{ 'marginMainDisplay': isFilterItemFixed }" @ajoutPanierJV="ajoutPanierJV"/>
</div>
</template>

<style>
.mainJV{
    display: flex;
}

.mainDisplay{
    margin: 15px;

}

.marginMainDisplay{
    margin-left: 350px;
}

.asideBar{
    overflow-y: scroll;
     min-width: 330px;
     height: 100vh;
    padding: 15px;
    border-right: 2px rgb(223, 223, 223) solid;
    background-color: #fafafa;
    

    scrollbar-width: thin;  /* Pour Firefox */
  scrollbar-color: #cccccc #f0f0f0;
}

.asideBar::-webkit-scrollbar {
  width: 5px;  /* Largeur de la barre de défilement */
}

.asideBar::-webkit-scrollbar-thumb {
  background-color: #d1d1d1;  /* Couleur de la barre de défilement */
}

.asideBar::-webkit-scrollbar-track {
  background-color: #ffffff;  /* Couleur du fond de défilement */
}

.filter-item-fixed {
  position: fixed;
  top: 0;
}
</style>
