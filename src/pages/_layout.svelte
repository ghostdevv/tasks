<script>
    import Dev from '@/components/Dev.svelte';
</script>

<Dev />

<div class="wrapper">
    <slot />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 16px;
    }
</style>
