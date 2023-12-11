<script>
import FormAdd from '../components/compoJoujou/FormAdd.vue'
import Display from '../components/compoJoujou/Display.vue'
import FilterItem from '../components/compoJoujou/FilterItem.vue'
export default {
  name: 'JouJouView',
  components: {
    FormAdd,
    Display,
    FilterItem
  }
}
</script>

<template>
  <div>
    <FormAdd />
    <FilterItem />
    <Display />
  </div>
</template>

<style></style>
