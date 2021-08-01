<script>
    import { clickOutside } from 'svelte-use-click-outside';
    import { fade } from 'svelte/transition';

    export let open = false;

    function closer() {
        open = false;
    }

    function opener() {
        open = true;
    }

    function handleKeydown(event) {
        const { key } = event;
        if (key.toLowerCase() == 'escape') closer();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="activator" on:click={opener}>
    <slot name="activator" />
</div>

{#if open}
    <div class="modal-backdrop" in:fade />

    <modal use:clickOutside={closer} in:fade>
        <slot close={closer} open={opener} />
    </modal>
{/if}

<style lang="scss">
    modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 15000;

        width: max-content;

        overflow: auto;
        overscroll-behavior: contain;

        min-width: 280px;
        width: 100%;
        max-width: 800px;
        padding: 0px 16px;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;

        z-index: 14000;

        width: 100%;
        height: 100%;

        background-color: #000;
        opacity: 0.4;
    }

    .activator {
        display: contents;
    }
</style>
