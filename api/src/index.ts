import express from 'express';
import { Application } from 'express';

const app:Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const server = app.listen(port);

console.log(`Aplicação rodando na porta ${port}`);
