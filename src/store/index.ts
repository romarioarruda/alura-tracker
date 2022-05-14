import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
    tarefas: string[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tarefas: ['Aprendendo Vue.js 3', 'Aprendendo Typescript', 'Aprendendo Javascript']
    }
})