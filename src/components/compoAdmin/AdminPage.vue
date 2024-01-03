<script setup>
import { ref } from 'vue'
import FormAddJoujou from './FormAddJoujou.vue'
import FormAddJV from './FormAddJV.vue'
import FormAddManga from './FormAddManga.vue'

// Import des tables

import TabJoujou from './TabJoujou.vue'
import TabJV from './TabJV.vue'
import TabManga from './TabManga.vue'

const isFormAddJoujouVisible = ref(true)
const isFormAddJVVisible = ref(false)
const isFormAddMangaVisible = ref(false)

const showForm = (formName) => {
  isFormAddJoujouVisible.value = formName === 'FormAddJoujou'
  isFormAddJVVisible.value = formName === 'FormAddJV'
  isFormAddMangaVisible.value = formName === 'FormAddManga'
}
</script>

<template>
  <div class="ListArticles">
    <!-- Contenu de la liste d'articles -->
  </div>
  <div class="AddForm">
    <div class="navForm">
      <ul>
        <li>
          <button
            class="btnNav"
            :class="{ selectBtn: isFormAddJoujouVisible }"
            @click="showForm('FormAddJoujou')"
          >
            Gérer Figurines
          </button>
        </li>
        <li>
          <button
            class="btnNav"
            :class="{ selectBtn: isFormAddMangaVisible }"
            @click="showForm('FormAddManga')"
          >
            Gérer Mangas
          </button>
        </li>
        <li>
          <button
            class="btnNav"
            :class="{ selectBtn: isFormAddJVVisible }"
            @click="showForm('FormAddJV')"
          >
            Gérer Jeux Videos
          </button>
        </li>
      </ul>
      <hr />
    </div>

    <div class="mt-5" :class="{ hidden: !isFormAddJoujouVisible }">
      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#addJoujou"
          role="button"
          aria-expanded="false"
          aria-controls="addJoujou"
        >
          Ajouter un Joujou
        </a>
        <FormAddJoujou class="collapse" id="addJoujou" />
      </div>

      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#deleteJoujou"
          role="button"
          aria-expanded="false"
          aria-controls="deleteJoujou"
        >
          Supprimer un Joujou
        </a>
        <TabJoujou class="collapse" id="deleteJoujou" />
      </div>
    </div>

    <div class="mt-5" :class="{ hidden: !isFormAddJVVisible }">
      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#addJV"
          role="button"
          aria-expanded="false"
          aria-controls="addJV"
        >
          Ajouter un Jeu Vidéo
        </a>
        <FormAddJV class="collapse" id="addJV" />
      </div>
      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#deleteJV"
          role="button"
          aria-expanded="false"
          aria-controls="deleteJV"
        >
          Supprimer un Jeu Vidéo
        </a>
        <TabJV class="collapse" id="deleteJV" />
      </div>
    </div>
    <div class="mt-5" :class="{ hidden: !isFormAddMangaVisible }">
      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#addManga"
          role="button"
          aria-expanded="false"
          aria-controls="addManga"
        >
          Ajouter un Manga
        </a>
        <FormAddManga class="collapse" id="addManga" />
      </div>
      <div class="card card-body mx-5">
        <a
          class="btn form-label"
          data-bs-toggle="collapse"
          href="#deleteManga"
          role="button"
          aria-expanded="false"
          aria-controls="deleteManga"
        >
          Supprimer un Manga
        </a>
        <TabManga class="collapse" id="deleteManga" />
      </div>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}

.navForm ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  margin-bottom: 0;
  padding: 0;
}

.navForm hr {
  position: relative;
  opacity: 1;
  margin: 0;
  z-index: 0;
  border-color: gray;
}

.btnNav {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  padding: 10px;
  margin: 0 0 -1px 0;
  font-weight: 600;
  color: gray;
}

.btnNav:hover {
  color: rgb(114, 114, 240);
}

.selectBtn {
  border-top: 1px gray solid;
  border-left: 1px gray solid;
  border-right: 1px gray solid;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 0 0;
  color: rgb(114, 114, 240);
}
</style>
