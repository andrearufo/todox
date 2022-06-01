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

		<div class="row g-2">
			<div class="col-lg">

				<TodoForm/>

			</div>
			<div class="col-lg-auto">

				<TodoUtility/>
				
			</div>
		</div>

	</div>
</template>

<script setup>
import TodoCounter from '@/components/TodoCounter.vue';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoUtility from '@/components/TodoUtility.vue';

import { useTodosStore } from '@/stores/todos';
const todos = useTodosStore();
</script>

<style lang="scss">
	@import "./assets/style.scss";
</style>
