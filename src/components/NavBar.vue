<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  panier: {
    type: Array,
    requested: false,
    default: function () {
      return null
    }
  }
})

</script>

<template>
  <nav class="navbar navbar-expand-lg color-nav" data-bs-theme="dark">
    <div class="container-fluid">
      <img src="../assets/img/logoTurboJoujou.png" alt="TurboJoujou Logo" class="logoNav" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ms-5">
            <RouterLink to="/" class="styleLinkNav">Figurines</RouterLink>
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
        <li class="cart">
          <RouterLink to="/admin" class="styleLinkNav">
          Admin
          <!-- <p>{{ panier.length }}</p> -->
        </RouterLink>
      </li>
      </div>
    </div>
  </nav>
</template>

<style>
.logoNav {
  height: 50px;
  position: relative;
  margin-left: 20px;
}
.cart {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
  gap: 1em;
}

.color-nav {
  background: linear-gradient(#393bb1, #323486);
}

.styleLinkNav {
  color: white;
  text-decoration: none;
  padding: 22px;
}

.styleLinkNav:hover {
  color: rgb(203, 215, 226);
}
</style>
