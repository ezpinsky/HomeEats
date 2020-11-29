'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Menus', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			home_chef_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Home_Chefs' },
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(60),
			},
			eat_options: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.TEXT),
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
		await queryInterface.dropTable('Menus');
	},
};
