<template>
    <nav class="panel">
        <p class="panel-heading">
            Tarefas
        </p>
        <template v-if="tasks.length">
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Search">
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>
            <ul v-for="task in tasks" :key="task?.id" class="panel-block area-timer-buttons">
                <li :key="task?.id">
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {{ task?.name }}
                    </a>
                </li>
                <TimerVue />
            </ul>
        </template>
        <p v-else class="panel-block is-active">Nenhuma tarefa ainda.</p>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimerVue from './Timer.vue'

export default defineComponent({
    name: 'TasksList',
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    components: { TimerVue }
})
</script>

<style scoped>

.area-timer-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
