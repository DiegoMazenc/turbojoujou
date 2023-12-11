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
<div>
    <FilterItem/>
    <Display @ajoutPanierJV="ajoutPanierJV"/>
</div>
</template>

<style>

</style>
