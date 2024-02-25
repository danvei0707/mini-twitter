// import 'dotenv/config'
import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';

import { PORT } from './src/config/env.js';
import { errorController, notFoundController } from './src/controllers/errors/index.js'
import { usersRouter , tweetsRouter } from './src/routes/index.js'


const app = express();

// Configuración de middlewares
app.use(express.json());
app.use(fileUpload());
app.use(morgan('dev'));

// Rutas

// ? Empezando con users Routes

app.use('/users', usersRouter);
app.use('/tweets', tweetsRouter)

// Middlewares de errores
app.use('*', notFoundController);
app.use(errorController);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}...`);
})