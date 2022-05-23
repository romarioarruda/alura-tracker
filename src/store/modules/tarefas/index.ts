import { ITarefa } from "@/interfaces/ITarefa";
import { Module } from "vuex";
import { State } from '@/store';
import http from '@/http'

export interface EstadoTarefas {
    tarefas: ITarefa[]
}

export const tarefas: Module<EstadoTarefas, State> = {
    mutations: {
        'ADD_TAREFA'(state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },

        'ADD_TAREFAS'(state, tarefass: ITarefa[]) {
            state.tarefas = tarefass
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
}