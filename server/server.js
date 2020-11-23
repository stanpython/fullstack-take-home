const express = require('express');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();
const port = 8080;

// Handle parsing request body
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// Start server
app.listen(port, () => {
  console.log(`Course Signup Server listening at http://localhost:${port}`);
});
