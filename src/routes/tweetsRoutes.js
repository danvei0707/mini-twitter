import express from 'express';

// Importar desde controllers y middleware
// (Revisar func. carpetas)

const tweetsRouter = express.Router();

tweetsRouter.get('/register', registerNewUser)

export { tweetsRouter };