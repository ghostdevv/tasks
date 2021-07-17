import { writable } from 'svelte-local-storage-store';
import { v4 as uuid } from '@lukeed/uuid';
import { get } from 'svelte/store';

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

export const updateTask = (id, name) =>
    tasks.update((tasks) =>
        tasks.map((t) => {
            if (t.id == id) {
                t.name = name;
            }

            return t;
        }),
    );

export const getTask = (id) => get(tasks).find((t) => t.id == id);

export const clearTasks = () => tasks.set([]);
