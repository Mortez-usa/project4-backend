const express = require('express');
const User = require('../models/User');

const router = express.Router();



router.post('/', async (req, res, next) => {
	try {
		const sleep = req.body.sleep;
		const age = req.body.age;
		const gender = req.body.gender;
		const usState = req.body.usState;
		const weight = req.body.weight;
		const height = req.body.height;
		const user = await User.create({
			sleep:req.body.sleep,
			age: req.body.age,
			gender: req.body.gender,
			usState: req.body.usState,
			weight: req.body.weight,
			height: req.body.height,
		});
		return res.status(201).json(user);
	} catch (error) {
		return next(error);
	}
});

module.exports = router