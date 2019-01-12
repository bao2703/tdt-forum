import { createServer } from 'http';
import { PORT } from './config';
import app from './app';
import './db';

const server = createServer(app);

server.listen(PORT, () =>
  console.log(`Magic happens on http://localhost:${PORT}`)
);
