'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Home_Chef_Cuisines', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cuisine_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Cuisines' },
			},
			home_chef_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Home_Chefs' },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Home_Chef_Cuisines');
	},
};
