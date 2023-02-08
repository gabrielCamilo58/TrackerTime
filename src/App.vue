<template class="container">
  <main>
    <div class="row">
      <div class="col-2">
        <barra-lateral></barra-lateral>
      </div>
      <div class="col-10">
      <formulario-vue></formulario-vue>
      <list-component></list-component>
    </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
import ListComponent from './components/ListComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioVue,
    ListComponent,
  }
});
</script>

<style>

</style>
