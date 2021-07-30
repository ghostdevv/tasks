import { writable } from 'svelte-local-storage-store';
import { v4 as uuid } from '@lukeed/uuid';
import { get } from 'svelte/store';

export const tasks = writable('tasks', []);

export const createTask = (name) =>
    tasks.update((tasks) => [
        {
            id: uuid(),
            name,
            completed: false,
            date: Date.now(),
        },
        ...tasks,
    ]);

export const updateTask = (id, v) =>
    tasks.update((tasks) =>
        tasks.map((t) => {
            if (t.id == id) {
                t = { ...t, ...v };
            }

            return t;
        }),
    );

export const getTask = (id) => get(tasks).find((t) => t.id == id);

export const clearTasks = () => tasks.set([]);

export const deleteTask = (id) =>
    tasks.update((t) => t.filter((t) => t.id != id));
