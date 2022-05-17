<template>
    <div class="notificacoes">
        <article
            v-for="notificacao in notificacoes"
            :key="notificacao.id" 
            class="message"
            :class="contexto[notificacao.tipo]"
            >
            <div class="message-header">
                <p>{{ notificacao.titulo }}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ notificacao.texto }}
            </div>
        </article>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { TipoNotificacao } from '@/interfaces/INotificacao'

export default defineComponent ({
    name: 'NotificacaoVue',
    data () {
        return {
            contexto: {
                [TipoNotificacao.SUCESSO]: 'is-success',
                [TipoNotificacao.FALHA]: 'is-danger',
                [TipoNotificacao.ATENCAO]: 'is-warning'
            }
        }
    },
    setup() {
        const store = useStore(key)

        return {
            notificacoes: computed(() => store.state.notificacoes)
        }
    }
})
</script>
<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    padding: 8px;
    width: 300px;
    z-index: 99;
}

.notificacoes article {
    box-shadow: -2px 3px 15px;
}
</style>