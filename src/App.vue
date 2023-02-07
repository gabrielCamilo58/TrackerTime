<template class="container">
  <main>
    <div class="row">
      <div class="col-2">
        <barra-lateral></barra-lateral>
      </div>
      <div class="col-10">
      <formulario-vue></formulario-vue>
    </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioVue,
  }
});
</script>

<style>

</style>
