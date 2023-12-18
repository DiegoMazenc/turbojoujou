<script setup>
import { ref } from 'vue'
import FormAddJoujou from './FormAddJoujou.vue'
import FormAddJV from './FormAddJV.vue'
import FormAddManga from './FormAddManga.vue'

// Import des tables 

import TabJoujou from './TabJoujou.vue'

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
            Ajouter une Figurine
          </button>
        </li>
        <li>
          <button
            class="btnNav"
            :class="{ selectBtn: isFormAddMangaVisible }"
            @click="showForm('FormAddManga')"
          >
            Ajouter un Manga
          </button>
        </li>
        <li>
          <button
            class="btnNav"
            :class="{ selectBtn: isFormAddJVVisible }"
            @click="showForm('FormAddJV')"
          >
            Ajouter un Jeu Video
          </button>
        </li>
      </ul>
      <hr />
    </div>

    <FormAddJoujou :class="{ hidden: !isFormAddJoujouVisible }" />
    <FormAddJV :class="{ hidden: !isFormAddJVVisible }" />
    <FormAddManga :class="{ hidden: !isFormAddMangaVisible }" />
  </div>

  <TabJoujou/>
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
