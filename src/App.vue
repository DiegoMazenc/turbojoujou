<script >
import JeuxVideo from './Pages/JeuxVideo.vue'
import NavBar from './components/NavBar.vue';

export default{
    name: "App",
    components:{
       JeuxVideo, 
       NavBar
    }
}


</script>

<template>
<div id="app">
<NavBar />
<JeuxVideo/>

</div>
</template>

<style>

</style>
