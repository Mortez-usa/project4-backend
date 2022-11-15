const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.set('port', process.env.PORT || 4000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const mongoose = require('./db/connections').default;

const userController = require('./controllers/userController');
app.use('/api', userController);





app.listen(app.get('port'), () => {
	console.log(`✅ Listening on port ${app.get('port')}`);
});
