<template>
    <div class="box">
        <div class="columns">
            <div style="display: flex;" class="column is-8" role="form"
                aria-label="Formulário para criação de nova tarefa">
                <input v-model="task" type="text" class="input"
                    placeholder="Insira uma nova tarefa e aperte Enter ou clique no botão ao lado"
                    @keydown.enter="addTask" />
                <button class="button is-info ml-1" @click="addTask">Adicionar</button>
            </div>
        </div>
    </div>
    <div class="box">
        <TasksList :tasks="tarefas" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import TasksList from '@/components/TasksList.vue'
import { TipoNotificacao } from '@/interfaces/INotificacao'
import { notificacaoMixin } from '@/mixins/notificacaoMixin'

export default defineComponent({
    name: 'TarefasVue',
    components: {
        TasksList
    },
    mixins: [ notificacaoMixin ],
    data() {
        return {
            task: ''
        }
    },
    methods: {
        async addTask() {
            try {
                await this.store.dispatch('addTarefa', this.task)
                this.task = ''
                this.notificacao('Sucesso', 'Tarefa criada com sucesso!', TipoNotificacao.SUCESSO)
                this.store.dispatch('fetchTarefa')
            } catch(error) {
                this.notificacao('Falha', String(error), TipoNotificacao.FALHA)
            }
        }
    },
    setup() {
        const store = useStore(key)

        store.dispatch('fetchTarefa')

        return {
            store,
            tarefas: computed(() => store.state.tarefas.tarefas)
        }
    }
})
</script>
