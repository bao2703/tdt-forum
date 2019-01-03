import 'dotenv/config';
import { createServer } from 'http';
import app from './app';

const port = process.env.PORT;
const server = createServer(app);

server.listen(port, () => console.log('Magic happens on port ' + port));
