<template>
    <article class="message is-danger">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            {{ message }}
        </div>
    </article>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
    name: 'AlertDanger',
    props: {
        title: {
            type: String,
            default: 'Aconteceu um erro'
        },
        message: {
            type: String,
            required: true
        }
    }
})
</script>
