<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <NotificacaoVue />
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import NotificacaoVue from '@/components/Notificacao.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    NotificacaoVue
  }
})
</script>

<style scoped>

</style>
