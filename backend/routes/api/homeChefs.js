const express = require('express');
const asyncHandler = require('express-async-handler');
const { Home_Chef, Cuisine, Home_Chef_Cuisine } = require('../../db/models');
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

router.post(
	'/cuisines',
	asyncHandler(async (req, res, next) => {
		const { homeChefId } = req.body;
		const homeChefCuisines = await Home_Chef_Cuisine.findAll({
			where: {
				home_chef_id: homeChefId,
			},
		});

		return res.json(homeChefCuisines);
	})
);

module.exports = router;
