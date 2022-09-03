import { Request, Response } from "express";
import { getTodoByIdAsync, addTodoAsyc, deleteTodoAsyc, getTodosListAsync, updateTodoAsyc } from "../repositories/todoRepository";

export const getTodos = async (request: Request, response: Response) => {
    try{
        const todos = await getTodosListAsync();
        return response.status(200).json({message: "Success", todos});
    }catch(e){
        return response.status(500).json({message: "Something went wrong."});
    }
}

export const getTodoById = async (request: Request, response: Response) => {
    try{
        const todo = await getTodoByIdAsync(+request.params.id);
        return response.status(200).json({message: "Success", todo});
    }catch(e){
        return response.status(500).json({message: "Something went wrong."});
    }
}

export const addTodo = async (request: Request, response: Response) => {
    try{
        await addTodoAsyc(request.body.description);
        return response.status(200).json({message: "Success"});
    }catch(e){
        return response.status(500).json({message: "Something went wrong."});
    }
}

export const deleteTodo = async (request: Request, response: Response) => {
    try{
        await deleteTodoAsyc(+request.params.id);
        return response.status(200).json({message: "Success"});
    }catch(e){
        return response.status(500).json({message: "Something went wrong."});
    }
}

export const updateTodo = async (request: Request, response: Response) => {
    try{
        await updateTodoAsyc(+request.params.id, request.body.description);

        return response.status(200).json({message: "Success"});
    }catch(e){
        return response.status(500).json({message: "Something went wrong."});
    }
}

