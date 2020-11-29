'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Home_Chefs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true,
				references: { model: 'Users' },
			},
			image: {
				type: Sequelize.TEXT(),
				unique: false,
				allowNull: true,
			},
			name: {
				type: Sequelize.STRING(150),
				unique: true,
				allowNull: false,
			},
			street_address: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			zip: {
				type: Sequelize.STRING(5),
				allowNull: false,
				validate: { notEmpty: true, len: [5, 5] },
			},
			phone: {
				type: Sequelize.STRING(12),
				allowNull: false,
				validate: { notEmpty: true, len: [10, 12] },
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
		await queryInterface.dropTable('Home_Chefs');
	},
};
