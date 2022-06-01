<template>
    <div class="btn-group w-100" role="group">
        <button type="button" class="btn btn-outline-secondary" @click="todos.sortTodos()"><i class="fa-solid fa-arrow-down-a-z"></i> Sort</button>
        <button type="button" class="btn btn-outline-secondary" @click="todos.cleanTodos()"><i class="fa-solid fa-broom"></i> Clean</button>
        <button type="button" class="btn btn-outline-secondary" @click="todos.resetTodos()"><i class="fa-solid fa-arrow-rotate-right"></i> Reset</button>
    </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore();
</script>