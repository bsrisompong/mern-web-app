// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';

import { userController } from './controller';

// Init an Express App.
const app = express();

// Use your dependecies here
app.use(bodyParser.urlencoded({ extended: fasle }));
app.use(bodyParser.json());

// use all controllers(APIs) here
app.get('/', (req, res) => {
  app.use('/', userController);
});

// Start Server here
app.listen(8080, () => {
  console.log('Server is running on port 8080!');
});
