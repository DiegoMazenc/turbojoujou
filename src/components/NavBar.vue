<script>
export default {
    name:'NavBar'
}
</script>


<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/"
                >Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/mangaspage"
                >Mangas</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/jeuxvideo"
                >Jeux vidéos</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin"
                >Admin</router-link>
        </li>
        </ul>
    </div>
  </div>
</nav>
</template>