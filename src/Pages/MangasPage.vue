<script>
import Display from '../components/compoManga/Display.vue'
import FilterItem from '../components/compoManga/FilterItem.vue';

export default {
    name : "MangasPage",
    components:{
        Display, 
        FilterItem
    }
}
</script>

<template>
    <div>  
    <FilterItem/>
    <Display/>
    </div>
</template>