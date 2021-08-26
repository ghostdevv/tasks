<script>
    import DeleteButton from '@/components/icons/DeleteButton.svelte';
    import NewTask from '@/components/tasks/modals/NewTask.svelte';
    import Task from '@/components/tasks/Task.svelte';
    import { tasks, clearTasks } from '@/tasks.js';
    import { showCompletedTasks } from '@/config';
    import { Modal } from 'polykit';

    $: displayTasks = $tasks.filter((t) =>
        $showCompletedTasks ? !t.completed : true,
    );
</script>

<div class="row controls">
    <div class="row g16" style="align-items: center;">
        <NewTask>
            <button slot="activator"> Add Task </button>
        </NewTask>

        <button on:click={() => ($showCompletedTasks = !$showCompletedTasks)}>
            {$showCompletedTasks ? 'Show' : 'Hide'} completed
        </button>
    </div>

    {#if $tasks.length > 0}
        <Modal let:close>
            <DeleteButton slot="activator" />

            <card class="col g32 center no-hover">
                <h4>
                    Are you sure you want to
                    <strong style="color: var(--red)">
                        delete all tasks
                    </strong>
                </h4>

                <div class="row center">
                    <button
                        class="green"
                        on:click={() => {
                            clearTasks();
                            close();
                        }}>Yes</button>

                    <button class="red" on:click={close}>No</button>
                </div>
            </card>
        </Modal>
    {/if}
</div>

<div class="col g16 tasks">
    {#each displayTasks as task, i (task.id)}
        <Task {...task} {i} />
    {/each}
</div>

<style>
    .controls {
        position: sticky;
        z-index: 10000;
        top: 0;

        align-items: center;
        justify-content: space-between;

        background-color: var(--background);
        padding: 22px 0px;
    }

    .tasks {
        padding-bottom: 4px 0px;
    }
</style>
