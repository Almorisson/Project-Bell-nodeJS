/**
 * Imports all native necessary libs
 */
//const http = require('http');

/**
 * Imports all dependency libs
 */
const express = require('./node_modules/express');
const bodyParser = require('./node_modules/body-parser');
const mongoose = require('mongoose');
const config = require('./config/index');
const soundRouter = require('./routes/soundRoute')
const cors = require('./node_modules/cors');
const soundEndpointsDocs = require('./docs/soundEndpoints');

//const mongojs = require('mongojs');
// const db = mongojs('mydb');
//const db = mongojs(`${config.MONGO_URI_LOCAL}`, ['db']);

// Configure the loading of .env file
// TODO: Fix the line below - Don't work properly
//require('dotenv').config({ debug: process.env.DEBUG}); // Import all ENV Variable in the .env file
/**
 * All Constants that we mainly use in the project
 */
const HOST = config.HOST || '0.0.0.0';
const PORT = config.PORT || 5000;

const app = express();
// using Cors
app.use(cors());

//DB connection
mongoose
	.connect(config.MONGO_URI_ATLAS, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB Connected'))
	.catch(err => console.log(err.message));

// Catch all connections errors with an event of type error
mongoose.connection.on('error', (err) => {
	console.log(`DB connection error: ${err.message}`);
});

/**
 * Using body-parser middleware
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Calling all routes
 */
// TODO: API DOC for all available resources
//app.use('/api/v1/', soundEndpointsDocs);

app.use('/sounds', soundRouter);

//app.use('/api/v1/sounds', soundRoute);

app.listen(PORT, HOST, () => {
	console.log(`Server is listening on ${HOST}:${PORT}`);
});