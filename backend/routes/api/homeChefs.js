const express = require('express');
const asyncHandler = require('express-async-handler');
const { default: Home } = require('../../../frontend/src/components/Home');
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

		// const cuisines = await Cuisine.findByPk(homeChefId, {
		// 	include: [
		// 		{
		// 			model: Home_Chef,
		// 			as: 'Home_Chef',
		// 			attributes: ['name'],
		// 			through: { attributes: ['home_chef_id', 'cuisine_id'] },
		// 		},
		// 	],
		// });
		// console.log(cuisines);
		return res.json(chefInfo);
	})
);

module.exports = router;
