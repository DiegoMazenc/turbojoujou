<script>
import { mapState } from 'pinia'
import { useJeuxvVideoStore } from '../../stores/stock.js'

export default {
  name: 'Counter',
  data() {
    return {
      qte: null
    }
  },
  methods: {},

  computed: {
    ...mapState(useJeuxvVideoStore, ['jeuxVideoList']),

    showQte() {
      this.qte = this.jeuxVideoList.length
      return this.qte
    }
  },
  mounted() {
    this.showQte()
  },
  watch: {
    jeuxVideoList: {
      handler() {
        this.showQte
      },
      deep: true
    }
  }
}
</script>

<template>
  <p>{{ qte }}</p>
</template>

<style></style>
