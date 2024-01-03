<script>
import AdminPage from '../components/compoAdmin/AdminPage.vue'
export default {
    name : "AdminPageView",
    components: {
        AdminPage
  }, 
}
</script>

<template>
    <div>
        <p class="modal-title text-primary-emphasis fs-4 text-center mt-5 mb-5" >Administration </p>
        <AdminPage/>
    </div>
</template>