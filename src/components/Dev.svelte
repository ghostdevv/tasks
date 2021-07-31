<script>
    import { createTask, tasks } from '@/tasks';
    import { fly } from 'svelte/transition';
    import { dev } from '@/config.js';

    function addRandomTasks() {
        const create = () =>
            createTask({ name: Date.now(), completed: Math.random() >= 0.5 });

        for (let x = 0; x < 5; x++) {
            setTimeout(create, x * 200);
        }
    }

    function shuffleTasks() {
        $tasks = $tasks.sort(() => Math.random() - 0.5);
    }
</script>

{#if $dev}
    <banner class="green" transition:fly|local={{ y: 40 }}>
        <div class="row max">
            <p>Dev mode enabled</p>

            <p>|</p>

            <p>
                <a href="https://github.com/ghostdevv/tasks" target="_blank">
                    Github
                </a>
            </p>
        </div>

        <div class="row buttons max">
            <a href="/raw" class="button small">Raw</a>

            <button on:click={addRandomTasks} class="small">
                Random Tasks
            </button>

            <button on:click={shuffleTasks} class="small">
                Shuffle Tasks
            </button>
        </div>
    </banner>
{/if}

<style>
    banner {
        justify-content: space-between;
        align-items: center;
    }

    .max {
        width: max-content;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-shrink: 1;
    }
</style>
