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
  }, 
  emits:['ajoutPanierJoujou'], 
  methods:{
    ajoutPanierJoujou(item){
      this.$emit('ajoutPanierJoujou', item)
    }
  }
}
</script>

<template>
  <div>
    <FormAdd />
    <FilterItem />
    <Display @ajoutPanierJoujou="ajoutPanierJoujou"/>
  </div>
</template>

<style></style>
