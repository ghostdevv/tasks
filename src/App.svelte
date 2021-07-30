<script>
    import { routes } from '../.routify/routes';
    import { hotkeys } from 'svelte-hotkeys';
    import { Router } from '@roxi/routify';
    import { dev } from '@/config.js';
</script>

<Router {routes} />

<svelte:window
    use:hotkeys={{
        keys: 'ctrl+alt+d,command+alt+d',
        handler: () => ($dev = !$dev),
    }} />
