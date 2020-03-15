// Import all dependencies & middleware here
import express from 'express';

// Init an Express App.
const app = express();

// Use your dependecies here

// use all controllers(APIs) here
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server Run successfully'
  });
});

// Start Server here
app.listen(8080, () => {
  console.log('Server is running on port 8080!');
});
