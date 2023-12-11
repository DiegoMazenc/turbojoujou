<script >
import Display from '../components/compoJV/Display.vue'
import FilterItem from '../components/compoJV/FilterItem.vue';

export default{
    name: "JeuxVideoView",
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

<style>

</style>
