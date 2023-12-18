<script setup>
import FormAddJoujou from './FormAddJoujou.vue'
import FormAddJV from './FormAddJV.vue'
import FormAddManga from './FormAddManga.vue'

let  currentForm = 'FormAddJoujou'


const showForm = (formName) => {
    currentForm = formName
}
</script>

<template>
    <div class="ListArticles">

    </div>
  <div class="AddForm">
    <div class="navForm">
      <ul>
        <li>
          <button class="btn addFig" @click="showForm('FormAddJoujou')">Ajouter une Figurine</button>
        </li>
        <li>
          <button class="btn addMan" @click="showForm('FormAddManga')">Ajouter un Manga</button>
        </li>
        <li>
          <button class="btn addJV" @click="showForm('FormAddJV')">Ajouter un Jeu Video</button>
        </li>
      </ul>
    </div>

    <FormAddJoujou v-show="currentForm === 'FormAddJoujou'" id="FormAddJoujou" />
    <FormAddJV v-show="currentForm === 'FormAddJV'" id="FormAddJV" />
    <FormAddManga v-show="currentForm === 'FormAddManga'" id="FormAddManga" />
 
</div>
</template>

<style>

</style>