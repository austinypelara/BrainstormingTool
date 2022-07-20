import { writable } from 'svelte/store'

export const undoStack = writable([]);