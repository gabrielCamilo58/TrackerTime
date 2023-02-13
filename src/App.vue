<template>
<main  :class="{'black-mode': mode}">
    <div class="row">
        <div class="col-2">
            <barra-lateral @changeBlackMode="blackMode"></barra-lateral>
        </div>
        <div class="col-10 content-right">
            <formulario-vue @save-task="saveTask"></formulario-vue>
            <list-component :task-index="task"></list-component>
        </div>
    </div>
</main>
</template>

<script lang="ts">
import {defineComponent  } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
import ListComponent from './components/ListComponent.vue';
import TaskInterface from './Interfaces/TaskInterface';

export default defineComponent({
    name: 'App',
    components: {
        BarraLateral,
        FormularioVue,
        ListComponent,
    },
    data() {
        return {
          task: [] as TaskInterface[],
          mode: false
        }
    },
    methods: {
        saveTask(task: TaskInterface) {
            this.task.push(task);
            console.log(task)
        },
        blackMode(value: boolean){
            this.mode = value;
        },
    }
});
</script>

<style>

main {
    --bg-primary: #fff;
    --text-primary: #000:
}

main.black-mode {
    --bg-primary: #2b2d42;
    --text-primary: #ddd;
}

.content-right {
    background-color: var(--bg-primary);
}
</style>
