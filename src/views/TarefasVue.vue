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
        <AlertDanger v-if="messageError" :message="messageError"/>
        <TasksList :tasks="tarefas"/>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import TasksList from '@/components/TasksList.vue'
import AlertDanger from '@/components/AlertDanger.vue'

export default defineComponent({
    name: 'TarefasVue',
    components: {
        TasksList,
        AlertDanger
    },
    data() {
        return {
            task: '',
            messageError: ''
        }
    },
    methods: {
        async addTask(): Promise<void> {
            this.store.dispatch('addTarefa', this.task)
                .then(() => this.task = '')
                .catch(error => {
                    this.messageError = error
                })
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
