<template>
	<div class="container py-5">

		<!-- <img src="@/assets/logo.svg" /> -->
		
		<div class="row align-items-center">
			<div class="col">
				
				<h1>Todox</h1>

			</div>
			<div class="col-auto">
				
				<TodoCounter />

			</div>
		</div>

		<TodoList />

		<TodoForm/>

	</div>
</template>

<script setup>
import TodoCounter from '@/components/TodoCounter.vue';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';

import { useTodosStore } from '@/stores/todos';
const todos = useTodosStore();
</script>

<style lang="scss">
	@import "./assets/style.scss";
</style>
