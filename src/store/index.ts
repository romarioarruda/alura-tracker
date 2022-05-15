import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
    tarefas: string[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tarefas: []
    },
    mutations: {
        'ADD_TAREFA'(state, tarefa: string) {
            state.tarefas.push(tarefa)
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