import TodoDataSource from '../data/appDataSource';
import { Todo } from '../entities/todo.entity';

export const getTodosListAsync = async () => {
    const todos = await TodoDataSource.manager.find(Todo);
    return todos;
}

export const getTodoByIdAsync = async (id: number) => {
    const todo = await TodoDataSource.manager.findOneBy(Todo, {id});

    return todo;
}

export const addTodoAsyc = async (description: string) => {
    await TodoDataSource.createQueryBuilder().insert().into(Todo).values({description}).execute();
}

export const updateTodoAsyc = async (id: number, description: string) => {
    await TodoDataSource.createQueryBuilder().update(Todo).set({description}).where("id = :id", {id: id}).execute();
}

export const deleteTodoAsyc = async (id: number) => {
    await TodoDataSource.createQueryBuilder().delete().from(Todo).where("id = :id", {id: id}).execute();
}