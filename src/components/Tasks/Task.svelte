<script>
    import DeleteButton from '@/components/UI/DeleteButton.svelte';
    import TaskModal from '@/components/Tasks/TaskModal.svelte';
    import Checkmark from '@/components/UI/Checkmark.svelte';
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

<TaskModal {id} existing>
    <task
        in:fly={{ y: -20, delay: 125 * i }}
        out:fly|local={{ y: -20 }}
        slot="activator"
        class:completed>
        <Checkmark on:click={toggleComplete} active={completed} />

        <h4 class="name">{name}</h4>

        <DeleteButton
            on:click={(e) => {
                e.stopPropagation();
                deleteTask(id);
            }} />
    </task>
</TaskModal>

<style lang="scss">
    @use 'style/flow/cards';

    task {
        @include cards.card;
        @include cards.click;

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
