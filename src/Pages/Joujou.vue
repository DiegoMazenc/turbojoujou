<script >
import FormAdd from '../components/compoJoujou/FormAdd.vue';
import Display from '../components/compoJoujou/Display.vue'
import Counter from '../components/compoJoujou/Counter.vue';
import FilterItem from '../components/compoJoujou/FilterItem.vue';
export default{
    name: "JouJou",
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
