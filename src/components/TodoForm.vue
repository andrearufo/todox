<template>
    <form @submit.prevent="todos.addTodo(text)">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="New todo..." aria-label="New todo..." aria-describedby="button-addon" v-model="text" required>
            <button class="btn btn-outline-secondary" type="submit" id="button-addon">Add</button>
        </div>
	</form>            
</template>

<script>
import { useTodosStore } from '@/stores/todos'

export default{
	data(){
		return { 
			text: ''
		}
	},
	
	setup(){
		const todos = useTodosStore();
		return { 
			todos
		}
	}
}
</script>