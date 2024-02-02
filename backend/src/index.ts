import express from 'express';
import {connectDb} from './db/dbConnect';
import users from './routes/users';
import login from './routes/login';
import cors from 'cors';
import singup from './routes/singup';
import createTodo from './routes/createTodo';
import getTodo from './routes/getTodo';
import updateTodo from './routes/updataTodo';
import deleteTodo from './routes/deleteTodo';
const PORT = 3001;
const bodyParser = require('body-parser');
const app = express();
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
connectDb();
app.use('/', users);
app.use('/singup', singup);
app.use('/login', login);
app.use('/createTodo', createTodo);
app.use('/getTodo', getTodo);
app.use('/updateTodo', updateTodo);
app.use('/deleteTodo', deleteTodo);
app.listen(PORT, () => {
    console.log(`server is connected on port ${PORT}`);
})