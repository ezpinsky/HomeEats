'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					email: 'demo@user.io',
          first_name: 'Demo',
          last_name: 'User'
          hashed_pass: bcrypt.hashSync('password'),
          zip: 33180
				},
				{
					email: 'fake@user1.io',
          first_name: 'Fake',
          last_name: 'User1'
          hashed_pass: bcrypt.hashSync('password'),
          zip: 33180
				},
				{
					email: 'fake@user2.io',
          first_name: 'Fake',
          last_name: 'User2'
          hashed_pass: bcrypt.hashSync('password'),
          zip: 33180
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			'Users',
			{
				email: { [Op.in]: ['demo@user.io', 'fake@user1.io', 'fake@user2.io'] },
			},
			{}
		);
	},
};
