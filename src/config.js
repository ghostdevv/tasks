import { writable as localWritable } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

export const dev = writable(false);
export const showCompletedTasks = localWritable('showCompletedTasks', false);
