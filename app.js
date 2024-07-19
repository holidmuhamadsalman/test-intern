require('dotenv').config()

const express = require('express');
const app = express();
const routers = require('./routes');
const port = process.env.PORT || 8050;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173',
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', routers);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`\n\tListening on http://localhost:${port}\n`);
  });
}

module.exports = app;
