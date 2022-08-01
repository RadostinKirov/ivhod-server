const mongoose = require('mongoose');

const  DB_CONNECTION_STRING  = 'mongodb+srv://ivhod:ivhodmanager@cluster0.k4qfk.mongodb.net/?retryWrites=true&w=majority'

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        db.on('error', (err) => {
            console.error('connection error: ', err);
            reject(err);
        });
        db.once('open', function () {
            console.log('Database ready');
            resolve();
        });
    });
};