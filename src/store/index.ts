import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { INotificacao } from "@/interfaces/INotificacao";

interface State {
    tarefas: string[],
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tarefas: [],
        notificacoes: []
    },
    mutations: {
        'ADD_TAREFA'(state, tarefa: string) {
            state.tarefas.push(tarefa)
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
        addTarefa(state, tarefa: string): Promise<string> {
            if(!tarefa) {
                return Promise.reject('Preencha o campo descrevendo a tarefa.')
            }

            state.commit('ADD_TAREFA', tarefa)

            return Promise.resolve('Tarefa adicionada na lista.')
        }
    }
})