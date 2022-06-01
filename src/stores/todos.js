import { defineStore } from 'pinia'

export const useTodosStore = defineStore({
    id: 'todos',

    state: () => ({
        list: [
            {
                body: 'Lorem ipsum',
                is_complete: false
            },
            {
                body: 'Dolem esset',
                is_complete: true
            }
        ]
    }),

    getters: {
        total: (state) => state.list.length,
        completed: (state) => state.list.filter( item => item.is_complete ).length,
        uncompleted: (state) => state.list.filter( item => !item.is_complete ).length,
    },

    actions: {
        addTodo(text) {
            return this.list.push({
                body: text,
                is_complete: false
            })
        },

        removeTodo(index) {
            return this.list.splice(index, 1);
        },

        moveUp(index){
            this.moveTodo(index, index - 1);
        },

        moveDown(index){
            this.moveTodo(index, index + 1);
        },

        moveTodo(old_index, new_index) {
            while (old_index < 0) {
                old_index += this.list.length;
            }
            while (new_index < 0) {
                new_index += this.list.length;
            }
            if (new_index >= this.list.length) {
                var k = new_index - this.list.length + 1;
                while (k--) {
                    this.list.push(undefined);
                }
            }
            this.list.splice(new_index, 0, this.list.splice(old_index, 1)[0]);
            // return this.list; // for testing purposes
        }
    }
})
