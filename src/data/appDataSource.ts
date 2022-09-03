import { DataSource } from "typeorm";
import Model from "../entities/model.entity";
import { Todo } from "../entities/todo.entity";

const TodoDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "11235813",
    database: "todo",
    entities: [
        Model,
        Todo
    ],
    synchronize: true
});



export default TodoDataSource;
