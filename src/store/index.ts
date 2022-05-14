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
    }
})