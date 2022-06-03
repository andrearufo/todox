<template>
    <main class="py-5">
        <div class="container">

            <!-- <img src="@/assets/logo.svg" /> -->

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

		<!-- <div class="text-center text-muted">
			<div>
				Made with
				<i class="fa-solid fa-heart text-danger"></i>
				and
				<i class="fa-solid fa-code text-warning"></i>
				by
				<a href="https://www.andrearufo.it" class="text-muted">Andrea Rufo</a>
			</div>
			<div>
				<a href="https://github.com/andrearufo/todox" class="text-muted">
					<i class="fa-brands fa-github"></i>
					https://github.com/andrearufo/todox
				</a>
			</div>
		</div> -->

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
