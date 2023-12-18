<script setup>
import { ref } from 'vue'
import FormAddJoujou from './FormAddJoujou.vue'
import FormAddJV from './FormAddJV.vue'
import FormAddManga from './FormAddManga.vue'

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

        <FormAddJoujou :class="{ 'hidden': !isFormAddJoujouVisible }"/>
        <FormAddJV :class="{ 'hidden': !isFormAddJVVisible }"/>
        <FormAddManga :class="{ 'hidden': !isFormAddMangaVisible }"
        />
    </div>
</template>

<style>
.hidden {
    display: none;
}
</style>
