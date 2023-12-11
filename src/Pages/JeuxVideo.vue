<script >
import Display from '../components/compoJV/Display.vue'
import Counter from '../components/compoJV/Counter.vue';
import FilterItem from '../components/compoJV/FilterItem.vue';
export default{
    name: "JeuxVideoView",
    components:{

        Display,
        Counter,
        FilterItem
        
    }
}


</script>

<template>
<div>
    <FilterItem/>
    <Counter/>
    <Display/>
</div>
</template>

<style>

</style>
