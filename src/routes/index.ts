import { Express, Request, Response } from "express";
import TodoRouter from './TodoRoute';

function routes(app: Express){
    app.use('/todos', TodoRouter);
}

export default routes;