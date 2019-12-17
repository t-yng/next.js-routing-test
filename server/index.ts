import express from 'express'
import next from 'next'
import {router as apiRouter} from '../routes/api';

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use('/api', apiRouter);
  

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  });
})
