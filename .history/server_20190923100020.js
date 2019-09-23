const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');


// load env 
dotenv.config({ path: './config.env' });

const app = express();




// profile routers

app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`);
});