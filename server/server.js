const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./db');

const app = express();

//* inits */
dotenv.config();
connectDb();

app.get('/', (req, res) => {
   res.json({ success: true });
});

app.listen(process.env.PORT || 5000, () => {
   console.log('Server is running on port:', process.env.PORT || 5000);
});
