<script>
    import { routes } from '../.routify/routes';
    import { Router } from '@roxi/routify';
    import { hotkeys } from 'svelte-hotkeys';
    import { dev } from '@/config.js';
</script>

<Router {routes} />

<svelte:window
    use:hotkeys={{
        keys: 'ctrl+alt+d,command+alt+d',
        handler: () => ($dev = !$dev),
    }} />
