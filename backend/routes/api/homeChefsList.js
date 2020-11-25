const express = require('express');
const asyncHandler = require('express-async-handler');
const { Home_Chefs } = require('../../db/models');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const chefsList = await Home_Chefs.findAll();
		return res.json({ ...chefsList });
	})
);

module.exports = router;
