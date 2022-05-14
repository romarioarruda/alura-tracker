<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de nova tarefa">
                <input
                    v-model="task"
                    type="text" 
                    class="input" 
                    placeholder="Insira uma nova tarefa e aperte Enter" 
                    @keydown.enter="addTask"
                />
            </div>
        </div>
    </div>
    <div class="box">
        <TasksList :tasks="tasks"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TasksList from './TasksList.vue'

export default defineComponent({
    name: 'FormularioVue',
    components: {
        TasksList
    },
    data() {
        return {
            task: '',
            tasks: [] as string[]
        }
    },
    methods: {
        addTask(): void {
            this.tasks.push(this.task)
            this.task = ''
        }
    }
})
</script>
