import express from 'express';
import { Application } from 'express';
import router from './router';

const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const server = app.listen(port);

app.use(router);
console.log(`Aplicação rodando na porta ${port}`);
