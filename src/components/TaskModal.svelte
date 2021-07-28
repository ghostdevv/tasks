<script>
    import { createTask, updateTask, getTask, deleteTask } from '@/tasks.js';
    import Modal from '@/components/Modal.svelte';

    let open;

    export let existing = false;

    export let id = undefined;
    let name = '';

    let nameError;

    function close() {
        open = false;
        name = '';
        id = undefined;
    }

    function validate() {
        nameError = false;

        if (name.length == 0) {
            nameError = true;
            return false;
        }

        return true;
    }

    function submit() {
        if (!validate()) return;

        if (id) updateTask(id, name);
        else createTask(name);

        close();
    }

    function handleKeydown(event) {
        const { key } = event;
        if (key.toLowerCase() == 'escape') close();
    }

    function refresh() {
        const task = getTask(id);
        if (task) name = task.name;
    }

    function del() {
        open = false;
        deleteTask(id);
    }

    $: if (open) refresh();
</script>

<svelte:window on:keydown={handleKeydown} />

<div style="display: contents;" on:click={() => (open = true)}>
    <slot name="activator" />
</div>

<Modal bind:open>
    <card class="no-hover col" style="gap: 22px;">
        <h4>Add Task</h4>

        <div>
            <div class="input-row">
                <label for="name">Name</label>

                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    class:error={nameError}
                    bind:value={name} />
            </div>
        </div>

        <div class="row">
            <button class="green" on:click={submit}>
                {id ? 'Update' : 'Add'}
            </button>

            {#if existing}
                <button class="red" on:click={del}> Delete </button>
            {/if}

            <button class="red" on:click={() => (open = false)}> Close </button>
        </div>
    </card>
</Modal>
