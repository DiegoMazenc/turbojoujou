<script >
import FormAdd from './components/FormAdd.vue';
import Display from './Display/Display.vue'
import Counter from './components/Counter.vue';
export default{
    name: "App",
    components:{
        FormAdd,
        Display,
        Counter
    }
}


</script>

<template>
<div id="app">
    <FormAdd/>
    <Counter/>
    <Display/>
</div>
</template>

<style>

</style>
