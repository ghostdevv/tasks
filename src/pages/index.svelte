<script>
    import TaskModal from '@/components/Tasks/TaskModal.svelte';
    import Task from '@/components/Tasks/Task.svelte';
    import { tasks, clearTasks } from '@/tasks.js';
</script>

<div class="row">
    <TaskModal>
        <button slot="activator"> Add Task </button>
    </TaskModal>

    <button on:click={clearTasks}> Delete all Tasks </button>
</div>

<div class="col g16">
    {#each $tasks as task, i (task.id)}
        <Task {...task} {i} />
    {/each}
</div>
