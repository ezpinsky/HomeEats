'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Menu_Item_Dietary_Tags', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			menu_item_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Menu_Items' },
			},
			dietary_tag_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Dietary_Tags' },
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
		await queryInterface.dropTable('Menu_Item_Dietary_Tags');
	},
};
