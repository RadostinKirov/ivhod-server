const express = require('express');

const databaseConfig = require('./config/database');

const PORT = 3000;

start();

async function start() {
    const app = express();

    await databaseConfig(app);

    app.get('/', (req, res) => res.send('It works!'));
    app.listen(PORT, () => {
        console.log(`Application started at http://localhost:${PORT}`)
    });

};



