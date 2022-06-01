<template>
    <form @submit.prevent="() => { todos.addTodo(text); text = '' }">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="New todo..." aria-label="New todo..." aria-describedby="button-addon" v-model="text" required>
            <button class="btn btn-secondary" type="submit" id="button-addon">Add</button>
        </div>
	</form>            
</template>

<script setup>
import { useTodosStore } from '@/stores/todos'
const todos = useTodosStore();
</script>

<script>
export default{
	data(){
		return { 
			text: ''
		}
	},
}
</script>