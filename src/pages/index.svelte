<script>
    import TaskModal from '@/components/Tasks/TaskModal.svelte';
    import Task from '@/components/Tasks/Task.svelte';
    import { tasks, clearTasks } from '@/tasks.js';
</script>

<div class="row controls">
    <TaskModal>
        <button slot="activator"> Add Task </button>
    </TaskModal>

    <button on:click={clearTasks}> Delete all Tasks </button>
</div>

<div class="col g16 tasks">
    {#each $tasks as task, i (task.id)}
        <Task {...task} {i} />
    {/each}
</div>

<style>
    .controls {
        position: sticky;
        z-index: 10000;
        top: 0;

        background-color: var(--background);
        padding: 22px 0px;
    }

    .tasks {
        padding-bottom: 4px 0px;
    }
</style>
