<template>
    <div class="area-timer-buttons">
        <section>
            <strong>{{ timerComputing }}</strong>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CronometroVue',
    props: {
        timer: {
            type: Number,
            default: 0
        }
    },
    computed: {
        timerComputing(): string {
            return new Date(this.timer * 1000).toISOString().substring(11,19)
        }
    }
})
</script>