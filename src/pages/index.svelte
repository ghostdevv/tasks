<script>
    import DeleteButton from '@/components/DeleteButton.svelte';
    import { tasks, clearTasks, deleteTask } from '@/tasks.js';
    import TaskModal from '@/components/TaskModal.svelte';
    import { fly } from 'svelte/transition';
</script>

<div class="row">
    <TaskModal>
        <button slot="activator"> Add Task </button>
    </TaskModal>

    <button on:click={clearTasks}> Delete all Tasks </button>
</div>

<div class="tasks">
    {#each $tasks as task, i (task.id)}
        <TaskModal id={task.id} existing>
            <card
                in:fly={{ y: -20, delay: 150 * i }}
                out:fly|local={{ y: -20 }}
                slot="activator">
                <h4 style="font-weight: 400;">{task.name}</h4>
                <DeleteButton on:click={() => deleteTask(task.id)} />
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
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
