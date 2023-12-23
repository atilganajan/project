const mongoose = require('mongoose');

const host = process.env.host;
const port = process.env.port;
const username = process.env.userrname;
const password = process.env.password;
const databaseName = process.env.databaseName;

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`);

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(`DB connection failed: ${error}`);
});

db.once('open', async () => {
    console.log('DB connection successful');
});


