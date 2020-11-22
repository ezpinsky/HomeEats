const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
	check('email')
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage('Please provide a valid email.'),
	check('first_name')
		.exists({ checkFalsy: true })
		.isLength({ min: 2, max: 50 })
		.withMessage('Please provide a first name.'),
	check('last_name')
		.exists({ checkFalsy: true })
		.isLength({ min: 2, max: 50 })
		.withMessage('Please provide a last name.'),
	check('first_name').not().isEmail().withMessage('First name cannot be an email.'),
	check('last_name').not().isEmail().withMessage('Last name cannot be an email.'),
	check('password')
		.exists({ checkFalsy: true })
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters or more.'),
	check('zip')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a zip code')
		.isLength({ min: 5, max: 5 })
		.withMessage('Zip code must be five numbers in length')
		.custom(value => {
			const reg = /^[\d-]+$/;
			if (!value.match(reg)) {
				throw new Error('Zip code must only contain numbers');
			}
			return true;
		}),
	handleValidationErrors,
];

// Sign up
router.post(
	'',
	validateSignup,
	asyncHandler(async (req, res) => {
		const { email, password, last_name, first_name, zip } = req.body;
		const user = await User.signup({ email, last_name, first_name, zip, password });

		await setTokenCookie(res, user);

		return res.json({
			user,
		});
	})
);

module.exports = router;
