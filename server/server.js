require('./config/config');

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();

app.use(express.static(publicPath));



app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = {app};

/*
git commit
github directory
git push to github
create heroku app and deploy to it
*/