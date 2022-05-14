<template>
    <div class="area-timer-buttons">
        <CronometroVue :timer="timer" style="margin-right: 15px;"/>
        <button class="button" @click="iniciar" :disabled="cronIsRunning">
            <span class="icon">
                <em class="fas fa-play"></em>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronIsRunning">
            <span class="icon">
                <em class="fas fa-stop"></em>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroVue from './Cronometro.vue'

export default defineComponent({
    name: 'TimerVue',
    components: { CronometroVue },
    data() {
        return {
            timer: 0,
            timerFunction: 0,
            cronIsRunning: false
        }
    },
    methods: {
        iniciar(): void {
            this.cronIsRunning = true
            this.timerFunction = setInterval(() => {
                this.timer += 1
            }, 1000)
        },

        finalizar(): void {
            this.cronIsRunning = false
            clearInterval(this.timerFunction)
        }
    }
})
</script>
<style scoped>
button.button {
    margin-right: 15px;
}
</style>
