<script >
import Display from '../components/compoJV/Display.vue'
import Counter from '../components/compoJV/Counter.vue';
import FilterItem from '../components/compoJV/FilterItem.vue';
export default{
    name: "App",
    components:{
        Display,
        Counter,
        FilterItem
    }
}


</script>

<template>
<div id="app">
    <FilterItem/>
    <Counter/>
    <Display/>
   
</div>
</template>

<style>

</style>
