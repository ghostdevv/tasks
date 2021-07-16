import { writable } from 'svelte-local-storage-store';
import { v4 as uuid } from '@lukeed/uuid';

export const tasks = writable('tasks', []);

export const createTask = (name) =>
    tasks.update((tasks) => [
        {
            id: uuid(),
            name,
            date: Date.now(),
        },
        ...tasks,
    ]);

export const clearTasks = () => tasks.set([]);
