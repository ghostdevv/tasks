<script>
    import ExistingTask from '@/components/tasks/modals/ExistingTask.svelte';
    import DeleteButton from '@/components/icons/DeleteButton.svelte';
    import Checkmark from '@/components/icons/Checkmark.svelte';
    import { deleteTask, updateTask } from '@/tasks.js';
    import { fly } from 'svelte/transition';

    export let id;
    export let name;
    export let completed;

    export let i = 1;

    function toggleComplete() {
        console.log(completed);
        updateTask(id, {
            completed: !completed,
        });
    }
</script>

<ExistingTask {id}>
    <task
        in:fly={{ y: -20, delay: 125 * i }}
        out:fly|local={{ y: -20 }}
        slot="activator"
        class:completed
        class="card click">
        <Checkmark on:click={toggleComplete} active={completed} />

        <h4 class="name">{name}</h4>

        <DeleteButton
            on:click={(e) => {
                e.stopPropagation();
                deleteTask(id);
            }} />
    </task>
</ExistingTask>

<style lang="scss">
    task {
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        grid-template-rows: 1fr;
        grid-template-areas: '. . .';

        gap: 0px 12px;
        align-items: center;

        transition: opacity 0.2s ease-in-out;

        &.completed {
            opacity: 0.6;

            &:hover {
                opacity: 0.7;
            }

            .name {
                text-decoration: line-through;
            }
        }

        .name {
            font-weight: 400;
        }
    }
</style>
