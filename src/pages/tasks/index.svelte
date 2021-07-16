<script>
    import { tasks, createTask, clearTasks } from './tasks.js';
    import { fly } from 'svelte/transition';
    function click() {
        createTask('Test');
    }
</script>

<div class="controls">
    <button on:click={click}> Add Task </button>
    <button on:click={clearTasks}> Clear Task </button>
</div>

<div class="tasks">
    {#each $tasks as task, i (task.id)}
        <card transition:fly={{ y: -20 }}>
            {task.name}
        </card>
    {/each}
</div>

<style lang="scss">
    @use 'style/flow/general';

    .controls {
        display: flex;
        gap: 12px;
    }

    .tasks {
        @include general.column;

        card {
            cursor: pointer;
        }
    }
</style>
