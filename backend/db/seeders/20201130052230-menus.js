'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Menus',
			[
				{
					home_chef_id: 1,
					name: 'Catering',
					eat_options: ['Delivery'],
				},
				{
					home_chef_id: 2,
					name: 'Snack',
					eat_options: ['Dine-in', 'Delivery'],
				},
				{
					home_chef_id: 3,
					name: 'Snack',
					eat_options: ['Delivery', 'Dine-in'],
				},
				{ home_chef_id: 4, name: 'Dinner', eat_options: ['Dine-in'] },
				{
					home_chef_id: 5,
					name: 'Breakfast',
					eat_options: ['Pick-up', 'Ship'],
				},
				{
					home_chef_id: 6,
					name: 'Lunch',
					eat_options: ['Pick-up', 'Dine-in'],
				},
				{
					home_chef_id: 7,
					name: 'Snack',
					eat_options: ['Dine-in', 'Delivery'],
				},
				{
					home_chef_id: 8,
					name: 'Breakfast',
					eat_options: ['Ship', 'Pick-up'],
				},
				{ home_chef_id: 9, name: 'Snack', eat_options: ['Pick-up'] },
				{
					home_chef_id: 10,
					name: 'Dinner',
					eat_options: ['Ship', 'Dine-in'],
				},
				{
					home_chef_id: 11,
					name: 'Snack',
					eat_options: ['Dine-in', 'Pick-up'],
				},
				{ home_chef_id: 12, name: 'Catering', eat_options: ['Ship'] },
				{ home_chef_id: 13, name: 'Snack', eat_options: ['Dine-in'] },
				{
					home_chef_id: 14,
					name: 'Breakfast',
					eat_options: ['Dine-in', 'Delivery'],
				},
				{
					home_chef_id: 15,
					name: 'Breakfast',
					eat_options: ['Ship', 'Dine-in'],
				},
				{
					home_chef_id: 16,
					name: 'Breakfast',
					eat_options: ['Delivery', 'Ship'],
				},
				{
					home_chef_id: 17,
					name: 'Snack',
					eat_options: ['Dine-in', 'Ship'],
				},
				{ home_chef_id: 18, name: 'Lunch', eat_options: ['Dine-in'] },
				{
					home_chef_id: 19,
					name: 'Breakfast',
					eat_options: ['Ship', 'Delivery'],
				},
				{
					home_chef_id: 20,
					name: 'Lunch',
					eat_options: ['Dine-in', 'Pick-up'],
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Menus', null, {});
	},
};
