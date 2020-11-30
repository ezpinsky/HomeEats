'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Cuisines',
			[
				{ name: 'Peruvian' },
				{ name: 'Pizzeria' },
				{ name: 'Chinese' },
				{ name: 'Asian' },
				{ name: 'Japanese' },
				{ name: 'Mexican' },
				{ name: 'Fast Food' },
				{ name: 'BBQ' },
				{ name: 'Mediterranean' },
				{ name: 'Bakery' },
				{ name: 'Steakhouse' },
				{ name: 'Indian' },
				{ name: 'Italian' },
				{ name: 'Thai' },
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Cuisines', null, {});
	},
};
