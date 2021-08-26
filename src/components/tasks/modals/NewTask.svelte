<script>
    import { Modal } from 'polykit';
    import Inputs from './Inputs.svelte';

    import { createTask } from '@/tasks.js';

    let open;

    let validate;

    let name = '';
    let description = '';

    function submit() {
        if (!validate()) return;

        const task = {
            name: name.trim(),
            description: description.trim(),
        };

        open = false;

        createTask(task);
    }
</script>

<Modal bind:open let:close>
    <slot slot="activator" name="activator" />

    <card class="no-hover col" style="gap: 22px;">
        <h4>Create Task</h4>

        <Inputs bind:validate bind:name bind:description />

        <div class="row">
            <button class="green" on:click={submit}> Create Task </button>
            <button class="red" on:click={close}> Close </button>
        </div>
    </card>
</Modal>
