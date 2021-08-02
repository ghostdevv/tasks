<script>
    export let name = '';
    export let description = '';

    let nameError;

    export function validate() {
        nameError = false;

        if (name.length == 0 || name.trim() == '') {
            nameError = true;
            return false;
        }

        return true;
    }
</script>

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
