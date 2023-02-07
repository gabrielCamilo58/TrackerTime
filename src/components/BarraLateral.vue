<template>
    <header>
        <h1 class="logo">
            <img src="../assets/logoTrackerTime.png" alt="" style="height: 10rem;">
        </h1>
    </header>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'BarraLateral',
})
</script>

<style scoped>
header {
    padding: 0;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
.logo{
    padding-top: 1rem;
    margin-left:1rem ;
}

</style>