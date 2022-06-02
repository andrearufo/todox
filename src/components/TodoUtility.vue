<template>
    <div class="btn-group w-100" role="group">

        <button type="button" class="btn btn-outline-secondary" @click="todos.sortTodos()">
            <i class="fa-solid fa-arrow-down-a-z"></i>
            <span class="sr-only">Sort</span>
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="todos.cleanTodos()">
            <i class="fa-solid fa-broom"></i>
            <span class="sr-only">Clean</span>
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="todos.resetTodos()">
            <i class="fa-solid fa-arrow-rotate-right"></i>
            <span class="sr-only">Reset</span>
        </button>

    </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore();
</script>
