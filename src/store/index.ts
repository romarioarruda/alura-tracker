import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { INotificacao } from "@/interfaces/INotificacao";
import { ITarefa } from "@/interfaces/ITarefa";
import http from '@/http'

interface State {
    tarefas: ITarefa[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tarefas: [],
        notificacoes: []
    },
    mutations: {
        'ADD_TAREFA'(state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },

        'ADD_TAREFAS'(state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },

        'ADD_NOTIFICACAO'(state, notificacao: INotificacao) {
            notificacao.id = new Date().getTime()
            state.notificacoes.push(notificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(not => not.id !== notificacao.id)
            }, 3000)
        }
    },
    actions: {
        fetchTarefa(state) {
            http.get('tarefas').then(resp => {
                state.commit('ADD_TAREFAS', resp.data)
            })
        },

        // eslint-disable-next-line
        addTarefa(_state, tarefa: string): Promise<any> {
            if(!tarefa) {
                return Promise.reject('Preencha o campo descrevendo a tarefa.')
            }

            return http.post('tarefas', {
                id: new Date().getTime(),
                name: tarefa
            })
        }
    }
})