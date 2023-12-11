<script >
import FormAdd from '../components/FormAdd.vue';
import Display from '../components/Display.vue'
import Counter from '../components/Counter.vue';
import FilterItem from '../components/FilterItem.vue';
export default{
    name: "App",
    components:{
        FormAdd,
        Display,
        Counter,
        FilterItem
    }
}


</script>

<template>
<div id="app">
    <FormAdd/>
    <FilterItem/>
    <Counter/>
    <Display/>
   
</div>
</template>

<style>

</style>
