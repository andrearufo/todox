<template>
	<div v-if="todos.total > 0">
		<ul class="list-group" v-auto-animate>
			<li
			v-for="item, index in todos.list"
			:key="item"
			class="list-group-item"
			:class="{
				'bg-light': item.is_complete
			}"
			>

				<div class="row">
					<div class="col">

						<div class="form-check">
							<input class="form-check-input"  type="checkbox" :id="'todo-'+index" v-model="item.is_complete">
							<label class="form-check-label w-100" :for="'todo-'+index">
								{{ item.body }}
							</label>
						</div>

					</div>
					<div class="col-auto text-end">

						<div class="btn-group" role="group" aria-label="Todo actions">
							<button class="btn btn-sm btn-outline-secondary" type="button" @click="todos.moveUp(index)" :disabled="index == 0">
								<i class="fa-solid fa-fw fa-angle-up"></i>
							</button>
							<button class="btn btn-sm btn-outline-secondary" type="button" @click="todos.moveDown(index)" :disabled="index == todos.list.length - 1">
								<i class="fa-solid fa-fw fa-angle-down"></i>
							</button>
							<button class="btn btn-sm btn-danger" type="button" @click="todos.removeTodo(index)">
								<i class="fa-solid fa-fw fa-delete-left"></i>
							</button>
						</div>

					</div>
				</div>

			</li>
		</ul>
	</div>
	<div class="alert alert-info" v-else>
		No todox in your list... Add the first one!
	</div>
</template>

<script>
import { useTodosStore } from '@/stores/todos'

export default{
    setup(){
        const todos = useTodosStore();
        return {
            todos
        }
    }
}
</script>
