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

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		const { homeChefId } = req.body;
		const chefInfo = await Home_Chef.findOne({
			where: {
				id: homeChefId,
			},
		});
		return res.json(chefInfo);
	})
);

module.exports = router;
