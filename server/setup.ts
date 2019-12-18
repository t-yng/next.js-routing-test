import express from 'express';
import {router as apiRouter} from '../routes/api';
import Server from 'next/dist/next-server/server/next-server';

export const setup = (app: Server, server: express.Express) => {
    const handle = app.getRequestHandler();

    server.use('/api', apiRouter);
    server.all('*', (req, res) => handle(req, res));

    return server;
}