<script >
import Display from '../components/compoJV/Display.vue'
import FilterItem from '../components/compoJV/FilterItem.vue';

export default{
    name: "JeuxVideoView",
    components:{
        Display,
        FilterItem
    }, 
    methods:{
        ajoutPanierJV(item){
            this.$emit('ajoutPanierJV', item)
        }
    }
}


</script>

<template>
<div class="mainJV">
    <FilterItem class="filterAside"/>
    <Display class="mainDisplay" @ajoutPanierJV="ajoutPanierJV"/>
</div>
</template>

<style>
.mainJV{
    display: flex;
}

.mainDisplay{
    margin: 15px;
}

.filterAside{
    margin: 15px 0 15px 15px;
    padding: 15px;
    border: 2px rgb(223, 223, 223) solid;
    border-radius: 15px;
}
</style>
