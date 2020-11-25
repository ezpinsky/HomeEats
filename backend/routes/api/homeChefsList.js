const express = require('express');
const asyncHandler = require('express-async-handler');
const { Home_Chef } = require('../../db/models');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const chefsList = await Home_Chef.findAll();
		return res.json(chefsList);
	})
);

module.exports = router;
