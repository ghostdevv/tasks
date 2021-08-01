<script>
    import { createTask, updateTask, getTask, deleteTask } from '@/tasks.js';
    import Modal from '@/components/Modal.svelte';

    let open;

    export let existing = false;

    export let id = undefined;

    let name = '';
    let description = '';

    let nameError;

    function close() {
        open = false;
        name = '';
        id = undefined;
    }

    function validate() {
        nameError = false;

        if (name.length == 0 || name.trim() == '') {
            nameError = true;
            return false;
        }

        return true;
    }

    function submit() {
        if (!validate()) return;

        const task = {
            name: name.trim(),
            description: description.trim(),
        };

        close();

        if (id) updateTask(id, task);
        else createTask(task);
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
        <h4>Add Task</h4>

        <div class="col">
            <div class="input-row">
                <label for="name">Name</label>

                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    class:error={nameError}
                    bind:value={name} />
            </div>

            <div class="input-row">
                <label for="description">Description</label>

                <textarea
                    name="description"
                    id="description"
                    bind:value={description}
                    placeholder="More information about task (optional)" />
            </div>
        </div>

        <div class="row">
            <button class="green" on:click={submit}>
                {id ? 'Update' : 'Add'}
            </button>

            {#if existing}
                <button class="red" on:click={del}> Delete </button>
            {/if}

            <button class="red" on:click={close}> Close </button>
        </div>
    </card>
</Modal>
