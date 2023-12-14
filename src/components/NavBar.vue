<script>
import { RouterLink } from 'vue-router'
export default {
    name:'NavBar',
    components:{
      RouterLink
    }, 
    props:{
      panier:{
        type:Array,
        requested : false, 
        default: function (){
          return null
        }
      }
    }
}
</script>


<template>
    <nav class="navbar navbar-expand-lg color-nav" data-bs-theme="dark">
  <div class="container-fluid">
    <img src="../assets/img/logoTurboJoujou.png" alt="TurboJoujou Logo" class="logoNav">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ms-5">
            <RouterLink to="/" class="styleLinkNav">Home</RouterLink>
        </li>
        <li class="nav-item ms-5">
            <RouterLink to="/mangaspage" class="styleLinkNav">Mangas</RouterLink>
        </li>
        <li class="nav-item ms-5">
            <RouterLink to="/jeuxvideo" class="styleLinkNav">Jeux vidéos</RouterLink>
        </li>
        <!-- <li class="nav-item">
            <RouterLink to="/admin">Admin</RouterLink>
        </li> -->
        </ul>
        <div class="cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"/></svg>
        <p>{{ panier.length }}</p>
      </div>
    </div>
  
  </div>
</nav>
</template>

<style>

.logoNav{
  height: 50px;
  position: relative;
  margin-left: 20px;
}
.cart{
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  gap: 1em; 
}

.color-nav{
  background: linear-gradient(#393bb1, #323486);
}

.styleLinkNav{
  color: white;
  text-decoration: none;
  padding: 22px;
}

.styleLinkNav:hover{
  color: rgb(203, 215, 226);
}

</style>