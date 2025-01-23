// Create web server with express 
// and use the comments route to get and post comments

const express = require('express');
const app = express();
const comments = require('./comments.js');

app.use('/comments', comments);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


