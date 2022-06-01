import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore({
    id: 'todos',

    state: () => ({
        list: useStorage('list', [ ])
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
        },

        resetTodos(){
            if( confirm('Are you sure?') )
                this.list = [];
        }
    }
})