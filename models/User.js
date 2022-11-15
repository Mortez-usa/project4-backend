const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	sleep: {
		type: 'number',
		required: [true, 'Please enter your sleep hour'],
	},
	age: {
		type: 'number',
		required: [true, 'Please enter your year old'],
	},
	gender: {
		type: 'string',
		required: [true, 'Please enter your gender'],
	},
	usState: {
		type: 'string',
		// required: [true, 'Please enter your location'],
	},
	weight: {
		type: 'number',
		required: [true, 'Please enter your weight'],
	},
	height: {
		type: 'number',
		required: [true, 'Please enter your height'],
	},
});

module.exports = mongoose.model('User', userSchema);