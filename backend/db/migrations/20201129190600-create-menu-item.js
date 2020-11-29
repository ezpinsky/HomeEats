'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Menu_Items', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			menu_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Menus' },
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			image: {
				type: Sequelize.TEXT(),
				unique: false,
				allowNull: true,
			},
			description: {
				type: Sequelize.STRING(255),
				unique: false,
				allowNull: false,
			},
			price: {
				allowNull: false,
				type: Sequelize.DECIMAL,
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
		await queryInterface.dropTable('Menu_Items');
	},
};
