<script>
    import { slide } from 'svelte/transition';
    import { dev } from '@/config.js';
</script>

{#if $dev}
    <banner
        class="green"
        style="justify-content: space-between;"
        transition:slide>
        <p>Dev mode enabled</p>

        <div class="row buttons">
            <a href="/raw" class="button small">Raw</a>
        </div>
    </banner>
{/if}

<div class="wrapper">
    <slot />
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 16px;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        flex-shrink: 1;
        width: max-content;
    }
</style>
