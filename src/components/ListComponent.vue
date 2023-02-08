<template>
    <div>
        <div class="card cardBackugroud row flex-row-reverse p-2 mb-1 mt-1 w-100" >
            <div class="col-5">
                <p >elemento one</p>
            </div>
            <div class="col-7"> 
                <p>00:00:00</p>
            </div>
        </div>
        <div class="card cardBackugroud row flex-row-reverse p-2 mb-1 mt-1 w-100" >
            <div class="col-5">
                <p >elemento one</p>
            </div>
            <div class="col-7"> 
                <p>00:00:00</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
name: 'ListComponent',
});
</script>

<style scoped>
.cardBackugroud{
    background: #FAF0CA;
}
</style>