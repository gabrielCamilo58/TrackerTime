<template>
<div>
    <div v-for="(iten, key) in task" :key="key">
        <div class="card cardBackugroud row flex-row p-2 mb-1 mt-1 w-100">
        <div class="col-5">
            <p>{{ iten.description}}</p>
        </div>
        <div class="col-7">
            <p>{{ formatTime(iten.time)}}</p>
        </div>
    </div>
    </div>
</div>
</template>

<script lang="ts">
import TaskInterface from '@/Interfaces/TaskInterface'
import {defineComponent} from 'vue';
export default defineComponent({
    name: 'ListComponent',
    props: ['taskIndex'],
    data() {
        return {
            task: [] as TaskInterface[]
        }
    }, 
    mounted(){
        console.log('fds')
            this.task = this.taskIndex;
    },
    watch: {
        taskIndex (): void {
            console.log('fds')
            this.task = this.taskIndex;
        },
    },
    methods:{
        formatTime(time: number): string {
            return new Date(time * 1000).toISOString().substr(11, 8)
        },
    }
});
</script>

<style scoped>
.cardBackugroud {
    background: #FAF0CA;
}
</style>
