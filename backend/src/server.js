import { createServer } from 'http';
import mongoose from 'mongoose';
import { PORT, MONGO_PORT } from './config';
import app from './app';

const server = createServer(app);

server.listen(PORT, () =>
  console.log(`Magic happens on http://localhost:${PORT}`)
);

mongoose.connect(
  `mongodb://mongo:${MONGO_PORT}/test`,
  { useNewUrlParser: true }
);
