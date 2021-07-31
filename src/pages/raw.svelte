<script>
    import { tasks, clearTasks } from '@/tasks';
</script>

<div class="col g16" style="padding: 16px 0px;">
    <div class="row">
        <a href="/" class="button">Back</a>
        <button on:click={clearTasks}>Clear</button>
    </div>

    <pre>
        {JSON.stringify($tasks, null, 4)}
    </pre>
</div>
