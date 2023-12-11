<script>
import Display from '../components/compoManga/Display.vue'
import FilterItem from '../components/compoManga/FilterItem.vue';

export default {
    name : "MangasPage",
    components:{
        Display, 
        FilterItem
    }, 
    methods:{
        ajoutPanierManga(item, tome){
            this.$emit("ajoutPanierManga", {manga:item, tome: tome})
           
        }
    }, 
    emits:["ajoutPanierManga"]
}
</script>

<template>
    <div>  
    <FilterItem/>
    <Display @ajoutPanierManga="ajoutPanierManga"/>
    </div>
</template>