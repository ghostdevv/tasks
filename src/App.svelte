<script>
    import { routes } from '../.routify/routes';
    import Dev from '@/components/Dev.svelte';
    import { hotkeys } from 'svelte-hotkeys';
    import { Router } from '@roxi/routify';
    import { dev } from '@/config.js';
</script>

<Router {routes} />

<div class="banners col">
    <banner class="red">
        <p>
            <strong>You are offline</strong>
        </p>
    </banner>

    <Dev />
</div>

<svelte:window
    use:hotkeys={{
        keys: 'ctrl+alt+d,command+alt+d',
        handler: () => ($dev = !$dev),
    }} />

<style>
    .banners {
        position: fixed;
        z-index: 10000;
        bottom: 0;

        width: 100%;
    }
</style>
