'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Menu_Item extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Menu_Item.belongsTo(models.Menu, { foreignKey: 'menu_id' });
			Menu_Item.hasMany(models.Order_Item, { foreignKey: 'menu_item_id' });
		}
	}
	Menu_Item.init(
		{
			menu_id: DataTypes.INTEGER,
			name: DataTypes.STRING,
			image: DataTypes.STRING,
			description: DataTypes.TEXT,
			price: DataTypes.DECIMAL,
		},
		{
			sequelize,
			modelName: 'Menu_Item',
		}
	);
	return Menu_Item;
};
