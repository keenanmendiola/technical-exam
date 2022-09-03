import { Router, Request, Response } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo, getTodoById } from "../services/TodoService";

const todoRouter = Router();

todoRouter.get('/', getTodos);
todoRouter.get('/:id', getTodoById);
todoRouter.post('/', addTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.put('/:id', updateTodo);

export default todoRouter;