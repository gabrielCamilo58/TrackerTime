<template>
<main>
    <div class="row">
        <div class="col-2">
            <barra-lateral></barra-lateral>
        </div>
        <div class="col-10">
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
          task: [] as TaskInterface[]
        }
    },
    methods: {
        saveTask(task: TaskInterface) {
            this.task.push(task);
            console.log(task)
        }
    }
});
</script>

<style>

</style>
