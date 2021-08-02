<script>
    import InstallPWAModal from '@/components/InstallPWAModal.svelte';
    import { routes } from '../.routify/routes';
    import { slide } from 'svelte/transition';
    import Dev from '@/components/Dev.svelte';
    import { hotkeys } from 'svelte-hotkeys';
    import { Router } from '@roxi/routify';
    import { dev } from '@/config.js';

    let online = true;
</script>

<InstallPWAModal />

<Router {routes} />

<div class="banners col" style="gap: 0px;">
    {#if !online}
        <banner class="red" transition:slide|local>
            <p>
                <strong>You are offline</strong>
            </p>
        </banner>
    {/if}

    <Dev />
</div>

<svelte:window
    use:hotkeys={{
        keys: 'ctrl+alt+d,command+alt+d',
        handler: () => ($dev = !$dev),
    }}
    bind:online />

<style>
    .banners {
        position: fixed;
        z-index: 10000;
        bottom: 0;

        width: 100%;
    }
</style>
