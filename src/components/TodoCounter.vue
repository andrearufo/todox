<template>
	<div>

		<ul class="list-inline">
			<li class="list-inline-item"><span class="badge rounded-pill text-bg-secondary">{{ todos.total }}</span></li>
			<li class="list-inline-item"><span class="badge rounded-pill text-bg-success">{{ todos.completed }}</span></li>
			<li class="list-inline-item"><span class="badge rounded-pill text-bg-warning">{{ todos.uncompleted }}</span></li>
		</ul>
	
	</div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore();
</script>