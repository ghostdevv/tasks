<script>
    import DeleteButton from '@/components/DeleteButton.svelte';
    import TaskModal from '@/components/TaskModal.svelte';
    import { getTask, deleteTask } from '@/tasks.js';
    import { fly } from 'svelte/transition';

    export let id;
    export let name;
    export let i;
</script>

<TaskModal {id} existing>
    <card
        in:fly={{ y: -20, delay: 150 * i }}
        out:fly|local={{ y: -20 }}
        slot="activator">
        <h4 style="font-weight: 400;">{name}</h4>

        <DeleteButton on:click={() => deleteTask(id)} />
    </card>
</TaskModal>

<style>
    card {
        cursor: pointer;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
