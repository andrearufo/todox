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
            },
            {
                body: 'Quam esseat',
                is_complete: true
            },
            {
                body: 'Non videri',
                is_complete: false
            },
            {
                body: 'In fabula',
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
            if( confirm('Are you sure?') )
                this.list.splice(index, 1);
        },

        moveUp(index){
            if(index > 0){
                [ this.list[index-1], this.list[index] ] = [ this.list[index], this.list[index - 1] ]
            }
        },

        moveDown(index){
            if(index < this.list.length){
                [ this.list[index], this.list[index+1] ] = [ this.list[index+1], this.list[index] ]
            }
        },

        sortTodos(){
            this.list.sort( (a,b) => {
                return a.body < b.body ? -1 : 1;
            });
        },

        cleanTodos(){
            if( confirm('Are you sure?') )
                this.list = this.list.filter( (item) => !item.is_complete );
        }
    }
})
