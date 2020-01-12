const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const chalk = require('chalk');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
// const strings = require('../helpers/strings');
// const app_name = require('../../package.json').name;
// const initializeDb = require('../helpers/db/silc_server_db_initialization').initializeDb;
// const dbInitialized = require('../helpers/db/silc_server_db_initialization').dbInitialized;
global.app = express();
// mongoose.set('useCreateIndex', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(express.static(path.join(__dirname, '../../public')));
var public = path.join(__dirname, 'public');
var options = {
	dotfiles: 'ignore',
	etag: false,
	extensions: ['htm', 'html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function (res, path, stat) {
	  res.set('x-timestamp', Date.now())
	}
  }

  // Handle static folder
app.use(express.static(path.join(__dirname, '/public/')));
// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// app.use(express.static(path.join(__dirname, 'public'), options));
app.use(morgan('common'));
//Set req.user to null for each server request
// app.use('*', function (req, res, next) {
// 	req.user = null;
// 	next();
// });

// app.all('/api/*', function (req, res, next) {
// 	console.log('Mongoose connection readyState: ', mongoose.connection.readyState);
// 	if (mongoose.connection.readyState === 0) {
// 		res.status(503).send('Database connection not available');
// 	}
// 	next();
// });

// require('../app/common/routes/app_routes/app_router');

// const options = {
// 	autoReconnect: true,
// 	reconnectTries: Number.MAX_VALUE,
// 	useNewUrlParser: true,
// 	bufferMaxEntries: 0,
// 	bufferCommands: false
// };

// try {
// 	if (process.env.NODE_ENV === 'TEST') {
// 		var configFile = path.join(__dirname, '../config/.env');
// 		dotenv.load({ path: configFile });
// 	}
// } catch (error) {

// 	console.log(strings.error_messages.connection_error, error.message);
// }

// var db_connection = mongoose.connection;
// db_connection.setMaxListeners(0);
// process.on('SIGINT', function () {
// 	db_connection.close(function () {
// 		console.log(strings.error_messages.connection_closed_sigint, chalk.red('X'));
// 		process.exit(0);
// 	});
// });

// db_connection.on('error', (error, next) => {
// 	console.error('[' + app_name + '] ', strings.error_messages.connection_error + error.message, chalk.red('X'));
// 	next(error);
// });

// db_connection.on('disconnected', function () {
// 	console.log('[' + app_name + '] ', strings.error_messages.connection_closed_db_server,
// 		chalk.red('X'));

// });

// db_connection.on('connected', async function () {
// 	console.log('[' + app_name + '] ', strings.info_messages.connected_to_db_server,
// 		chalk.green('✓'));
// 	let db_boot_strap_done = await dbInitialized();
// 	if (db_boot_strap_done === false) {
// 		console.log('[' + app_name + '] ' + 'Attempting to initialize collections in the silc server database...');
// 		await initializeDb();
// 	}
// 	else if (db_boot_strap_done === true) {
// 		console.log('[' + app_name + ']  [Skipped db initialization] ' + 'Default database collections in the silc server database already initialized...');
// 	}
// });

// db_connection.on('reconnectFailed', function () {
// 	console.log('[' + app_name + '] ', strings.error_messages.connection_failed_max_retries, chalk.red('X'));
// });

// db_connection.on('connecting', function () {
// 	console.log('[' + app_name + '] ', strings.info_messages.connecting_to_db_server);
// });

// db_connection.on('disconnecting', function () {
// 	console.log('[' + app_name + '] ', strings.info_messages.disconnecting_from_db_server,
// 		chalk.red('X'));
// });

// db_connection.on('timeout', function () {
// 	console.log('Timeout...');
// });

// mongoose.connect(process.env.MONGODB_URL, options);
// app.use(function (err, req, res, next) {
// 	console.log('[silcserver] Error:', err.message + '\n Stack Trace: ' + err.stack);

// 	res.json({
// 		status: err.status === null ? 404 : err.status,
// 		message: err.message === null ? 'Not found' : err.message
// 	}).send().end();
// 	console.log('Called global error handler');
// });
let PORT = process.env.PORT || 3000;

let server = app.listen(PORT, function () {
	console.log(`listening on port ${PORT} `);
});

module.exports = server;