<script>
    import { fly } from 'svelte/transition';
    import { createTask } from '@/tasks';
    import { dev } from '@/config.js';

    function addRandomTasks() {
        for (let x = 0; x < 5; x++) {
            setTimeout(
                () =>
                    createTask(Date.now(), { completed: Math.random() >= 0.5 }),
                x * 200,
            );
        }
    }
</script>

{#if $dev}
    <banner
        class="green"
        style="justify-content: space-between;"
        transition:fly|local={{ y: 40 }}>
        <p>Dev mode enabled</p>

        <div class="row buttons">
            <a href="/raw" class="button small">Raw</a>

            <button on:click={addRandomTasks} class="small">
                Random Tasks
            </button>
        </div>
    </banner>
{/if}

<style>
    .buttons {
        display: flex;
        justify-content: flex-end;
        flex-shrink: 1;
        width: max-content;
    }
</style>
