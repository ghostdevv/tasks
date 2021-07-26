<script>
    import { tasks, clearTasks } from './tasks.js';
    import TaskModal from './_TaskModal.svelte';
    import { fly } from 'svelte/transition';
</script>

<div class="row">
    <TaskModal>
        <button slot="activator"> Add Task </button>
    </TaskModal>

    <button on:click={clearTasks}> Delete all Tasks </button>
</div>

<div class="tasks">
    {#each $tasks as task (task.id)}
        <TaskModal id={task.id} existing>
            <card transition:fly={{ y: -20 }} slot="activator">
                <h4 style="font-weight: 400;">{task.name}</h4>
            </card>
        </TaskModal>
    {/each}
</div>

<style lang="scss">
    @use 'style/flow/general';

    .tasks {
        @include general.column;

        card {
            cursor: pointer;
        }
    }
</style>
