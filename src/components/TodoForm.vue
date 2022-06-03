<template>
    <form @submit.prevent="addTodo()">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Add a new todo..." aria-label="New todo..." aria-describedby="button-addon" v-model="text" required>
            <button class="btn btn-secondary" type="submit" id="button-addon">
                <i class="fa-solid fa-circle-plus"></i>
            </button>
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

    methods: {
        addTodo(){
            this.todos.addTodo(this.text);
            this.text = '';
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
