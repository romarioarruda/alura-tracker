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
        <TasksList :tasks="tarefas"/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TasksList from '@/components/TasksList.vue'
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
    name: 'TarefasVue',
    components: {
        TasksList
    },
    data() {
        return {
            task: ''
        }
    },
    methods: {
        addTask(): void {
            this.store.commit('ADD_TAREFA', this.task)
            this.task = ''
        }
    },
    setup () {
        const store = useStore(key)

        return {
            store,
            tarefas: computed(() => store.state.tarefas)
        }
    }
})
</script>
