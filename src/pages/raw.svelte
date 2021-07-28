<script>
    import { tasks, clearTasks } from '.@/tasks';
</script>

<div class="row">
    <a href="/tasks" class="button">Back</a>
    <button on:click={clearTasks}>Clear</button>
</div>

<pre>
    {JSON.stringify($tasks, null, 4)}
</pre>
