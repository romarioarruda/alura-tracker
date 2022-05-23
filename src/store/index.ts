import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { INotificacao } from "@/interfaces/INotificacao";
import { EstadoTarefas, tarefas } from "./modules/tarefas";


export interface State {
    notificacoes: INotificacao[],
    tarefas: EstadoTarefas
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tarefas: { tarefas: [] },
        notificacoes: []
    },

    mutations: {
        'ADD_NOTIFICACAO'(state, notificacao: INotificacao) {
            notificacao.id = new Date().getTime()
            state.notificacoes.push(notificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(not => not.id !== notificacao.id)
            }, 3000)
        }
    },

    modules: {
        tarefas
    }
})