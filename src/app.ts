import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import TodoDataSource from './data/appDataSource';
dotenv.config();
const app = express();

TodoDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
});

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));