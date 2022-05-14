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
      <ul class="menu-list" v-for="route in routes" :key="route.name">
        <li>
          <router-link :to="route.path" class="color-aside-menu aside-menu-weigth">
            <em class="mr-3" :class="route.icon"></em>
            {{ route.name}}
          </router-link>
        </li>
      </ul>
    </aside>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { routes } from '@/routes'

export default defineComponent({
  name: 'BarraLateral',
  data() {
    return {
      routes
    }
  }
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
