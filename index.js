const express = require('express');
const db = require('./data/db');

const postRoutes = require('./posts/postRoutes');
const server = express();
server.use(express.json());

server.use('/api/posts', postRoutes);

server.listen(8000, () => console.log('Server listening on port 8000'));

