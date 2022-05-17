import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store"

export const notificacaoMixin = {
    methods: {
        notificacao(titulo: string, texto: string, tipo: TipoNotificacao): void {
            store.commit('ADD_NOTIFICACAO', {
                titulo,
                texto,
                tipo
            } as INotificacao)
        }
    }
}