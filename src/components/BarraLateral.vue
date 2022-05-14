<template>
  <header>
    <h1>
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo alura-tracker">
      </router-link>
    </h1>
    <hr>
    <aside class="menu">
      <p class="menu-label color-aside-menu aside-menu-weigth">
        GERAL
      </p>
      <ul class="menu-list">
        <li><router-link to="/" class="color-aside-menu aside-menu-weigth">
          <em class="fa-solid fa-list-check mr-3"></em>
          Tarefas
        </router-link></li>
        <li><router-link to="/projetos" class="color-aside-menu aside-menu-weigth">
          <em class="fa-solid fa-folder-plus mr-3"></em>
          Projetos
        </router-link></li>
      </ul>
    </aside>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarraLateral'
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.router-link-active {
  background-color: #175a9a;
}

.menu-list li a:hover {
  background-color: #175a9a;
  color: #fff;
}

.aside-menu-weigth {
  font-weight: bold;
}
.color-aside-menu {
  color: #fff;
}
</style>
