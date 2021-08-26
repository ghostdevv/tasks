<script>
    import { Modal } from 'polykit';
    import Inputs from './Inputs.svelte';

    import { updateTask, getTask, deleteTask } from '@/tasks.js';

    let open;

    let validate;

    export let id;

    let name = '';
    let description = '';

    function submit() {
        if (!validate()) return;

        const task = {
            name: name.trim(),
            description: description.trim(),
        };

        open = false;

        updateTask(id, task);
    }

    function refresh() {
        const task = getTask(id);
        if (task) {
            name = task.name;
            description = task.description;
        }
    }

    function del() {
        open = false;
        deleteTask(id);
    }

    $: if (open) refresh();
</script>

<Modal bind:open let:close>
    <slot slot="activator" name="activator" />

    <card class="no-hover col" style="gap: 22px;">
        <h4>Update Task</h4>

        <Inputs bind:validate bind:name bind:description />

        <div class="row">
            <button class="green" on:click={submit}> Update Task </button>
            <button class="red" on:click={del}> Delete </button>
            <button class="red" on:click={close}> Close </button>
        </div>
    </card>
</Modal>
