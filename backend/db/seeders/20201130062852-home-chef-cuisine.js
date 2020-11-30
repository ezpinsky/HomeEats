'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Home_Chef_Cuisines',
			[
				{ cuisine_id: 1, home_chef_id: 1 },
				{ cuisine_id: 2, home_chef_id: 2 },
				{ cuisine_id: 4, home_chef_id: 2 },
				{ cuisine_id: 11, home_chef_id: 3 },
				{ cuisine_id: 5, home_chef_id: 4 },
				{ cuisine_id: 2, home_chef_id: 4 },
				{ cuisine_id: 11, home_chef_id: 5 },
				{ cuisine_id: 7, home_chef_id: 6 },
				{ cuisine_id: 6, home_chef_id: 6 },
				{ cuisine_id: 3, home_chef_id: 6 },
				{ cuisine_id: 11, home_chef_id: 6 },
				{ cuisine_id: 7, home_chef_id: 7 },
				{ cuisine_id: 10, home_chef_id: 7 },
				{ cuisine_id: 5, home_chef_id: 7 },
				{ cuisine_id: 9, home_chef_id: 7 },
				{ cuisine_id: 3, home_chef_id: 8 },
				{ cuisine_id: 5, home_chef_id: 8 },
				{ cuisine_id: 7, home_chef_id: 8 },
				{ cuisine_id: 1, home_chef_id: 9 },
				{ cuisine_id: 3, home_chef_id: 9 },
				{ cuisine_id: 3, home_chef_id: 10 },
				{ cuisine_id: 2, home_chef_id: 10 },
				{ cuisine_id: 10, home_chef_id: 10 },
				{ cuisine_id: 7, home_chef_id: 10 },
				{ cuisine_id: 11, home_chef_id: 11 },
				{ cuisine_id: 4, home_chef_id: 11 },
				{ cuisine_id: 3, home_chef_id: 11 },
				{ cuisine_id: 8, home_chef_id: 11 },
				{ cuisine_id: 1, home_chef_id: 12 },
				{ cuisine_id: 8, home_chef_id: 13 },
				{ cuisine_id: 7, home_chef_id: 14 },
				{ cuisine_id: 6, home_chef_id: 15 },
				{ cuisine_id: 11, home_chef_id: 15 },
				{ cuisine_id: 2, home_chef_id: 15 },
				{ cuisine_id: 8, home_chef_id: 15 },
				{ cuisine_id: 8, home_chef_id: 16 },
				{ cuisine_id: 9, home_chef_id: 16 },
				{ cuisine_id: 3, home_chef_id: 17 },
				{ cuisine_id: 1, home_chef_id: 17 },
				{ cuisine_id: 2, home_chef_id: 17 },
				{ cuisine_id: 3, home_chef_id: 18 },
				{ cuisine_id: 5, home_chef_id: 18 },
				{ cuisine_id: 8, home_chef_id: 18 },
				{ cuisine_id: 6, home_chef_id: 18 },
				{ cuisine_id: 1, home_chef_id: 19 },
				{ cuisine_id: 1, home_chef_id: 20 },
				{ cuisine_id: 4, home_chef_id: 20 },
				{ cuisine_id: 8, home_chef_id: 20 },
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Home_Chef_Cuisines', null, {});
	},
};
