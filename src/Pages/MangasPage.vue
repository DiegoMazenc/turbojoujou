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
        ajoutPanierManga(item){
            this.$emit("ajoutPanierManga", item)
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