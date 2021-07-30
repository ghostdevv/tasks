<script>
    import Dev from '@/components/Dev.svelte';
</script>

<div class="controls">
    <Dev />
</div>

<div class="slot">
    <slot />
</div>

<style lang="scss">
    .controls {
        position: fixed;
        z-index: 10000;
        bottom: 0;

        width: 100%;
    }

    .slot {
        display: flex;
        flex-direction: column;

        padding: 0px 16px;
        position: relative;

        width: 100%;
        height: 100%;
    }
</style>
