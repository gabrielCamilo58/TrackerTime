<template>
    <div>
        <div class="card-body">
        <div class="row mt-3">
            <div class="col-8" role="form" aria-label="formulario para criação de uma nova tarefa">
                <input type="text"  class="form-control" placeholder="Qual tarefa voce deseja iniciar">
            </div>
            <div class="col-4 d-flex space-between">
                <section class="m-1">
                    <strong>{{ formatTime }}</strong>
                </section>
                <button class="btn btn-outline-primary m-1" @click="playInterval" :disabled="initialized">
                    <span class="icon">
                        <i class="fas fa-play"></i>
                    </span>
                    <span> play</span>
                </button>
                <button class="btn btn-outline-primary m-1" @click="stopInterval" :disabled="!initialized">
                    <span class="icon">
                        <i class="fas fa-stop"></i>
                    </span>
                    <span> stop</span>
                </button>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'FormularioVue',
    computed: {
        formatTime(): string {
            return new Date(this.dataInterval * 1000).toISOString().substr(11, 8)
        },
    },
    data(){
        return{
            dataInterval: 0,
            interval: 0,
            initialized: false,
        }
    },
    methods: {
        playInterval (): void {
            this.initialized = true;
            this.interval = setInterval(() => {
                this.dataInterval += 1;
            }, 1000)
        },
        stopInterval(): void {
            this.initialized = false;
           clearInterval(this.interval);
           this.dataInterval = 0;
        }
    },
})
</script>