<template>
    <main class="py-5">
        <div class="container">

            <div class="row align-items-center">
                <div class="col">

                    <h1>Todo<sup>x</sup></h1>

                </div>
                <div class="col-auto">

                    <TodoCounter />

                </div>
            </div>

            <TodoList />

        </div>
    </main>

    <section class="footer sticky-bottom bg-light border-top">
        <div class="container">

            <div class="row g-2">
                <div class="col-lg">

                    <TodoForm/>

                </div>
                <div class="col-lg-auto">

                    <TodoUtility/>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
import TodoCounter from '@/components/TodoCounter.vue';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoUtility from '@/components/TodoUtility.vue';
import { useTodosStore } from '@/stores/todos'

export default{
    components: {
        TodoCounter,
        TodoList,
        TodoForm,
        TodoUtility
    },

    setup(){
        const todos = useTodosStore();
        return {
            todos
        }
    }
}
</script>
