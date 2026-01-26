import express from 'express';
import usersRouter from './routes/users.js';
import errorHandler from './middlewares/errors/index.js';

const app = express();
const server = app.listen(8080, () => console.log("Listening"));

app.use(express.json());
app.use('/api/users', usersRouter);
app.use(errorHandler);