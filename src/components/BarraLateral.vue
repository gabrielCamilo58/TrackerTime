<template>
<header >
    <h1 class="logo">
        <img src="../assets/logoTrackerTime.png" alt="" style="height: 10rem;">
    </h1>
    <div class="form-check form-switch">
        <input class="form-check-input" v-model="blackMode" type="checkbox" role="switch" id="flexSwitchCheckDefault" @click="changeBlackMode">
        <label class="form-check-label" for="flexSwitchCheckDefault">modo escuro</label>
    </div>
</header>
<div></div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
export default defineComponent({
    name: 'BarraLateral',
    data(){
        return{
            blackMode: false
        }
    },
    methods: {
        changeBlackMode () {
            this.blackMode = !this.blackMode;
            this.$emit('changeBlackMode', this.blackMode);
        },
    }
})
</script>

<style scoped>
header {
    padding: 0;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}

.logo {
    padding-top: 1rem;
    margin-left: 1rem;
}
</style>
