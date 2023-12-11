<script >
import FormAdd from '../components/compoJoujou/FormAdd.vue';
import Display from '../components/compoJoujou/Display.vue'
import Counter from '../components/compoJoujou/Counter.vue';
import FilterItem from '../components/compoJoujou/FilterItem.vue';
export default{
    name: "JouJouView",
    components:{
        FormAdd,
        Display,
        Counter,
        FilterItem
    }
}


</script>

<template>
<div>
    <FormAdd/>
    <FilterItem/>
    <Counter/>
    <Display/>
</div>
</template>

<style>

</style>
